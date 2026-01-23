"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/app-provider';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          {t('heroTitle')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
          {t('heroSubtitle')}
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent-foreground">
          <Link href="#product-section">
            {t('shopNow')}
          </Link>
        </Button>
      </div>
    </section>
  );
}
