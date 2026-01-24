"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/app-provider';
import { MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=Srinivasa+Rao+Provision,Near+Anjaneyaswami+Statue,Vengal+Rao+Nagar,Kavali,Andhra+Pradesh,524201`;

  return (
    <footer className="bg-card shadow-inner mt-12">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-headline text-xl font-bold text-primary mb-2">{t('appName')}</h3>
            <p className="text-sm text-muted-foreground">{t('footerTagline')}</p>
          </div>
          <div className="md:col-span-1 md:justify-self-center">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">{t('visitUs')}</h4>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p>{t('addressLine1')}</p>
                  <p>{t('addressLine2')}</p>
                </div>
              </div>
            </a>
          </div>
          <div className="md:col-span-1 md:justify-self-end">
             <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Links</h4>
              <div className="flex flex-col gap-2 items-center md:items-end">
                <Link href="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('blogs')}
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('terms')}
                </Link>
              </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>
              &copy; {currentYear} {t('appName')}. {t('allRightsReserved')}
            </p>
        </div>
      </div>
    </footer>
  );
};
