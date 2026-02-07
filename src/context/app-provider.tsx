
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Language, Product, Category as CategoryType, Customer } from '@/lib/data';
import { translations } from '@/lib/translations';
import { initialProducts } from '@/database/products';
import { initialCategories } from '@/database/categories';
import { initialCustomers } from '@/database/customers';


// --- Language Context ---
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// --- Auth Context ---
type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// --- Store Context ---
type StoreContextType = {
    products: Product[];
    categories: CategoryType[];
    customers: Customer[];
    dataLoading: boolean;
    addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
    updateProduct: (product: Product) => Promise<void>;
    deleteProduct: (productId: string) => Promise<void>;
    addCategory: (category: Omit<CategoryType, 'id'>) => Promise<void>;
    updateCategory: (category: CategoryType) => Promise<void>;
    deleteCategory: (categoryId: string) => Promise<void>;
    addCustomer: (customer: Omit<Customer, 'id'>) => Promise<void>;
    updateCustomer: (customer: Customer) => Promise<void>;
    deleteCustomer: (customerId: string) => Promise<void>;
    getCategoriesWithProducts: () => (CategoryType & { products: Product[] })[];
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};

// --- Combined App Provider ---
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Store state - Initialized from static files
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<CategoryType[]>(initialCategories);
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [dataLoading, setDataLoading] = useState(false); // No initial load from db

  // Language Logic
  const t = useCallback((key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key];
  }, [language]);

  // Auth Logic
  useEffect(() => {
    try {
      const storedAuth = sessionStorage.getItem('isAuthenticated');
      if (storedAuth === 'true') {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Could not access sessionStorage:", error);
    }
    setIsAuthLoading(false);
  }, []);
  

  useEffect(() => {
    if (!isAuthLoading) {
        try {
          sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
        } catch (error) {
          console.error("Could not access sessionStorage:", error);
        }
    }
  }, [isAuthenticated, isAuthLoading]);

  const login = (email: string, pass: string) => {
    if (email === "dhanushnaginane@gmail.com" && pass === "Srinu@14111707") {
        setIsAuthenticated(true);
    } else {
        throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  
  // Store Logic with in-memory state
  const handleAddProduct = async (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: `prod-${Date.now()}` };
    setProducts(prev => [...prev, newProduct]);
    return Promise.resolve();
  };

  const handleUpdateProduct = async (product: Product) => {
    setProducts(prev => prev.map(p => (p.id === product.id ? product : p)));
    return Promise.resolve();
  };

  const handleDeleteProduct = async (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    return Promise.resolve();
  };
  
  const handleAddCategory = async (category: Omit<CategoryType, 'id'>) => {
    const newCategory = { ...category, id: `cat-${Date.now()}` };
    setCategories(prev => [...prev, newCategory]);
    return Promise.resolve();
  };

  const handleUpdateCategory = async (category: CategoryType) => {
    setCategories(prev => prev.map(c => (c.id === category.id ? category : c)));
    return Promise.resolve();
  };

  const handleDeleteCategory = async (categoryId: string) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
    // Also mark products in that category as uncategorized
    setProducts(prev => prev.map(p => p.categoryId === categoryId ? {...p, categoryId: 'uncategorized'} : p));
    return Promise.resolve();
  };

  const handleAddCustomer = async (customer: Omit<Customer, 'id'>) => {
    const newCustomer = { ...customer, id: `cust-${Date.now()}` };
    setCustomers(prev => [...prev, newCustomer]);
    return Promise.resolve();
  };

  const handleUpdateCustomer = async (customer: Customer) => {
    setCustomers(prev => prev.map(c => (c.id === customer.id ? customer : c)));
    return Promise.resolve();
  };

  const handleDeleteCustomer = async (customerId: string) => {
    setCustomers(prev => prev.filter(c => c.id !== customerId));
    return Promise.resolve();
  };
  
  const getCategoriesWithProducts = useCallback(() => {
    const categoryMap = new Map<string, Product[]>();
    products.forEach(p => {
        const catId = p.categoryId || 'uncategorized';
        if (!categoryMap.has(catId)) {
            categoryMap.set(catId, []);
        }
        categoryMap.get(catId)!.push(p);
    });

    const categorized = categories.map(cat => ({
        ...cat,
        products: categoryMap.get(cat.id) || []
    }));

    // Handle uncategorized products
    if(categoryMap.has('uncategorized')) {
        categorized.push({
            id: 'uncategorized',
            name: { en: 'Uncategorized', te: 'వర్గీకరించని', hi: 'अवर्गीकृत' },
            products: categoryMap.get('uncategorized')!
        });
    }
    
    return categorized;
  }, [products, categories]);

  const languageContextValue: LanguageContextType = { language, setLanguage, t };
  const authContextValue: AuthContextType = { isAuthenticated, isLoading: isAuthLoading, login, logout };
  const storeContextValue: StoreContextType = { 
    products, categories, customers, dataLoading,
    addProduct: handleAddProduct,
    updateProduct: handleUpdateProduct,
    deleteProduct: handleDeleteProduct,
    addCategory: handleAddCategory,
    updateCategory: handleUpdateCategory,
    deleteCategory: handleDeleteCategory,
    addCustomer: handleAddCustomer,
    updateCustomer: handleUpdateCustomer,
    deleteCustomer: handleDeleteCustomer,
    getCategoriesWithProducts
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <AuthContext.Provider value={authContextValue}>
        <StoreContext.Provider value={storeContextValue}>
            {children}
        </StoreContext.Provider>
      </AuthContext.Provider>
    </LanguageContext.Provider>
  );
};
