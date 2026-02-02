
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Language, Product, Category as CategoryType, Customer } from '@/lib/data';
import { translations } from '@/lib/translations';
import { getProducts, getCategories, getCustomers, addProduct, updateProduct, deleteProduct, addCategory, updateCategory, deleteCategory, addCustomer, updateCustomer, deleteCustomer } from '@/app/actions';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('en');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Store state
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

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
  
  // Data Fetching Logic
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setDataLoading(true);
        const [productsData, categoriesData, customersData] = await Promise.all([
          getProducts(),
          getCategories(),
          getCustomers()
        ]);
        setProducts(productsData as Product[]);
        setCategories(categoriesData as CategoryType[]);
        setCustomers(customersData as Customer[]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Handle error appropriately, maybe show a toast
      } finally {
        setDataLoading(false);
      }
    };
    fetchAllData();
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
  
  // Store Logic with Server Actions
  const handleAddProduct = async (product: Omit<Product, 'id'>) => {
    await addProduct(product);
    // Re-fetching data after mutation to ensure consistency
    const productsData = await getProducts();
    setProducts(productsData as Product[]);
  };

  const handleUpdateProduct = async (product: Product) => {
    await updateProduct(product);
    const productsData = await getProducts();
    setProducts(productsData as Product[]);
  };

  const handleDeleteProduct = async (productId: string) => {
    await deleteProduct(productId);
    const productsData = await getProducts();
    setProducts(productsData as Product[]);
  };
  
  const handleAddCategory = async (category: Omit<CategoryType, 'id'>) => {
    await addCategory(category);
    const categoriesData = await getCategories();
    setCategories(categoriesData as CategoryType[]);
  };

  const handleUpdateCategory = async (category: CategoryType) => {
    await updateCategory(category);
    const categoriesData = await getCategories();
    setCategories(categoriesData as CategoryType[]);
  };

  const handleDeleteCategory = async (categoryId: string) => {
    await deleteCategory(categoryId);
    const [productsData, categoriesData] = await Promise.all([getProducts(), getCategories()]);
    setProducts(productsData as Product[]);
    setCategories(categoriesData as CategoryType[]);
  };

  const handleAddCustomer = async (customer: Omit<Customer, 'id'>) => {
    await addCustomer(customer);
    const customersData = await getCustomers();
    setCustomers(customersData as Customer[]);
  };

  const handleUpdateCustomer = async (customer: Customer) => {
    await updateCustomer(customer);
    const customersData = await getCustomers();
    setCustomers(customersData as Customer[]);
  };

  const handleDeleteCustomer = async (customerId: string) => {
    await deleteCustomer(customerId);
    const customersData = await getCustomers();
    setCustomers(customersData as Customer[]);
  };
  
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
