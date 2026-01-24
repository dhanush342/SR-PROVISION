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
        name: { en: 'Toor Dal', te: 'కంది పప్పు', hi: 'अरहर की दाल' },
        imageUrl: 'https://picsum.photos/seed/toor-dal/400/300',
        options: [ { quantity: '500g', price: 85 }, { quantity: '1kg', price: 165 } ],
        availability: 'in-stock',
      },
      {
        id: 'moong-dal-2',
        name: { en: 'Moong Dal', te: 'పెసర పప్పు', hi: 'मूंग दाल' },
        imageUrl: 'https://picsum.photos/seed/moong-dal/400/300',
        options: [ { quantity: '500g', price: 75 }, { quantity: '1kg', price: 140 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'urad-dal-3',
        name: { en: 'Urad Dal', te: 'మినుప పప్పు', hi: 'उड़द दाल' },
        imageUrl: 'https://picsum.photos/seed/urad-dal/400/300',
        options: [ { quantity: '500g', price: 90 }, { quantity: '1kg', price: 175 } ],
        availability: 'in-stock',
      },
      {
        id: 'chana-dal-4',
        name: { en: 'Chana Dal', te: 'శనగ పప్పు', hi: 'चना दाल' },
        imageUrl: 'https://picsum.photos/seed/chana-dal/400/300',
        options: [ { quantity: '500g', price: 70 }, { quantity: '1kg', price: 135 } ],
        availability: 'in-stock',
      },
      {
        id: 'masoor-dal-5',
        name: { en: 'Masoor Dal', te: 'మసూర్ పప్పు', hi: 'मसूर दाल' },
        imageUrl: 'https://picsum.photos/seed/masoor-dal/400/300',
        options: [ { quantity: '500g', price: 65 }, { quantity: '1kg', price: 125 } ],
        availability: 'in-stock',
      },
      {
        id: 'green-peas-6',
        name: { en: 'Dried Green Peas', te: 'ఎండిన పచ్చి బఠానీలు', hi: 'सूखे हरे मटर' },
        imageUrl: 'https://picsum.photos/seed/green-peas/400/300',
        options: [ { quantity: '500g', price: 80 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'rajma-7',
        name: { en: 'Rajma (Kidney Beans)', te: 'రాజ్మా', hi: 'राजमा' },
        imageUrl: 'https://picsum.photos/seed/rajma/400/300',
        options: [ { quantity: '500g', price: 110 } ],
        availability: 'in-stock',
      },
      {
        id: 'kabuli-chana-8',
        name: { en: 'Kabuli Chana (Chickpeas)', te: 'కాబూలీ శనగలు', hi: 'काबुली चना' },
        imageUrl: 'https://picsum.photos/seed/kabuli-chana/400/300',
        options: [ { quantity: '500g', price: 95 }, { quantity: '1kg', price: 180 } ],
        availability: 'in-stock',
      },
      {
        id: 'black-eyed-peas-9',
        name: { en: 'Black Eyed Peas', te: 'అలసందలు', hi: 'लोबिया' },
        imageUrl: 'https://picsum.photos/seed/black-eyed-peas/400/300',
        options: [ { quantity: '500g', price: 85 } ],
        availability: 'in-stock',
      },
      {
        id: 'horse-gram-10',
        name: { en: 'Horse Gram', te: 'ఉలవలు', hi: 'कुलथी' },
        imageUrl: 'https://picsum.photos/seed/horse-gram/400/300',
        options: [ { quantity: '500g', price: 70 } ],
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
        id: 'sona-masoori-11',
        name: { en: 'Sona Masoori Rice', te: 'సోనా మసూరి బియ్యం', hi: 'सोना मसूरी चावल' },
        imageUrl: 'https://picsum.photos/seed/sona-masoori/400/300',
        options: [ { quantity: '10kg', price: 550 }, { quantity: '25kg', price: 1250 } ],
        availability: 'in-stock',
      },
      {
        id: 'basmati-rice-12',
        name: { en: 'Basmati Rice', te: 'బాస్మతి బియ్యం', hi: 'बासमती चावल' },
        imageUrl: 'https://picsum.photos/seed/basmati-rice/400/300',
        options: [ { quantity: '1kg', price: 160 }, { quantity: '5kg', price: 750 } ],
        availability: 'in-stock',
      },
      {
        id: 'brown-rice-13',
        name: { en: 'Brown Rice', te: 'బ్రౌన్ రైస్', hi: 'ब्राउन राइस' },
        imageUrl: 'https://picsum.photos/seed/brown-rice/400/300',
        options: [ { quantity: '1kg', price: 90 } ],
        availability: 'in-stock',
      },
      {
        id: 'idli-rice-14',
        name: { en: 'Idli Rice', te: 'ఇడ్లీ బియ్యం', hi: 'इडली चावल' },
        imageUrl: 'https://picsum.photos/seed/idli-rice/400/300',
        options: [ { quantity: '1kg', price: 60 } ],
        availability: 'in-stock',
      },
      {
        id: 'poha-15',
        name: { en: 'Poha (Flattened Rice)', te: 'అటుకులు', hi: 'पोहा' },
        imageUrl: 'https://picsum.photos/seed/poha/400/300',
        options: [ { quantity: '500g', price: 40 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'rawa-16',
        name: { en: 'Sooji / Rawa (Semolina)', te: 'రవ్వ', hi: 'सूजी / रवा' },
        imageUrl: 'https://picsum.photos/seed/rawa/400/300',
        options: [ { quantity: '500g', price: 30 } ],
        availability: 'in-stock',
      },
      {
        id: 'jowar-17',
        name: { en: 'Jowar (Sorghum)', te: 'జొన్నలు', hi: 'ज्वार' },
        imageUrl: 'https://picsum.photos/seed/jowar/400/300',
        options: [ { quantity: '1kg', price: 55 } ],
        availability: 'in-stock',
      },
      {
        id: 'bajra-18',
        name: { en: 'Bajra (Pearl Millet)', te: 'సజ్జలు', hi: 'बाजरा' },
        imageUrl: 'https://picsum.photos/seed/bajra/400/300',
        options: [ { quantity: '1kg', price: 60 } ],
        availability: 'in-stock',
      },
      {
        id: 'ragi-19',
        name: { en: 'Ragi (Finger Millet)', te: 'రాగి', hi: 'रागी' },
        imageUrl: 'https://picsum.photos/seed/ragi/400/300',
        options: [ { quantity: '1kg', price: 65 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'sabudana-20',
        name: { en: 'Sabudana (Sago)', te: 'సగ్గుబియ్యం', hi: 'साबूदाना' },
        imageUrl: 'https://picsum.photos/seed/sabudana/400/300',
        options: [ { quantity: '500g', price: 50 } ],
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
        id: 'turmeric-powder-21',
        name: { en: 'Turmeric Powder', te: 'పసుపు', hi: 'हल्दी पाउडर' },
        imageUrl: 'https://picsum.photos/seed/turmeric/400/300',
        options: [ { quantity: '100g', price: 30 }, { quantity: '200g', price: 55 } ],
        availability: 'in-stock',
      },
      {
        id: 'chilli-powder-22',
        name: { en: 'Red Chilli Powder', te: 'కారం పొడి', hi: 'मिर्च पाउडर' },
        imageUrl: 'https://picsum.photos/seed/chilli-powder/400/300',
        options: [ { quantity: '250g', price: 95 }, { quantity: '500g', price: 180 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'coriander-powder-23',
        name: { en: 'Coriander Powder', te: 'ధనియాల పొడి', hi: 'धनिया पाउडर' },
        imageUrl: 'https://picsum.photos/seed/coriander-powder/400/300',
        options: [ { quantity: '200g', price: 40 }, { quantity: '500g', price: 90 } ],
        availability: 'in-stock',
      },
      {
        id: 'cumin-seeds-24',
        name: { en: 'Cumin Seeds (Jeera)', te: 'జీలకర్ర', hi: 'जीरा' },
        imageUrl: 'https://picsum.photos/seed/cumin-seeds/400/300',
        options: [ { quantity: '100g', price: 45 } ],
        availability: 'in-stock',
      },
      {
        id: 'mustard-seeds-25',
        name: { en: 'Mustard Seeds (Rai)', te: 'ఆవాలు', hi: 'सरसों के बीज' },
        imageUrl: 'https://picsum.photos/seed/mustard-seeds/400/300',
        options: [ { quantity: '100g', price: 20 } ],
        availability: 'in-stock',
      },
      {
        id: 'garam-masala-26',
        name: { en: 'Garam Masala', te: 'గరం మసాలా', hi: 'गरम मसाला' },
        imageUrl: 'https://picsum.photos/seed/garam-masala/400/300',
        options: [ { quantity: '100g', price: 70 } ],
        availability: 'in-stock',
      },
      {
        id: 'black-pepper-27',
        name: { en: 'Black Pepper', te: 'నల్ల మిరియాలు', hi: 'काली मिर्च' },
        imageUrl: 'https://picsum.photos/seed/black-pepper/400/300',
        options: [ { quantity: '100g', price: 80 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'cardamom-28',
        name: { en: 'Cardamom (Elaichi)', te: 'యాలకులు', hi: 'इलायची' },
        imageUrl: 'https://picsum.photos/seed/cardamom/400/300',
        options: [ { quantity: '50g', price: 150 } ],
        availability: 'in-stock',
      },
      {
        id: 'cloves-29',
        name: { en: 'Cloves (Laung)', te: 'లవంగాలు', hi: 'लौंग' },
        imageUrl: 'https://picsum.photos/seed/cloves/400/300',
        options: [ { quantity: '50g', price: 90 } ],
        availability: 'in-stock',
      },
      {
        id: 'asafoetida-30',
        name: { en: 'Asafoetida (Hing)', te: 'ఇంగువ', hi: 'हींग' },
        imageUrl: 'https://picsum.photos/seed/asafoetida/400/300',
        options: [ { quantity: '50g', price: 60 } ],
        availability: 'in-stock',
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
            id: 'tamarind-31',
            name: { en: 'Tamarind', te: 'చింతపండు', hi: 'इमली' },
            imageUrl: 'https://picsum.photos/seed/tamarind/400/300',
            options: [ { quantity: '250g', price: 35 }, { quantity: '500g', price: 60 } ],
            availability: 'in-stock',
        },
        {
            id: 'jaggery-32',
            name: { en: 'Jaggery', te: 'బెల్లం', hi: 'गुड़' },
            imageUrl: 'https://picsum.photos/seed/jaggery/400/300',
            options: [ { quantity: '1kg', price: 80 } ],
            availability: 'in-stock',
        },
        {
            id: 'ginger-garlic-paste-33',
            name: { en: 'Ginger Garlic Paste', te: 'అల్లం వెల్లుల్లి పేస్ట్', hi: 'अदरक लहसुन का पेस्ट' },
            imageUrl: 'https://picsum.photos/seed/gg-paste/400/300',
            options: [ { quantity: '300g', price: 50 } ],
            availability: 'in-stock',
        },
        {
            id: 'poppy-seeds-34',
            name: { en: 'Poppy Seeds (Khus Khus)', te: 'గసగసాలు', hi: 'खसखस' },
            imageUrl: 'https://picsum.photos/seed/poppy-seeds/400/300',
            options: [ { quantity: '100g', price: 120 } ],
            availability: 'out-of-stock',
        },
        {
            id: 'cashews-35',
            name: { en: 'Cashews', te: 'జీడిపప్పు', hi: 'काजू' },
            imageUrl: 'https://picsum.photos/seed/cashews/400/300',
            options: [ { quantity: '250g', price: 250 } ],
            availability: 'in-stock',
        },
        {
            id: 'almonds-36',
            name: { en: 'Almonds', te: 'బాదం పప్పు', hi: 'बादाम' },
            imageUrl: 'https://picsum.photos/seed/almonds/400/300',
            options: [ { quantity: '250g', price: 220 } ],
            availability: 'in-stock',
        },
        {
            id: 'raisins-37',
            name: { en: 'Raisins (Kishmish)', te: 'ఎండు ద్రాక్ష', hi: 'किशमिश' },
            imageUrl: 'https://picsum.photos/seed/raisins/400/300',
            options: [ { quantity: '250g', price: 90 } ],
            availability: 'in-stock',
        },
        {
            id: 'vinegar-38',
            name: { en: 'Synthetic Vinegar', te: 'వెనిగర్', hi: 'सिरका' },
            imageUrl: 'https://picsum.photos/seed/vinegar/400/300',
            options: [ { quantity: '500ml', price: 40 } ],
            availability: 'out-of-stock',
        },
        {
            id: 'soya-sauce-39',
            name: { en: 'Soya Sauce', te: 'సోయా సాస్', hi: 'सोया सॉस' },
            imageUrl: 'https://picsum.photos/seed/soya-sauce/400/300',
            options: [ { quantity: '200ml', price: 60 } ],
            availability: 'in-stock',
        },
        {
            id: 'rose-water-40',
            name: { en: 'Rose Water', te: 'రోజ్ వాటర్', hi: 'गुलाब जल' },
            imageUrl: 'https://picsum.photos/seed/rose-water/400/300',
            options: [ { quantity: '100ml', price: 35 } ],
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
        id: 'sunflower-oil-41',
        name: { en: 'Sunflower Oil', te: 'పొద్దుతిరుగుడు నూనె', hi: 'सूरजमुखी तेल' },
        imageUrl: 'https://picsum.photos/seed/sunflower-oil/400/300',
        options: [{ quantity: '1L', price: 110 }, { quantity: '5L', price: 540 }],
        availability: 'in-stock',
      },
      {
        id: 'groundnut-oil-42',
        name: { en: 'Groundnut Oil', te: 'వేరుశెనగ నూనె', hi: 'मूंगफली का तेल' },
        imageUrl: 'https://picsum.photos/seed/groundnut-oil/400/300',
        options: [{ quantity: '1L', price: 180 }, { quantity: '5L', price: 880 }],
        availability: 'in-stock',
      },
      {
        id: 'ghee-43',
        name: { en: 'Pure Ghee', te: 'స్వచ్ఛమైన నెయ్యి', hi: 'शुद्ध घी' },
        imageUrl: 'https://picsum.photos/seed/ghee/400/300',
        options: [{ quantity: '500ml', price: 300 }, { quantity: '1L', price: 580 }],
        availability: 'in-stock',
      },
      {
        id: 'coconut-oil-44',
        name: { en: 'Coconut Oil', te: 'కొబ్బరి నూనె', hi: 'नारियल का तेल' },
        imageUrl: 'https://picsum.photos/seed/coconut-oil/400/300',
        options: [{ quantity: '500ml', price: 120 }],
        availability: 'in-stock',
      },
      {
        id: 'sesame-oil-45',
        name: { en: 'Sesame Oil (Gingelly)', te: 'నువ్వుల నూనె', hi: 'तिल का तेल' },
        imageUrl: 'https://picsum.photos/seed/sesame-oil/400/300',
        options: [{ quantity: '1L', price: 250 }],
        availability: 'out-of-stock',
      },
      {
        id: 'mustard-oil-46',
        name: { en: 'Mustard Oil', te: 'ఆవ నూనె', hi: 'सरसों का तेल' },
        imageUrl: 'https://picsum.photos/seed/mustard-oil/400/300',
        options: [{ quantity: '1L', price: 150 }],
        availability: 'in-stock',
      },
      {
        id: 'castor-oil-47',
        name: { en: 'Castor Oil', te: 'ఆముదం', hi: 'अरंडी का तेल' },
        imageUrl: 'https://picsum.photos/seed/castor-oil/400/300',
        options: [{ quantity: '250ml', price: 70 }],
        availability: 'in-stock',
      },
       {
        id: 'vanaspati-48',
        name: { en: 'Vanaspati', te: 'వనస్పతి', hi: 'वनस्पति' },
        imageUrl: 'https://picsum.photos/seed/vanaspati/400/300',
        options: [{ quantity: '1kg', price: 130 }],
        availability: 'out-of-stock',
      },
       {
        id: 'olive-oil-49',
        name: { en: 'Olive Oil', te: 'ఆలివ్ నూనె', hi: 'जैतून का तेल' },
        imageUrl: 'https://picsum.photos/seed/olive-oil/400/300',
        options: [{ quantity: '500ml', price: 400 }],
        availability: 'in-stock',
      },
       {
        id: 'palm-oil-50',
        name: { en: 'Palm Oil', te: 'పామాయిల్', hi: 'पाम तेल' },
        imageUrl: 'https://picsum.photos/seed/palm-oil/400/300',
        options: [{ quantity: '1L', price: 95 }],
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
        id: 'atta-flour-51',
        name: { en: 'Whole Wheat Atta', te: 'గోధుమ పిండి', hi: 'आटा' },
        imageUrl: 'https://picsum.photos/seed/atta-flour/400/300',
        options: [ { quantity: '5kg', price: 230 }, { quantity: '10kg', price: 450 } ],
        availability: 'in-stock',
      },
      {
        id: 'sugar-52',
        name: { en: 'Sugar', te: 'పంచదార', hi: 'चीनी' },
        imageUrl: 'https://picsum.photos/seed/sugar/400/300',
        options: [ { quantity: '1kg', price: 45 }, { quantity: '5kg', price: 220 } ],
        availability: 'in-stock',
      },
      {
        id: 'salt-53',
        name: { en: 'Iodized Salt', te: 'అయోడైజ్డ్ ఉప్పు', hi: 'नमक' },
        imageUrl: 'https://picsum.photos/seed/salt/400/300',
        options: [ { quantity: '1kg', price: 22 } ],
        availability: 'in-stock',
      },
      {
        id: 'tea-powder-54',
        name: { en: 'Tea Powder', te: 'టీ పొడి', hi: 'चाय पत्ती' },
        imageUrl: 'https://picsum.photos/seed/tea-powder/400/300',
        options: [ { quantity: '250g', price: 130 } ],
        availability: 'in-stock',
      },
      {
        id: 'coffee-powder-55',
        name: { en: 'Coffee Powder', te: 'కాఫీ పొడి', hi: 'कॉफी पाउडर' },
        imageUrl: 'https://picsum.photos/seed/coffee-powder/400/300',
        options: [ { quantity: '100g', price: 95 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'besan-flour-56',
        name: { en: 'Besan (Gram Flour)', te: 'శనగ పిండి', hi: 'बेसन' },
        imageUrl: 'https://picsum.photos/seed/besan-flour/400/300',
        options: [ { quantity: '500g', price: 60 } ],
        availability: 'in-stock',
      },
      {
        id: 'maida-flour-57',
        name: { en: 'Maida (All Purpose Flour)', te: 'మైదా పిండి', hi: 'मैदा' },
        imageUrl: 'https://picsum.photos/seed/maida-flour/400/300',
        options: [ { quantity: '500g', price: 30 } ],
        availability: 'in-stock',
      },
      {
        id: 'papad-58',
        name: { en: 'Papad', te: 'అప్పడాలు', hi: 'पापड़' },
        imageUrl: 'https://picsum.photos/seed/papad/400/300',
        options: [ { quantity: '200g', price: 45 } ],
        availability: 'in-stock',
      },
      {
        id: 'vermicelli-59',
        name: { en: 'Vermicelli', te: 'సేమియా', hi: 'सेवई' },
        imageUrl: 'https://picsum.photos/seed/vermicelli/400/300',
        options: [ { quantity: '400g', price: 50 } ],
        availability: 'out-of-stock',
      },
      {
        id: 'rock-salt-60',
        name: { en: 'Rock Salt', te: 'రాతి ఉప్పు', hi: 'सेंधा नमक' },
        imageUrl: 'https://picsum.photos/seed/rock-salt/400/300',
        options: [ { quantity: '1kg', price: 35 } ],
        availability: 'in-stock',
      },
    ],
  },
];

    