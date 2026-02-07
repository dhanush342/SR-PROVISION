
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/app-provider';

export function Hero() {
  const { t } = useLanguage();
  
  const heroImage = {
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    description: 'A welcoming aisle in a well-stocked grocery store, with shelves full of products.',
    imageHint: 'grocery store aisle'
  };

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-primary-foreground bg-secondary">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-background tracking-tight drop-shadow-lg">
          {t('heroTitleIntro')}{' '}
          <span className="text-accent">
             {t('heroTitleLocation')}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-background/90 drop-shadow-md">
          {t('heroSubtitle')}
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent-foreground shadow-lg transition-transform hover:scale-105">
          <Link href="#product-section">
            {t('shopNow')}
          </Link>
        </Button>
      </div>
    </section>
  );
}

    