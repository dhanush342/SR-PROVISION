export type Language = 'en' | 'te' | 'hi';

export type TranslatedString = {
  [key in Language]: string;
};

export type ProductOption = {
  quantity: string;
  price: number;
};

export type Product = {
  id: string;
  name: TranslatedString;
  options: ProductOption[];
  availability: 'in-stock' | 'out-of-stock';
  categoryId: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: TranslatedString;
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    joinDate: string;
    totalOrders: number;
    isLoyal: boolean;
    initials: string;
};
