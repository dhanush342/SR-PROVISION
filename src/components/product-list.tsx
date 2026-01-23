'use client';

import { useLanguage } from '@/context/app-provider';
import type { Category } from '@/lib/data';
import { ProductCard } from './product-card';

interface ProductListProps {
  categories: Category[];
}

export function ProductList({ categories }: ProductListProps) {
  const { language } = useLanguage();

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <section key={category.id} aria-labelledby={`category-title-${category.id}`}>
          <h2 id={`category-title-${category.id}`} className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary/20">
            {category.name[language]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
