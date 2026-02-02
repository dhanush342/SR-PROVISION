
import type { Product, Category, Customer } from '@/lib/data';

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
    imageUrl: "https://images.unsplash.com/photo-1620265105743-2d4e5222f0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0b29yJTIwZGFsfGVufDB8fHx8MTc3MDE3MTg3N3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'moong-dal-2',
    name: { en: 'Moong Dal', te: 'పెసర పప్పు', hi: 'मूंग दाल' },
    options: [ { quantity: '500g', price: 75 }, { quantity: '1kg', price: 140 } ],
    availability: 'out-of-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1610348725531-b45732a396c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb29uZyUyMGRhbHxlbnwwfHx8fDE3NzAxNzE5MDh8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'urad-dal-3',
    name: { en: 'Urad Dal', te: 'మినుప పప్పు', hi: 'उड़द दाल' },
    options: [ { quantity: '500g', price: 90 }, { quantity: '1kg', price: 175 } ],
    availability: 'in-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1591266798549-32fa7cd32f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1cmFkJTIwZGFsfGVufDB8fHx8MTc3MDE3MTkzM3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'chana-dal-4',
    name: { en: 'Chana Dal', te: 'శనగ పప్పు', hi: 'चना दाल' },
    options: [ { quantity: '500g', price: 70 }, { quantity: '1kg', price: 135 } ],
    availability: 'in-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1600791240173-228c8a1e808c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGFuYSUyMGRhbHxlbnwwfHx8fDE3NzAxNzE5NTV8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'masoor-dal-5',
    name: { en: 'Masoor Dal', te: 'మసూర్ పప్పు', hi: 'मसूर दाल' },
    options: [ { quantity: '500g', price: 65 }, { quantity: '1kg', price: 125 } ],
    availability: 'in-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1630409351658-283879a8389e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXNvb3IlMjBkYWx8ZW58MHx8fHwxNzcwMTcyMDA5fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'green-peas-6',
    name: { en: 'Dried Green Peas', te: 'ఎండిన పచ్చి బఠానీలు', hi: 'सूखे हरे मटर' },
    options: [ { quantity: '500g', price: 80 } ],
    availability: 'out-of-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1551848739-00f229d30d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkcmllZCUyMHBlYXN8ZW58MHx8fHwxNzY5MjI0MzA4fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'rajma-7',
    name: { en: 'Rajma (Kidney Beans)', te: 'రాజ్మా', hi: 'राजमा' },
    options: [ { quantity: '500g', price: 110 } ],
    availability: 'in-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1603203093223-5e4a8a64522a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYWptYSUyMGJlYW5zfGVufDB8fHx8MTc3MDE3MjA2OHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'kabuli-chana-8',
    name: { en: 'Kabuli Chana (Chickpeas)', te: 'కాబూలీ శనగలు', hi: 'काबुली चना' },
    options: [ { quantity: '500g', price: 95 }, { quantity: '1kg', price: 180 } ],
    availability: 'in-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1572455324491-c5225115c557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGlja3BlYXN8ZW58MHx8fHwxNzcwMTcyMDg4fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'black-eyed-peas-9',
    name: { en: 'Black Eyed Peas', te: 'అలసందలు', hi: 'लोबिया' },
    options: [ { quantity: '500g', price: 85 } ],
    availability: 'in-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1593536673055-14892cdffac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGV5ZWQlMjBwZWFzfGVufDB8fHx8MTc3MDE3MjExNHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'horse-gram-10',
    name: { en: 'Horse Gram', te: 'ఉలవలు', hi: 'कुलथी' },
    options: [ { quantity: '500g', price: 70 } ],
    availability: 'out-of-stock',
    categoryId: 'dals',
    imageUrl: "https://images.unsplash.com/photo-1620265105743-2d4e5222f0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3JzZSUyMGdyYW18ZW58MHx8fHwxNzcwMTcyMTQwfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  // Rice
  {
    id: 'sona-masoori-11',
    name: { en: 'Sona Masoori Rice', te: 'సోనా మసూరి బియ్యం', hi: 'सोना मसूरी चावल' },
    options: [ { quantity: '10kg', price: 550 }, { quantity: '25kg', price: 1250 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1586201375822-5226c6a74583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1bmNvb2tlZCUyMHJpY2V8ZW58MHx8fHwxNzcwMTcyMTY1fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'basmati-rice-12',
    name: { en: 'Basmati Rice', te: 'బాస్మతి బియ్యం', hi: 'बासमती चावल' },
    options: [ { quantity: '1kg', price: 160 }, { quantity: '5kg', price: 750 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYXNtYXRpJTIwcmljZXxlbnwwfHx8fDE3NzAxNzIxODl8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'brown-rice-13',
    name: { en: 'Brown Rice', te: 'బ్రౌన్ రైస్', hi: 'ब्राउन राइस' },
    options: [ { quantity: '1kg', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxicm93biUyMHJpY2V8ZW58MHx8fHwxNzcwMTcyMjEwfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'idli-rice-14',
    name: { en: 'Idli Rice', te: 'ఇడ్లీ బియ్యం', hi: 'इडली चावल' },
    options: [ { quantity: '1kg', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1589164287325-1a2214d33a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYm93bHxlbnwwfHx8fDE3NjkyMjQzMDh8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'poha-15',
    name: { en: 'Poha (Flattened Rice)', te: 'అటుకులు', hi: 'पोहा' },
    options: [ { quantity: '500g', price: 40 } ],
    availability: 'out-of-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1651793371427-ad065df0d208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwbnxlbnwwfHx8fDE3NzAxNzIyNDZ8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'rawa-16',
    name: { en: 'Sooji / Rawa (Semolina)', te: 'రవ్వ', hi: 'सूजी / रवा' },
    options: [ { quantity: '500g', price: 30 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1673960802455-ec189a6207e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZW1vbGluYSUyMGJvd2x8ZW58MHx8fHwxNzY5MjI0MzA4fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'jowar-17',
    name: { en: 'Jowar (Sorghum)', te: 'జొన్నలు', hi: 'ज्वार' },
    options: [ { quantity: '1kg', price: 55 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1641912844873-47ee4b926faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb3JnaHVtJTIwZ3JhaW5zfGVufDB8fHx8MTc3MDE3MjI5NHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'bajra-18',
    name: { en: 'Bajra (Pearl Millet)', te: 'సజ్జలు', hi: 'बाजरा' },
    options: [ { quantity: '1kg', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1539397726814-5afbfa7934f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZWFybCUyMG1pbGxldHxlbnwwfHx8fDE3NzAxNzIzMTR8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'ragi-19',
    name: { en: 'Ragi (Finger Millet)', te: 'రాగి', hi: 'रागी' },
    options: [ { quantity: '1kg', price: 65 } ],
    availability: 'out-of-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1768729339998-909158957162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtaWxsZXQlMjBncmFpbnN8ZW58MHx8fHwxNzY5MjI0MzA4fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'sabudana-20',
    name: { en: 'Sabudana (Sago)', te: 'సగ్గుబియ్యం', hi: 'साबूदाना' },
    options: [ { quantity: '500g', price: 50 } ],
    availability: 'in-stock',
    categoryId: 'rice',
    imageUrl: "https://images.unsplash.com/photo-1606922253301-4493399e5352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
  },
  // Spices
  {
    id: 'turmeric-powder-21',
    name: { en: 'Turmeric Powder', te: 'పసుపు', hi: 'हल्दी पाउडर' },
    options: [ { quantity: '100g', price: 30 }, { quantity: '200g', price: 55 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1582716388486-905b67e5434d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHBvd2RlcnxlbnwwfHx8fDE3NzAxNzI0MDN8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'chilli-powder-22',
    name: { en: 'Red Chilli Powder', te: 'కారం పొడి', hi: 'मिर्च पाउडर' },
    options: [ { quantity: '250g', price: 95 }, { quantity: '500g', price: 180 } ],
    availability: 'out-of-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1599421876495-2b083c674c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGlsbGklMjBwb3dkZXJ8ZW58MHx8fHwxNzcwMTcyNDIyfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'coriander-powder-23',
    name: { en: 'Coriander Powder', te: 'ధనియాల పొడి', hi: 'धनिया पाउडर' },
    options: [ { quantity: '200g', price: 40 }, { quantity: '500g', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1698557522954-c82d5c2f0e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzcGljZSUyMHBvd2RlcnxlbnwwfHx8fDE3NjkyMjQzMDd8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'cumin-seeds-24',
    name: { en: 'Cumin Seeds (Jeera)', te: 'జీలకర్ర', hi: 'जीरा' },
    options: [ { quantity: '100g', price: 45 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1600791102844-208e695205f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdW1pbiUyMHNlZWRzfGVufDB8fHx8MTc3MDE3MjQ3Nnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'mustard-seeds-25',
    name: { en: 'Mustard Seeds (Rai)', te: 'ఆవాలు', hi: 'सरसों के बीज' },
    options: [ { quantity: '100g', price: 20 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1626185848982-536444856019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHN8ZW58MHx8fHwxNzcwMTcyNDk2fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'garam-masala-26',
    name: { en: 'Garam Masala', te: 'గరం మసాలా', hi: 'गरम मसाला' },
    options: [ { quantity: '100g', price: 70 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1625242662259-54b6d85a1532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnYXJhbSUyMG1hc2FsYXxlbnwwfHx8fDE3NzAxNzI1MTZ8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'black-pepper-27',
    name: { en: 'Black Pepper', te: 'నల్ల మిరియాలు', hi: 'काली मिर्च' },
    options: [ { quantity: '100g', price: 80 } ],
    availability: 'out-of-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1598024485854-032a09b40097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXBwZXJjb3Juc3xlbnwwfHx8fDE3NzAxNzI1MzV8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'cardamom-28',
    name: { en: 'Cardamom (Elaichi)', te: 'యాలకులు', hi: 'इलायची' },
    options: [ { quantity: '50g', price: 150 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1594057863158-a5369651a841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXJkYW1vbSUyMHBvZHN8ZW58MHx8fHwxNzcwMTcyNTU1fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'cloves-29',
    name: { en: 'Cloves (Laung)', te: 'లవంగాలు', hi: 'लौंग' },
    options: [ { quantity: '50g', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1623307645550-40d76c6e22ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG92ZXMlMjBzcGljZXxlbnwwfHx8fDE3NzAxNzI1NzN8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'asafoetida-30',
    name: { en: 'Asafoetida (Hing)', te: 'ఇంగువ', hi: 'हींग' },
    options: [ { quantity: '50g', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'spices',
    imageUrl: "https://images.unsplash.com/photo-1768729340132-a8c72080bb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhc2Fmb2V0aWRhfGVufDB8fHx8MTc3MDE3MjU5MXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  // Cooking Essentials
  {
    id: 'tamarind-31',
    name: { en: 'Tamarind', te: 'చింతపండు', hi: 'इमली' },
    options: [ { quantity: '250g', price: 35 }, { quantity: '500g', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1626200236417-a006c641885b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0YW1hcmluZCUyMGZydWl0fGVufDB8fHx8MTc3MDE3MjYxNnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'jaggery-32',
    name: { en: 'Jaggery', te: 'బెల్లం', hi: 'गुड़' },
    options: [ { quantity: '1kg', price: 80 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1630583944350-a9310a08204b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 'ginger-garlic-paste-33',
    name: { en: 'Ginger Garlic Paste', te: 'అల్లం వెల్లుల్లి పేస్ట్', hi: 'अदरक लहसुन का पेस्ट' },
    options: [ { quantity: '300g', price: 50 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1516139144862-26785888b5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnaW5nZXIlMjBnYXJsaWN8ZW58MHx8fHwxNzcwMTcyNzAzfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'poppy-seeds-34',
    name: { en: 'Poppy Seeds (Khus Khus)', te: 'గసగసాలు', hi: 'खसखस' },
    options: [ { quantity: '100g', price: 120 } ],
    availability: 'out-of-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1627993092523-7d3c126a8f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3BweSUyMHNlZWRzfGVufDB8fHx8MTc3MDE3MjcyMnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'cashews-35',
    name: { en: 'Cashews', te: 'జీడిపప్పు', hi: 'काजू' },
    options: [ { quantity: '250g', price: 250 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1601314210664-712196173a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXNoZXdzfGVufDB8fHx8MTc3MDE3Mjc0MXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'almonds-36',
    name: { en: 'Almonds', te: 'బాదం పప్పు', hi: 'बादाम' },
    options: [ { quantity: '250g', price: 220 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1605386027835-135a69145654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhbG1vbmRzfGVufDB8fHx8MTc3MDE3Mjc2MHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'raisins-37',
    name: { en: 'Raisins (Kishmish)', te: 'ఎండు ద్రాక్ష', hi: 'किशमिश' },
    options: [ { quantity: '250g', price: 90 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1597407132169-44583b235882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYWlzaW5zfGVufDB8fHx8MTc3MDE3Mjc4MHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'vinegar-38',
    name: { en: 'Synthetic Vinegar', te: 'వెనిగర్', hi: 'सिरका' },
    options: [ { quantity: '500ml', price: 40 } ],
    availability: 'out-of-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1596253457597-40c6b162b251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aW5lZ2FyJTIwYm90dGxlfGVufDB8fHx8MTc3MDE3MjgxMHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'soya-sauce-39',
    name: { en: 'Soya Sauce', te: 'సోయా సాస్', hi: 'सोया सॉस' },
    options: [ { quantity: '200ml', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1697026994064-1859602427f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJpbmFkZSUyMHNhdWNlfGVufDB8fHx8MTc3MDE3MzA0OHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'rose-water-40',
    name: { en: 'Rose Water', te: 'రోజ్ వాటర్', hi: 'गुलाब जल' },
    options: [ { quantity: '100ml', price: 35 } ],
    availability: 'in-stock',
    categoryId: 'cooking_essentials',
    imageUrl: "https://images.unsplash.com/photo-1626249552199-5248a39b33a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyb3NlJTIwd2F0ZXJ8ZW58MHx8fHwxNzcwMTczMDcyfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  // Oils
  {
    id: 'sunflower-oil-41',
    name: { en: 'Sunflower Oil', te: 'పొద్దుతిరుగుడు నూనె', hi: 'सूरजमुखी तेल' },
    options: [{ quantity: '1L', price: 110 }, { quantity: '5L', price: 540 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1627907222415-84a8a05f15e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWx8ZW58MHx8fHwxNzcwMTczMDk0fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'groundnut-oil-42',
    name: { en: 'Groundnut Oil', te: 'వేరుశెనగ నూనె', hi: 'मूंगफली का तेल' },
    options: [{ quantity: '1L', price: 180 }, { quantity: '5L', price: 880 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1620923053740-16c8789a8e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm91bmRudXQlMjBvaWx8ZW58MHx8fHwxNzcwMTczMTIxfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'ghee-43',
    name: { en: 'Pure Ghee', te: 'స్వచ్ఛమైన నెయ్యి', hi: 'शुद्ध घी' },
    options: [{ quantity: '500ml', price: 300 }, { quantity: '1L', price: 580 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1606859186250-754f15309355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 'coconut-oil-44',
    name: { en: 'Coconut Oil', te: 'కొబ్బరి నూనె', hi: 'नारियल का तेल' },
    options: [{ quantity: '500ml', price: 120 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1590431306482-f700ee150c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwb2lsfGVufDB8fHx8MTc3MDE3MzE2NHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'sesame-oil-45',
    name: { en: 'Sesame Oil (Gingelly)', te: 'నువ్వుల నూనె', hi: 'तिल का तेल' },
    options: [{ quantity: '1L', price: 250 }],
    availability: 'out-of-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1608571702346-bf078a741b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZXNhbWUlMjBvaWx8ZW58MHx8fHwxNzcwMTczMTgzfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'mustard-oil-46',
    name: { en: 'Mustard Oil', te: 'ఆవ నూనె', hi: 'सरसों का तेल' },
    options: [{ quantity: '1L', price: 150 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1612451381363-f8645b8d2345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwb2lsfGVufDB8fHx8MTc3MDE3MzIwM3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'castor-oil-47',
    name: { en: 'Castor Oil', te: 'ఆముదం', hi: 'अरंडी का तेल' },
    options: [{ quantity: '250ml', price: 70 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1608571424237-381e6b43a2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXN0b3IlMjBvaWx8ZW58MHx8fHwxNzcwMTczMjIwfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'vanaspati-48',
    name: { en: 'Vanaspati', te: 'వనస్పతి', hi: 'वनस्पति' },
    options: [{ quantity: '1kg', price: 130 }],
    availability: 'out-of-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1596791328308-94a085d3c823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 'olive-oil-49',
    name: { en: 'Olive Oil', te: 'ఆలివ్ నూనె', hi: 'जैतून का तेल' },
    options: [{ quantity: '500ml', price: 400 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1627734893703-9f5a4e3b12a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMG9pbHxlbnwwfHx8fDE3NzAxNzMyNTl8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'palm-oil-50',
    name: { en: 'Palm Oil', te: 'పామాయిల్', hi: 'पाम तेल' },
    options: [{ quantity: '1L', price: 95 }],
    availability: 'in-stock',
    categoryId: 'oils',
    imageUrl: "https://images.unsplash.com/photo-1596470663178-dc2df28026f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYWxtJTIwb2lsfGVufDB8fHx8MTc3MDE3MzI3OHww&ixlib=rb-4.1.0&q=80&w=400"
  },
  // Essentials
  {
    id: 'atta-flour-51',
    name: { en: 'Whole Wheat Atta', te: 'గోధుమ పిండి', hi: 'आटा' },
    options: [ { quantity: '5kg', price: 230 }, { quantity: '10kg', price: 450 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e326b20f54b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmbG91cnxlbnwwfHx8fDE3NzAxNzMzMDV8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'sugar-52',
    name: { en: 'Sugar', te: 'పంచదార', hi: 'चीनी' },
    options: [ { quantity: '1kg', price: 45 }, { quantity: '5kg', price: 220 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1562245376-3f9dae9f0e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGNyeXN0YWxzfGVufDB8fHx8MTc3MDE3MzMyM3ww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'salt-53',
    name: { en: 'Iodized Salt', te: 'అయోడైజ్డ్ ఉప్పు', hi: 'नमक' },
    options: [ { quantity: '1kg', price: 22 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1594280327094-1a1322199b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWx0JTIwcGlsZXxlbnwwfHx8fDE3NzAxNzMzNDB8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'tea-powder-54',
    name: { en: 'Tea Powder', te: 'టీ పొడి', hi: 'चाय पत्ती' },
    options: [ { quantity: '250g', price: 130 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1597318181409-cf62d5a5a38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWElMjBsZWF2ZXN8ZW58MHx8fHwxNzcwMTczMzYwfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'coffee-powder-55',
    name: { en: 'Coffee Powder', te: 'కాఫీ పొడి', hi: 'कॉफी पाउडर' },
    options: [ { quantity: '100g', price: 95 } ],
    availability: 'out-of-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1559496417-50b3c0228c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NzAxNzMzODF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'besan-flour-56',
    name: { en: 'Besan (Gram Flour)', te: 'శనగ పిండి', hi: 'बेसन' },
    options: [ { quantity: '500g', price: 60 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1640193881544-e8b70488db0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFtJTIwZmxvdXJ8ZW58MHx8fHwxNzcwMTczNDAyfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'maida-flour-57',
    name: { en: 'Maida (All Purpose Flour)', te: 'మైదా పిండి', hi: 'मैदा' },
    options: [ { quantity: '500g', price: 30 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1668723968067-7fef153255fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhbGwlMjBwdXJwb3NlJTIwZmxvdXJ8ZW58MHx8fHwxNzcwMTczNDI0fDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'papad-58',
    name: { en: 'Papad', te: 'అప్పడాలు', hi: 'पापड़' },
    options: [ { quantity: '200g', price: 45 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1607344229432-08a46ba0dc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXBhZHVtfGVufDB8fHx8MTc3MDE3MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'vermicelli-59',
    name: { en: 'Vermicelli', te: 'సేమియా', hi: 'सेवई' },
    options: [ { quantity: '400g', price: 50 } ],
    availability: 'out-of-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1621873496302-736551893112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2ZXJtaWNlbGxpfGVufDB8fHx8MTc3MDE3MzQ2MXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 'rock-salt-60',
    name: { en: 'Rock Salt', te: 'రాతి ఉప్పు', hi: 'सेंधा नमक' },
    options: [ { quantity: '1kg', price: 35 } ],
    availability: 'in-stock',
    categoryId: 'essentials',
    imageUrl: "https://images.unsplash.com/photo-1629285464605-8e6493153fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwc2FsdHxlbnwwfHx8fDE3NzAxNzM0ODF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
];


export const customersData: Customer[] = [
    { id: 'cus-1', name: 'Ravi Kumar', email: 'ravi.k@example.com', joinDate: '2022-03-15', totalOrders: 45, isLoyal: true, initials: 'RK' },
    { id: 'cus-2', name: 'Priya Sharma', email: 'priya.s@example.com', joinDate: '2023-01-20', totalOrders: 22, isLoyal: true, initials: 'PS' },
    { id: 'cus-3', name: 'Amit Singh', email: 'amit.s@example.com', joinDate: '2023-08-10', totalOrders: 8, isLoyal: false, initials: 'AS' },
    { id: 'cus-4', name: 'Lakshmi Devi', email: 'lakshmi.d@example.com', joinDate: '2021-11-05', totalOrders: 78, isLoyal: true, initials: 'LD' },
    { id: 'cus-5', name: 'Sanjay Reddy', email: 'sanjay.r@example.com', joinDate: '2024-02-01', totalOrders: 3, isLoyal: false, initials: 'SR' },
];

    