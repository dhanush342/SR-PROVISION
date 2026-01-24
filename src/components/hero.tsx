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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-foreground tracking-tight leading-tight">
          {t('heroTitleIntro')}{' '}
          <span className="text-accent underline decoration-4 decoration-accent/30 underline-offset-4">
             {t('heroTitleLocation')}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 leading-relaxed">
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
