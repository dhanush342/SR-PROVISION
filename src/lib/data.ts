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
  imageId: string;
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
        name: { en: 'Toor Dal', te: 'కంది పప్పు', hi: 'अरहर की दाल' },
        imageId: 'toor-dal',
        options: [
          { quantity: '1 kg', price: 120 },
          { quantity: '500 g', price: 65 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'moong-dal-1',
        name: { en: 'Moong Dal', te: 'పెసర పప్పు', hi: 'मूंग दाल' },
        imageId: 'moong-dal',
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
      en: 'Rice & Rice Products',
      te: 'బియ్యం & బియ్యం ఉత్పత్తులు',
      hi: 'चावल और चावल उत्पाद',
    },
    products: [
      {
        id: 'sona-masoori-1',
        name: { en: 'Sona Masoori Rice', te: 'సోనా మసూరి బియ్యం', hi: 'सोना मसूरी चावल' },
        imageId: 'sona-masoori-rice',
        options: [
          { quantity: '25 kg', price: 1500 },
          { quantity: '10 kg', price: 650 },
          { quantity: '5 kg', price: 340 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'basmati-rice-1',
        name: { en: 'Basmati Rice', te: 'బాస్మతి బియ్యం', hi: 'बासमती चावल' },
        imageId: 'basmati-rice',
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
        name: { en: 'Turmeric Powder', te: 'పసుపు పొడి', hi: 'हल्दी पाउडर' },
        imageId: 'turmeric-powder',
        options: [
          { quantity: '500 g', price: 80 },
          { quantity: '200 g', price: 35 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'chilli-powder-1',
        name: { en: 'Chilli Powder', te: 'కారం పొడి', hi: 'मिर्च पाउडर' },
        imageId: 'chilli-powder',
        options: [
          { quantity: '500 g', price: 150 },
          { quantity: '200 g', price: 65 },
        ],
        availability: 'in-stock',
      },
       {
        id: 'coriander-powder-1',
        name: { en: 'Coriander Powder', te: 'ధనియాల పొడి', hi: 'धनिया पाउडर' },
        imageId: 'coriander-powder',
        options: [
          { quantity: '500 g', price: 90 },
          { quantity: '200 g', price: 40 },
        ],
        availability: 'out-of-stock',
      },
    ],
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
        imageId: 'sunflower-oil',
        options: [{ quantity: '1 L', price: 110 }],
        availability: 'in-stock',
      },
      {
        id: 'groundnut-oil-1',
        name: { en: 'Groundnut Oil', te: 'వేరుశెనగ నూనె', hi: 'मूंगफली का तेल' },
        imageId: 'groundnut-oil',
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
        imageId: 'atta-flour',
        options: [
          { quantity: '10 kg', price: 450 },
          { quantity: '5 kg', price: 230 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'sugar-1',
        name: { en: 'Sugar', te: 'పంచదార', hi: 'चीनी' },
        imageId: 'sugar',
        options: [
          { quantity: '1 kg', price: 45 },
        ],
        availability: 'in-stock',
      },
      {
        id: 'salt-1',
        name: { en: 'Iodized Salt', te: 'అయోడైజ్డ్ ఉప్పు', hi: 'नमक' },
        imageId: 'salt',
        options: [
          { quantity: '1 kg', price: 22 },
        ],
        availability: 'in-stock',
      },
    ],
  },
];
