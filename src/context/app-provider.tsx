"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import type { Language } from '@/lib/data';
import { translations } from '@/lib/translations';

// --- Language Context ---
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

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
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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


  const login = (email: string) => {
    // In a real app, you'd validate credentials against a backend.
    // Here we just check if the email matches the owner's email.
    if (email === 'dhanushnaginane@gmail.com') {
      setIsAuthenticated(true);
    } else {
        throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// --- App Provider ---
export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </LanguageProvider>
  );
};
