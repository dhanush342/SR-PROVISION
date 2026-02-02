
'use client';

import { useState } from 'react';
import { Hero } from '@/components/hero';
import { ProductList } from '@/components/product-list';
import { useLanguage, useStore } from '@/context/app-provider';
import type { Category } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { LayoutGrid } from 'lucide-react';
import { Faq } from '@/components/faq';

export default function Home() {
  const { language } = useLanguage();
  const { getCategoriesWithProducts, categories } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const allCategoriesWithProducts = getCategoriesWithProducts();

  const displayCategories =
    selectedCategory === 'all'
      ? allCategoriesWithProducts
      : allCategoriesWithProducts.filter((cat) => cat.id === selectedCategory);

  const allItemsCategory: Pick<Category, 'id' | 'name'> = {
    id: 'all',
    name: { en: 'All Items', te: 'అన్నీ', hi: 'सभी आइटम' },
  };

  const filterButtonsCategories = [allItemsCategory, ...categories];

  return (
    <>
      <Hero />
      <div id="product-section" className="container mx-auto px-4 py-12">
        <section className="mb-10">
          <div className="flex overflow-x-auto space-x-3 pb-4 -mx-4 px-4">
            {filterButtonsCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'shadow-md shadow-primary/20 font-bold'
                    : ''
                }`}
              >
                {cat.id === 'all' && <LayoutGrid className="mr-2 h-4 w-4" />}
                {cat.name[language]}
              </Button>
            ))}
          </div>
        </section>

        <ProductList categories={displayCategories} />
      </div>
      <Faq />
    </>
  );
}
