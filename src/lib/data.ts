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

export const categoriesData: Category[] = [
    { id: 'dals', name: { en: 'Dals & Pulses', te: 'పప్పులు & పప్పుధాన్యాలు', hi: 'दालें और दलहन' } },
    { id: 'rice', name: { en: 'Rice & Grains', te: 'బియ్యం & ధాన్యాలు', hi: 'चावल और अनाज' } },
    { id: 'spices', name: { en: 'Spices & Masalas', te: 'మసాలా దినుసులు', hi: 'मसाले' } },
    { id: 'cooking_essentials', name: { en: 'Cooking Essentials', te: 'వంట సామగ్రి', hi: 'खाना पकाने की अनिवार्यता' } },
    { id: 'oils', name: { en: 'Oils & Ghee', te: 'నూనెలు & నెయ్యి', hi: 'तेल और घी' } },
    { id: 'essentials', name: { en: 'Other Essentials', te: 'ఇతర నిత్యావసరాలు', hi: 'अन्य आवश्यक वस्तुएँ' } },
];

export const productsData: Product[] = [
  // Dals
  {
    id: 'toor-dal-1',
    name: { en: 'Toor Dal', te: 'కంది పప్పు', hi: 'अरहर की दाल' },
    options: [ { quantity: '500g', price: 85 }, { quantity: '1kg', price: 165 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'moong-dal-2',
    name: { en: 'Moong Dal', te: 'పెసర పప్పు', hi: 'मूंग दाल' },
    options: [ { quantity: '500g', price: 75 }, { quantity: '1kg', price: 140 } ],
    availability: 'out-of-stock',
    categoryId: 'dals',
  },
  {
    id: 'urad-dal-3',
    name: { en: 'Urad Dal', te: 'మినుప పప్పు', hi: 'उड़द दाल' },
    options: [ { quantity: '500g', price: 90 }, { quantity: '1kg', price: 175 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'chana-dal-4',
    name: { en: 'Chana Dal', te: 'శనగ పప్పు', hi: 'चना दाल' },
    options: [ { quantity: '500g', price: 70 }, { quantity: '1kg', price: 135 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'masoor-dal-5',
    name: { en: 'Masoor Dal', te: 'మసూర్ పప్పు', hi: 'मसूर दाल' },
    options: [ { quantity: '500g', price: 65 }, { quantity: '1kg', price: 125 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'green-peas-6',
    name: { en: 'Dried Green Peas', te: 'ఎండిన పచ్చి బఠానీలు', hi: 'सूखे हरे मटर' },
    options: [ { quantity: '500g', price: 80 } ],
    availability: 'out-of-stock',
    categoryId: 'dals',
  },
  {
    id: 'rajma-7',
    name: { en: 'Rajma (Kidney Beans)', te: 'రాజ్మా', hi: 'राजमा' },
    options: [ { quantity: '500g', price: 110 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'kabuli-chana-8',
    name: { en: 'Kabuli Chana (Chickpeas)', te: 'కాబూలీ శనగలు', hi: 'काबुली चना' },
    options: [ { quantity: '500g', price: 95 }, { quantity: '1kg', price: 180 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'black-eyed-peas-9',
    name: { en: 'Black Eyed Peas', te: 'అలసందలు', hi: 'लोबिया' },
    options: [ { quantity: '500g', price: 85 } ],
    availability: 'in-stock',
    categoryId: 'dals',
  },
  {
    id: 'horse-gram-10',
    name: { en: 'Horse Gram', te: 'ఉలవలు', hi: 'कुलथी' },
    options: [ { quantity: '500g', price: 70 } ],
    availability: 'out-of-stock',
    categoryId: 'dals',
  },
  // Rice
  {
    id: 'sona-masoori-11',
    name: { en: 'Sona Masoori Rice', te: 'సోనా మసూరి బియ్యం', hi: 'सोना मसूरी चावल' },
    options: [ { quantity: '10kg', price: 550 }, { quantity: '25kg', price: 1250 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'basmati-rice-12',
    name: { en: 'Basmati Rice', te: 'బాస్మతి బియ్యం', hi: 'बासमती चावल' },
    options: [ { quantity: '1kg', price: 160 }, { quantity: '5kg', price: 750 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'brown-rice-13',
    name: { en: 'Brown Rice', te: 'బ్రౌన్ రైస్', hi: 'ब्राउन राइस' },
    options: [ { quantity: '1kg', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'idli-rice-14',
    name: { en: 'Idli Rice', te: 'ఇడ్లీ బియ్యం', hi: 'इडली चावल' },
    options: [ { quantity: '1kg', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'poha-15',
    name: { en: 'Poha (Flattened Rice)', te: 'అటుకులు', hi: 'पोहा' },
    options: [ { quantity: '500g', price: 40 } ],
    availability: 'out-of-stock',
    categoryId: 'rice',
  },
  {
    id: 'rawa-16',
    name: { en: 'Sooji / Rawa (Semolina)', te: 'రవ్వ', hi: 'सूजी / रवा' },
    options: [ { quantity: '500g', price: 30 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'jowar-17',
    name: { en: 'Jowar (Sorghum)', te: 'జొన్నలు', hi: 'ज्वार' },
    options: [ { quantity: '1kg', price: 55 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'bajra-18',
    name: { en: 'Bajra (Pearl Millet)', te: 'సజ్జలు', hi: 'बाजरा' },
    options: [ { quantity: '1kg', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  {
    id: 'ragi-19',
    name: { en: 'Ragi (Finger Millet)', te: 'రాగి', hi: 'रागी' },
    options: [ { quantity: '1kg', price: 65 } ],
    availability: 'out-of-stock',
    categoryId: 'rice',
  },
  {
    id: 'sabudana-20',
    name: { en: 'Sabudana (Sago)', te: 'సగ్గుబియ్యం', hi: 'साबूदाना' },
    options: [ { quantity: '500g', price: 50 } ],
    availability: 'in-stock',
    categoryId: 'rice',
  },
  // Spices
  {
    id: 'turmeric-powder-21',
    name: { en: 'Turmeric Powder', te: 'పసుపు', hi: 'हल्दी पाउडर' },
    options: [ { quantity: '100g', price: 30 }, { quantity: '200g', price: 55 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'chilli-powder-22',
    name: { en: 'Red Chilli Powder', te: 'కారం పొడి', hi: 'मिर्च पाउडर' },
    options: [ { quantity: '250g', price: 95 }, { quantity: '500g', price: 180 } ],
    availability: 'out-of-stock',
    categoryId: 'spices',
  },
  {
    id: 'coriander-powder-23',
    name: { en: 'Coriander Powder', te: 'ధనియాల పొడి', hi: 'धनिया पाउडर' },
    options: [ { quantity: '200g', price: 40 }, { quantity: '500g', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'cumin-seeds-24',
    name: { en: 'Cumin Seeds (Jeera)', te: 'జీలకర్ర', hi: 'जीरा' },
    options: [ { quantity: '100g', price: 45 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'mustard-seeds-25',
    name: { en: 'Mustard Seeds (Rai)', te: 'ఆవాలు', hi: 'सरसों के बीज' },
    options: [ { quantity: '100g', price: 20 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'garam-masala-26',
    name: { en: 'Garam Masala', te: 'గరం మసాలా', hi: 'गरम मसाला' },
    options: [ { quantity: '100g', price: 70 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'black-pepper-27',
    name: { en: 'Black Pepper', te: 'నల్ల మిరియాలు', hi: 'काली मिर्च' },
    options: [ { quantity: '100g', price: 80 } ],
    availability: 'out-of-stock',
    categoryId: 'spices',
  },
  {
    id: 'cardamom-28',
    name: { en: 'Cardamom (Elaichi)', te: 'యాలకులు', hi: 'इलायची' },
    options: [ { quantity: '50g', price: 150 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'cloves-29',
    name: { en: 'Cloves (Laung)', te: 'లవంగాలు', hi: 'लौंग' },
    options: [ { quantity: '50g', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  {
    id: 'asafoetida-30',
    name: { en: 'Asafoetida (Hing)', te: 'ఇంగువ', hi: 'हींग' },
    options: [ { quantity: '50g', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'spices',
  },
  // Cooking Essentials
  {
    id: 'tamarind-31',
    name: { en: 'Tamarind', te: 'చింతపండు', hi: 'इमली' },
    options: [ { quantity: '250g', price: 35 }, { quantity: '500g', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'jaggery-32',
    name: { en: 'Jaggery', te: 'బెల్లం', hi: 'गुड़' },
    options: [ { quantity: '1kg', price: 80 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'ginger-garlic-paste-33',
    name: { en: 'Ginger Garlic Paste', te: 'అల్లం వెల్లుల్లి పేస్ట్', hi: 'अदरक लहसुन का पेस्ट' },
    options: [ { quantity: '300g', price: 50 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'poppy-seeds-34',
    name: { en: 'Poppy Seeds (Khus Khus)', te: 'గసగసాలు', hi: 'खसखस' },
    options: [ { quantity: '100g', price: 120 } ],
    availability: 'out-of-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'cashews-35',
    name: { en: 'Cashews', te: 'జీడిపప్పు', hi: 'काजू' },
    options: [ { quantity: '250g', price: 250 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'almonds-36',
    name: { en: 'Almonds', te: 'బాదం పప్పు', hi: 'बादाम' },
    options: [ { quantity: '250g', price: 220 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'raisins-37',
    name: { en: 'Raisins (Kishmish)', te: 'ఎండు ద్రాక్ష', hi: 'किशमिश' },
    options: [ { quantity: '250g', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'vinegar-38',
    name: { en: 'Synthetic Vinegar', te: 'వెనిగర్', hi: 'सिरका' },
    options: [ { quantity: '500ml', price: 40 } ],
    availability: 'out-of-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'soya-sauce-39',
    name: { en: 'Soya Sauce', te: 'సోయా సాస్', hi: 'सोया सॉस' },
    options: [ { quantity: '200ml', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  {
    id: 'rose-water-40',
    name: { en: 'Rose Water', te: 'రోజ్ వాటర్', hi: 'गुलाब जल' },
    options: [ { quantity: '100ml', price: 35 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
  },
  // Oils
  {
    id: 'sunflower-oil-41',
    name: { en: 'Sunflower Oil', te: 'పొద్దుతిరుగుడు నూనె', hi: 'सूरजमुखी तेल' },
    options: [{ quantity: '1L', price: 110 }, { quantity: '5L', price: 540 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'groundnut-oil-42',
    name: { en: 'Groundnut Oil', te: 'వేరుశెనగ నూనె', hi: 'मूंगफली का तेल' },
    options: [{ quantity: '1L', price: 180 }, { quantity: '5L', price: 880 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'ghee-43',
    name: { en: 'Pure Ghee', te: 'స్వచ్ఛమైన నెయ్యి', hi: 'शुद्ध घी' },
    options: [{ quantity: '500ml', price: 300 }, { quantity: '1L', price: 580 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'coconut-oil-44',
    name: { en: 'Coconut Oil', te: 'కొబ్బరి నూనె', hi: 'नारियल का तेल' },
    options: [{ quantity: '500ml', price: 120 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'sesame-oil-45',
    name: { en: 'Sesame Oil (Gingelly)', te: 'నువ్వుల నూనె', hi: 'तिल का तेल' },
    options: [{ quantity: '1L', price: 250 }],
    availability: 'out-of-stock',
    categoryId: 'oils',
  },
  {
    id: 'mustard-oil-46',
    name: { en: 'Mustard Oil', te: 'ఆవ నూనె', hi: 'सरसों का तेल' },
    options: [{ quantity: '1L', price: 150 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'castor-oil-47',
    name: { en: 'Castor Oil', te: 'ఆముదం', hi: 'अरंडी का तेल' },
    options: [{ quantity: '250ml', price: 70 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'vanaspati-48',
    name: { en: 'Vanaspati', te: 'వనస్పతి', hi: 'वनस्पति' },
    options: [{ quantity: '1kg', price: 130 }],
    availability: 'out-of-stock',
    categoryId: 'oils',
  },
  {
    id: 'olive-oil-49',
    name: { en: 'Olive Oil', te: 'ఆలివ్ నూనె', hi: 'जैतून का तेल' },
    options: [{ quantity: '500ml', price: 400 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  {
    id: 'palm-oil-50',
    name: { en: 'Palm Oil', te: 'పామాయిల్', hi: 'पाम तेल' },
    options: [{ quantity: '1L', price: 95 }],
    availability: 'in-stock',
    categoryId: 'oils',
  },
  // Essentials
  {
    id: 'atta-flour-51',
    name: { en: 'Whole Wheat Atta', te: 'గోధుమ పిండి', hi: 'आटा' },
    options: [ { quantity: '5kg', price: 230 }, { quantity: '10kg', price: 450 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'sugar-52',
    name: { en: 'Sugar', te: 'పంచదార', hi: 'चीनी' },
    options: [ { quantity: '1kg', price: 45 }, { quantity: '5kg', price: 220 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'salt-53',
    name: { en: 'Iodized Salt', te: 'అయోడైజ్డ్ ఉప్పు', hi: 'नमक' },
    options: [ { quantity: '1kg', price: 22 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'tea-powder-54',
    name: { en: 'Tea Powder', te: 'టీ పొడి', hi: 'चाय पत्ती' },
    options: [ { quantity: '250g', price: 130 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'coffee-powder-55',
    name: { en: 'Coffee Powder', te: 'కాఫీ పొడి', hi: 'कॉफी पाउडर' },
    options: [ { quantity: '100g', price: 95 } ],
    availability: 'out-of-stock',
    categoryId: 'essentials',
  },
  {
    id: 'besan-flour-56',
    name: { en: 'Besan (Gram Flour)', te: 'శనగ పిండి', hi: 'बेसन' },
    options: [ { quantity: '500g', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'maida-flour-57',
    name: { en: 'Maida (All Purpose Flour)', te: 'మైదా పిండి', hi: 'मैदा' },
    options: [ { quantity: '500g', price: 30 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'papad-58',
    name: { en: 'Papad', te: 'అప్పడాలు', hi: 'पापड़' },
    options: [ { quantity: '200g', price: 45 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
  {
    id: 'vermicelli-59',
    name: { en: 'Vermicelli', te: 'సేమియా', hi: 'सेवई' },
    options: [ { quantity: '400g', price: 50 } ],
    availability: 'out-of-stock',
    categoryId: 'essentials',
  },
  {
    id: 'rock-salt-60',
    name: { en: 'Rock Salt', te: 'రాతి ఉప్పు', hi: 'सेंधा नमक' },
    options: [ { quantity: '1kg', price: 35 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
  },
];


export const customersData: Customer[] = [
    { id: 'cus-1', name: 'Ravi Kumar', email: 'ravi.k@example.com', joinDate: '2022-03-15', totalOrders: 45, isLoyal: true, initials: 'RK' },
    { id: 'cus-2', name: 'Priya Sharma', email: 'priya.s@example.com', joinDate: '2023-01-20', totalOrders: 22, isLoyal: true, initials: 'PS' },
    { id: 'cus-3', name: 'Amit Singh', email: 'amit.s@example.com', joinDate: '2023-08-10', totalOrders: 8, isLoyal: false, initials: 'AS' },
    { id: 'cus-4', name: 'Lakshmi Devi', email: 'lakshmi.d@example.com', joinDate: '2021-11-05', totalOrders: 78, isLoyal: true, initials: 'LD' },
    { id: 'cus-5', name: 'Sanjay Reddy', email: 'sanjay.r@example.com', joinDate: '2024-02-01', totalOrders: 3, isLoyal: false, initials: 'SR' },
];
