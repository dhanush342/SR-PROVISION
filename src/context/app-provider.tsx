
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Language, Product, Category as CategoryType, Customer } from '@/lib/data';
import { translations } from '@/lib/translations';
import { productsData, categoriesData, customersData } from '@/database';

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
    addProduct: (product: Product) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
    addCategory: (category: CategoryType) => void;
    updateCategory: (category: CategoryType) => void;
    deleteCategory: (categoryId: string) => void;
    addCustomer: (customer: Customer) => void;
    updateCustomer: (customer: Customer) => void;
    deleteCustomer: (customerId: string) => void;
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
  const [isLoading, setIsLoading] = useState(true);

  // Store state
  const [products, setProducts] = useState<Product[]>(productsData);
  const [categories, setCategories] = useState<CategoryType[]>(categoriesData);
  const [customers, setCustomers] = useState<Customer[]>(customersData);

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
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
        try {
          sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
        } catch (error) {
          console.error("Could not access sessionStorage:", error);
        }
    }
  }, [isAuthenticated, isLoading]);

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
  
  // Store Logic
  const addProduct = (product: Product) => setProducts(prev => [product, ...prev]);
  const updateProduct = (product: Product) => setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  const deleteProduct = (productId: string) => setProducts(prev => prev.filter(p => p.id !== productId));
  
  const addCategory = (category: CategoryType) => setCategories(prev => [category, ...prev]);
  const updateCategory = (category: CategoryType) => setCategories(prev => prev.map(c => c.id === category.id ? category : c));
  const deleteCategory = (categoryId: string) => {
    setProducts(prev => prev.map(p => p.categoryId === categoryId ? {...p, categoryId: 'uncategorized'} : p));
    setCategories(prev => prev.filter(c => c.id !== categoryId));
  };

  const addCustomer = (customer: Customer) => setCustomers(prev => [customer, ...prev]);
  const updateCustomer = (customer: Customer) => setCustomers(prev => prev.map(c => c.id === customer.id ? customer : c));
  const deleteCustomer = (customerId: string) => setCustomers(prev => prev.filter(c => c.id !== customerId));
  
  const getCategoriesWithProducts = useCallback(() => {
    const categoryMap = new Map<string, Product[]>();
    products.forEach(p => {
        if (!categoryMap.has(p.categoryId)) {
            categoryMap.set(p.categoryId, []);
        }
        categoryMap.get(p.categoryId)!.push(p);
    });

    return categories.map(cat => ({
        ...cat,
        products: categoryMap.get(cat.id) || []
    })).sort((a,b) => a.id === 'uncategorized' ? 1 : b.id === 'uncategorized' ? -1 : 0);
  }, [products, categories]);

  const languageContextValue: LanguageContextType = { language, setLanguage, t };
  const authContextValue: AuthContextType = { isAuthenticated, isLoading, login, logout };
  const storeContextValue: StoreContextType = { 
    products, categories, customers,
    addProduct, updateProduct, deleteProduct,
    addCategory, updateCategory, deleteCategory,
    addCustomer, updateCustomer, deleteCustomer,
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

    