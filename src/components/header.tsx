"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/app-provider';
import { LanguageSwitcher } from './language-switcher';
import { Button } from './ui/button';
import { User, MessageSquarePlus } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=Srinivasa+Rao+Provision,Near+Anjaneyaswami+Statue,Vengal+Rao+Nagar,Kavali,Andhra+Pradesh,524201`;

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl md:text-2xl font-headline font-bold text-primary transition-opacity hover:opacity-80">
            {t('appName')}
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link href="/#product-section" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{t('products')}</Link>
            <Link href="/#faq-section" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">FAQ</Link>
            <Link href="/blogs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{t('blogs')}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button asChild variant="outline" size="sm">
            <a 
              href={mapUrl}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t('addReview')}
            >
              <MessageSquarePlus className="md:mr-2" />
              <span className="hidden md:inline">{t('addReview')}</span>
            </a>
          </Button>
          <LanguageSwitcher />
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin" aria-label={t('adminLogin')}>
              <User className="md:mr-2" />
               <span className="hidden md:inline">{t('adminLogin')}</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
