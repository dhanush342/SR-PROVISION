"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/app-provider';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card shadow-inner mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/blogs" className="text-sm hover:text-primary transition-colors">
            {t('blogs')}
          </Link>
          <Link href="/terms" className="text-sm hover:text-primary transition-colors">
            {t('terms')}
          </Link>
        </div>
        <p className="text-xs">
          &copy; {currentYear} {t('appName')}. {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};
