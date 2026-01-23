"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/app-provider';
import { LanguageSwitcher } from './language-switcher';
import { Button } from './ui/button';
import { User, MessageSquarePlus } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl md:text-2xl font-headline font-bold text-primary transition-opacity hover:opacity-80">
            {t('appName')}
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link href="/#product-section" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{t('products')}</Link>
            <Link href="/blogs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{t('blogs')}</Link>
            <Link href="/terms" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{t('terms')}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button asChild variant="outline" size="sm">
            <a 
              href="https://www.google.com/maps/place/Srinivasa+Rao+provision/@14.9097938,79.9771986,17z/data=!4m8!3m7!1s0x3a4b7b0003929335:0x5e9053fd4415714c!8m2!3d14.9097886!4d79.9797735!9m1!1b1!16s%2Fg%2F11m5xxlxvg?entry=ttu" 
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
