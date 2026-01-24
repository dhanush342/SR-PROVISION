
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/app-provider';
import type { Product } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const image = PlaceHolderImages.find(p => p.id === product.id);
  const [imgSrc, setImgSrc] = useState(image?.imageUrl || `https://picsum.photos/seed/${product.id}/400/300`);

  const handleQuantityChange = (value: string) => {
    const option = product.options.find(opt => opt.quantity === value);
    if (option) {
      setSelectedOption(option);
    }
  };

  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="overflow-hidden aspect-[4/3] bg-muted relative">
            <Image
              src={imgSrc}
              alt={product.name[language]}
              width={400}
              height={300}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgSrc(`https://picsum.photos/seed/${product.id}/400/300`)}
              data-ai-hint={image?.imageHint}
            />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg mb-2 truncate" title={product.name[language]}>
          {product.name[language]}
        </CardTitle>
        <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{t('availability')}</span>
            <Badge variant={product.availability === 'in-stock' ? 'secondary' : 'destructive'}>
                {product.availability === 'in-stock' ? t('inStock') : t('outOfStock')}
            </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="w-full sm:w-1/2">
            <span className="text-xs text-muted-foreground">{t('quantity')}</span>
            <Select onValueChange={handleQuantityChange} defaultValue={selectedOption.quantity}>
                <SelectTrigger className="h-9">
                    <SelectValue placeholder={t('quantity')} />
                </SelectTrigger>
                <SelectContent>
                    {product.options.map(option => (
                        <SelectItem key={option.quantity} value={option.quantity}>
                            {option.quantity}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-start sm:items-end">
            <span className="text-xs text-muted-foreground">{t('price')}</span>
            <p className="text-xl font-bold text-primary">
                ₹{selectedOption.price.toFixed(2)}
            </p>
        </div>
      </CardFooter>
    </Card>
  );
}
