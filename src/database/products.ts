import { Product } from '@/lib/data';

export const initialProducts: Product[] = [
  // Dals & Pulses
  {
    id: 'prod1',
    name: { en: 'Toor Dal', te: 'కంది పప్పు', hi: 'अरहर की दाल' },
    categoryId: 'cat1',
    imageUrl: 'https://images.unsplash.com/photo-1600898254589-34354005704c?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '500g', price: 80 },
      { quantity: '1kg', price: 150 },
    ],
    availability: 'in-stock',
  },
  {
    id: 'prod2',
    name: { en: 'Moong Dal', te: 'పెసర పప్పు', hi: 'मूंग दाल' },
    categoryId: 'cat1',
    imageUrl: 'https://images.unsplash.com/photo-1585435467022-c798d78f4a19?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '500g', price: 90 },
      { quantity: '1kg', price: 170 },
    ],
    availability: 'in-stock',
  },
  // Rice & Grains
  {
    id: 'prod3',
    name: { en: 'Sona Masoori Rice', te: 'సోనా మసూరి బియ్యం', hi: 'सोना मसूरी चावल' },
    categoryId: 'cat2',
    imageUrl: 'https://images.unsplash.com/photo-1586201375822-52c6734f23ff?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '5kg', price: 450 },
      { quantity: '10kg', price: 880 },
      { quantity: '25kg', price: 2100 },
    ],
    availability: 'in-stock',
  },
  {
    id: 'prod4',
    name: { en: 'Basmati Rice', te: 'బాస్మతి బియ్యం', hi: 'बासमती चावल' },
    categoryId: 'cat2',
    imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff3b7b063e8b?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '1kg', price: 250 },
      { quantity: '5kg', price: 1200 },
    ],
    availability: 'out-of-stock',
  },
  // Spices & Masalas
  {
    id: 'prod5',
    name: { en: 'Turmeric Powder', te: 'పసుపు పొడి', hi: 'हल्दी पाउडर' },
    categoryId: 'cat3',
    imageUrl: 'https://images.unsplash.com/photo-1582215999427-00994c636703?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '100g', price: 40 },
      { quantity: '250g', price: 90 },
    ],
    availability: 'in-stock',
  },
  {
    id: 'prod6',
    name: { en: 'Red Chilli Powder', te: 'ఎర్ర కారం పొడి', hi: 'लाल मिर्च पाउडर' },
    categoryId: 'cat3',
    imageUrl: 'https://images.unsplash.com/photo-1599789196297-8494916a4f9a?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '100g', price: 60 },
      { quantity: '250g', price: 140 },
    ],
    availability: 'in-stock',
  },
  // Oils & Ghee
  {
    id: 'prod7',
    name: { en: 'Sunflower Oil', te: 'పొద్దుతిరుగుడు నూనె', hi: 'सूरजमुखी तेल' },
    categoryId: 'cat4',
    imageUrl: 'https://images.unsplash.com/photo-1626083286248-19e49de3c4f7?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '1L', price: 180 },
    ],
    availability: 'in-stock',
  },
  {
    id: 'prod8',
    name: { en: 'Pure Ghee', te: 'స్వచ్ఛమైన నెయ్యి', hi: 'शुद्ध घी' },
    categoryId: 'cat4',
    imageUrl: 'https://images.unsplash.com/photo-1614398681473-d56b4f7b6782?q=80&w=400&h=300&fit=crop',
    options: [
      { quantity: '500ml', price: 350 },
    ],
    availability: 'in-stock',
  },
];
