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
  imageUrl: string;
  options: ProductOption[];
  availability: 'in-stock' | 'out-of-stock';
};

export type Category = {
  id: string;
  name: TranslatedString;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: 'dals',
    name: {
      en: 'Dals & Pulses',
      te: 'పప్పులు & పప్పుధాన్యాలు',
      hi: 'दालें और दलहन',
    },
    products: [
      {
        id: 'toor-dal-1',
        name: { en: 'Toor Dal', te: 'కంది పప్పు (Kandi Pappu)', hi: 'अरहर की दाल' },
        imageUrl: 'https://images.unsplash.com/photo-1667390034698-c2369cd1668b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsZW50aWxzJTIwYm93bHxlbnwwfHx8fDE3NjkwNzAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '500g', price: 85 },
          { quantity: '1kg', price: 165 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'moong-dal-1',
        name: { en: 'Moong Dal', te: 'పెసర పప్పు', hi: 'मूंग दाल' },
        imageUrl: 'https://images.unsplash.com/photo-1711915408847-ae32b80a3fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxsZW50aWxzJTIwYm93bHxlbnwwfHx8fDE3NjkwNzAyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '1 kg', price: 140 },
          { quantity: '500 g', price: 75 },
        ],
        availability: 'out-of-stock',
      },
    ],
  },
  {
    id: 'rice',
    name: {
      en: 'Rice & Grains',
      te: 'బియ్యం & ధాన్యాలు',
      hi: 'चावल और अनाज',
    },
    products: [
      {
        id: 'sona-masoori-1',
        name: { en: 'Sona Masoori Rice', te: 'సోనా మసూరి బియ్యం', hi: 'सोना मसूरी चावल' },
        imageUrl: 'https://images.unsplash.com/photo-1723475158229-894679ca024e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyaWNlJTIwc2Fja3xlbnwwfHx8fDE3NjkwNzAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '25kg', price: 1250 },
          { quantity: '10kg', price: 550 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'basmati-rice-1',
        name: { en: 'Basmati Rice', te: 'బాస్మతి బియ్యం', hi: 'बासमती चावल' },
        imageUrl: 'https://images.unsplash.com/photo-1682566509568-ded8649b26bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxyaWNlJTIwYm93bHxlbnwwfHx8fDE3NjkwOTkzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '5 kg', price: 750 },
          { quantity: '1 kg', price: 160 },
        ],
        availability: 'in-stock',
      },
    ],
  },
  {
    id: 'spices',
    name: {
      en: 'Spices & Masalas',
      te: 'మసాలా దినుసులు',
      hi: 'मसाले',
    },
    products: [
      {
        id: 'turmeric-powder-1',
        name: { en: 'Turmeric Powder', te: 'పసుపు (Pasupu)', hi: 'हल्दी पाउडर' },
        imageUrl: 'https://images.unsplash.com/photo-1633881614907-8587c9b93c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzcGljZXMlMjBwb3dkZXJ8ZW58MHx8fHwxNzY5MTQzODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '100g', price: 30 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'chilli-powder-1',
        name: { en: 'Red Chilli Powder', te: 'కారం పొడి (Karam)', hi: 'मिर्च पाउडर' },
        imageUrl: 'https://images.unsplash.com/photo-1767514562412-91a63641cde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzcGljZXMlMjBwb3dkZXJ8ZW58MHx8fHwxNzY5MTQzODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '250g', price: 95 },
        ],
        availability: 'out-of-stock',
      },
       {
        id: 'coriander-powder-1',
        name: { en: 'Coriander Powder', te: 'ధనియాల పొడి', hi: 'धनिया पाउडर' },
        imageUrl: 'https://images.unsplash.com/photo-1722262796195-728fdf4a449f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzcGljZXMlMjBwb3dkZXJ8ZW58MHx8fHwxNzY5MTQzODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '500 g', price: 90 },
          { quantity: '200 g', price: 40 },
        ],
        availability: 'out-of-stock',
      },
    ],
  },
  {
    id: 'cooking_essentials',
    name: {
        en: 'Cooking Essentials',
        te: 'వంట సామగ్రి',
        hi: 'खाना पकाने की अनिवार्यता',
    },
    products: [
        {
            id: 'tamarind-1',
            name: { en: 'Tamarind', te: 'చింతపండు (Chintapandu)', hi: 'इमली' },
            imageUrl: 'https://picsum.photos/seed/tamarind/400/300',
            options: [
                { quantity: '500g', price: 60 },
                { quantity: '250g', price: 35 },
            ],
            availability: 'in-stock',
        },
    ]
   },
  {
    id: 'oils',
    name: {
      en: 'Oils & Ghee',
      te: 'నూనెలు & నెయ్యి',
      hi: 'तेल और घी',
    },
    products: [
      {
        id: 'sunflower-oil-1',
        name: { en: 'Sunflower Oil', te: 'పొద్దుతిరుగుడు నూనె', hi: 'सूरजमुखी तेल' },
        imageUrl: 'https://images.unsplash.com/photo-1608571424237-381e6b43a2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxvaWwlMjBib3R0bGV8ZW58MHx8fHwxNzY5MTQzODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [{ quantity: '1 L', price: 110 }],
        availability: 'in-stock',
      },
      {
        id: 'groundnut-oil-1',
        name: { en: 'Groundnut Oil', te: 'వేరుశెనగ నూనె', hi: 'मूंगफली का तेल' },
        imageUrl: 'https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvaWwlMjBib3R0bGV8ZW58MHx8fHwxNzY5MTQzODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [{ quantity: '1 L', price: 180 }],
        availability: 'in-stock',
      },
    ],
  },
   {
    id: 'essentials',
    name: {
      en: 'Other Essentials',
      te: 'ఇతర నిత్యావసరాలు',
      hi: 'अन्य आवश्यक वस्तुएँ',
    },
    products: [
      {
        id: 'atta-flour-1',
        name: { en: 'Whole Wheat Atta', te: 'గోధుమ పిండి', hi: 'आटा' },
        imageUrl: 'https://images.unsplash.com/photo-1646539248100-0a92d659d4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmbG91ciUyMGJhZ3xlbnwwfHx8fDE3NjkwOTQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '10 kg', price: 450 },
          { quantity: '5 kg', price: 230 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'sugar-1',
        name: { en: 'Sugar', te: 'పంచదార', hi: 'चीनी' },
        imageUrl: 'https://images.unsplash.com/photo-1611484907128-9acda09a35a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzdWdhciUyMGN1YmVzfGVufDB8fHx8MTc2OTE0Mzg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '1 kg', price: 45 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'salt-1',
        name: { en: 'Iodized Salt', te: 'అయోడైజ్డ్ ఉప్పు', hi: 'नमक' },
        imageUrl: 'https://images.unsplash.com/photo-1599446018101-168ff8842a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWx0JTIwcGlsZXxlbnwwfHx8fDE3NjkxNDM4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        options: [
          { quantity: '1 kg', price: 22 },
        ],
        availability: 'in-stock',
      },
    ],
  },
];
