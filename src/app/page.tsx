import { Hero } from '@/components/hero';
import { ProductList } from '@/components/product-list';
import { categories } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="product-section" className="container mx-auto px-4 py-12">
        <ProductList categories={categories} />
      </div>
    </>
  );
}
