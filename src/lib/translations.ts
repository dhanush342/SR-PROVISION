import type { Language } from './data';

type TranslationKey = 
  | 'appName'
  | 'addReview'
  | 'adminLogin'
  | 'products'
  | 'blogs'
  | 'terms'
  | 'allRightsReserved'
  | 'availability'
  | 'inStock'
  | 'outOfStock'
  | 'quantity'
  | 'price'
  | 'login'
  | 'email'
  | 'password'
  | 'adminDashboard'
  | 'welcomeAdmin'
  | 'productManagement'
  | 'logout'
  | 'invalidCredentials'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'shopNow'
  | 'blogSubtitle'
  | 'blog1Title'
  | 'blog1Date'
  | 'blog1Content'
  | 'blog2Title'
  | 'blog2Date'
  | 'blog2Content'
  | 'blog3Title'
  | 'blog3Date'
  | 'blog3Content';


export const translations: { [key in Language]: { [key in TranslationKey]: string } } = {
  en: {
    appName: 'Srinivasa Rao Provision',
    addReview: 'Add a Review',
    adminLogin: 'Admin',
    products: 'Products',
    blogs: 'Blogs',
    terms: 'Terms',
    allRightsReserved: 'All rights reserved.',
    availability: 'Availability',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    quantity: 'Quantity',
    price: 'Price',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    adminDashboard: 'Admin Dashboard',
    welcomeAdmin: 'Welcome, Admin!',
    productManagement: 'This is where you would manage your products, categories, prices, and availability.',
    logout: 'Logout',
    invalidCredentials: 'Invalid email or password.',
    heroTitle: 'Srinivasa Rao Provision',
    heroSubtitle: 'Authentic Indian Groceries in Kandukur. Your one-stop shop for all your daily needs.',
    shopNow: 'Browse Products',
    blogSubtitle: 'News, stories, and tips from your favorite local grocery store.',
    blog1Title: 'The Heart of Our Store: Quality Spices',
    blog1Date: 'August 5, 2024',
    blog1Content: 'At Srinivasa Rao Provision, we believe that the soul of Indian cooking lies in its spices. We travel to local markets to source the freshest, most aromatic spices. From the earthy notes of our turmeric to the sharp heat of Guntur chilies, each spice is selected to bring authentic flavor to your kitchen.',
    blog2Title: 'Beyond the Bag: Our Sona Masoori Rice',
    blog2Date: 'July 28, 2024',
    blog2Content: 'Not all rice is created equal. Our popular Sona Masoori rice comes directly from trusted farmers in the region, ensuring soft texture and delicious taste. It\'s the perfect foundation for everything from a simple dal-rice to a festive biryani.',
    blog3Title: 'Your Daily Goodness: Fresh Dals & Pulses',
    blog3Date: 'July 20, 2024',
    blog3Content: 'Lentils are the backbone of a healthy Indian diet. We offer a wide variety of dals and pulses, cleaned and packaged with care. Learn about the health benefits of moong, toor, and other dals available at our store every day.',
  },
  te: {
    appName: 'శ్రీనివాస రావు ప్రొవిజన్',
    addReview: 'సమీక్షను జోడించండి',
    adminLogin: 'అడ్మిన్',
    products: 'ఉత్పత్తులు',
    blogs: 'బ్లాగులు',
    terms: 'నిబంధనలు',
    allRightsReserved: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
    availability: 'లభ్యత',
    inStock: 'స్టాక్‌లో ఉంది',
    outOfStock: 'స్టాక్‌లో లేదు',
    quantity: 'పరిమాణం',
    price: 'ధర',
    login: 'లాగిన్',
    email: 'ఇమెయిల్',
    password: 'పాస్‌వర్డ్',
    adminDashboard: 'అడ్మిన్ డాష్‌బోర్డ్',
    welcomeAdmin: 'స్వాగతం, అడ్మిన్!',
    productManagement: 'ఇక్కడ మీరు మీ ఉత్పత్తులు, వర్గాలు, ధరలు మరియు లభ్యతను నిర్వహిస్తారు.',
    logout: 'లాగ్ అవుట్',
    invalidCredentials: 'తప్పు ఇమెయిల్ లేదా పాస్‌వర్డ్.',
    heroTitle: 'శ్రీనివాస రావు ప్రొవిజన్',
    heroSubtitle: 'కందుకూరులో ప్రామాణికమైన భారతీయ కిరాణా సామాగ్రి. మీ రోజువారీ అవసరాలన్నీ తీర్చే ఏకైక వేదిక.',
    shopNow: 'ఉత్పత్తులను బ్రౌజ్ చేయండి',
    blogSubtitle: 'మీకు ఇష్టమైన స్థానిక కిరాణా దుకాణం నుండి వార్తలు, కథలు మరియు చిట్కాలు.',
    blog1Title: 'మా దుకాణం యొక్క గుండె: నాణ్యమైన మసాలాలు',
    blog1Date: 'ఆగస్టు 5, 2024',
    blog1Content: 'శ్రీనివాస రావు ప్రొవిజన్‌లో, భారతీయ వంటల ఆత్మ దాని మసాలాలలో ఉందని మేము నమ్ముతాము. మేము తాజా, అత్యంత సువాసనగల మసాలాలను సేకరించడానికి స్థానిక మార్కెట్‌లకు వెళ్తాము. మా పసుపు యొక్క మట్టి నోట్స్ నుండి గుంటూరు మిరపకాయల పదునైన వేడి వరకు, ప్రతి మసాలా మీ వంటగదికి ప్రామాణికమైన రుచిని తీసుకురావడానికి ఎంపిక చేయబడింది.',
    blog2Title: 'సంచికి మించి: మా సోనా మసూరి కథ',
    blog2Date: 'జూలై 28, 2024',
    blog2Content: 'అన్ని బియ్యం సమానంగా సృష్టించబడవు. మా ప్రసిద్ధ సోనా మసూరి బియ్యం నేరుగా ఈ ప్రాంతంలోని విశ్వసనీయ రైతుల నుండి వస్తుంది, ఇది మృదువైన ఆకృతిని మరియు రుచికరమైన రుచిని నిర్ధారిస్తుంది. ఇది సాధారణ పప్పు-అన్నం నుండి పండుగ బిర్యానీ వరకు అన్నింటికీ సరైన పునాది.',
    blog3Title: 'మీ రోజువారీ మంచితనం: తాజా పప్పులు',
    blog3Date: 'జూలై 20, 2024',
    blog3Content: 'పప్పులు ఆరోగ్యకరమైన భారతీయ ఆహారం యొక్క వెన్నెముక. మేము అనేక రకాల పప్పులను అందిస్తాము, జాగ్రత్తగా శుభ్రం చేసి ప్యాక్ చేస్తాము. మా దుకాణంలో ప్రతిరోజూ లభించే పెసర, కంది మరియు ఇతర పప్పుల ఆరోగ్య ప్రయోజనాల గురించి తెలుసుకోండి.',
  },
  hi: {
    appName: 'श्रीनिवास राव प्रोविजन',
    addReview: 'एक समीक्षा जोड़ें',
    adminLogin: 'एडमिन',
    products: 'उत्पाद',
    blogs: 'ब्लॉग',
    terms: 'शर्तें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    availability: 'उपलब्धता',
    inStock: 'स्टॉक में है',
    outOfStock: 'स्टॉक में नहीं है',
    quantity: 'मात्रा',
    price: 'कीमत',
    login: 'लॉग इन करें',
    email: 'ईमेल',
    password: 'पासवर्ड',
    adminDashboard: 'एडमिन डैशबोर्ड',
    welcomeAdmin: 'स्वागत है, एडमिन!',
    productManagement: 'यह वह जगह है जहाँ आप अपने उत्पादों, श्रेणियों, कीमतों और उपलब्धता का प्रबंधन करेंगे।',
    logout: 'लॉग आउट',
    invalidCredentials: 'अमान्य ईमेल या पासवर्ड।',
    heroTitle: 'श्रीनिवास राव प्रोविजन',
    heroSubtitle: 'कंदुकुर में प्रामाणिक भारतीय किराने का सामान। आपकी सभी दैनिक जरूरतों के लिए आपकी वन-स्टॉप शॉप।',
    shopNow: 'उत्पाद ब्राउज़ करें',
    blogSubtitle: 'आपके पसंदीदा स्थानीय किराना स्टोर से समाचार, कहानियाँ और सुझाव।',
    blog1Title: 'हमारी दुकान का दिल: गुणवत्तापूर्ण मसाले',
    blog1Date: '5 अगस्त, 2024',
    blog1Content: 'श्रीनिवास राव प्रोविजन में, हमारा मानना ​​है कि भारतीय खाना पकाने की आत्मा उसके मसालों में निहित है। हम सबसे ताज़े, सबसे सुगंधित मसालों को प्राप्त करने के लिए स्थानीय बाजारों की यात्रा करते हैं। हमारी हल्दी के मिट्टी के नोटों से लेकर गुंटूर मिर्च की तीखी गर्मी तक, प्रत्येक मसाले को आपकी रसोई में प्रामाणिक स्वाद लाने के लिए चुना जाता है।',
    blog2Title: 'बैग से परे: हमारे सोना मंसूरी की कहानी',
    blog2Date: '28 जुलाई, 2024',
    blog2Content: 'सभी चावल समान नहीं बनाए जाते हैं। हमारे लोकप्रिय सोना मंसूरी चावल सीधे क्षेत्र के विश्वसनीय किसानों से आते हैं, जो नरम बनावट और स्वादिष्ट स्वाद सुनिश्चित करते हैं। यह एक साधारण दाल-चावल से लेकर एक उत्सव बिरयानी तक सब कुछ के लिए एकदम सही आधार है।',
    blog3Title: 'आपकी दैनिक अच्छाई: ताज़ी दालें',
    blog3Date: '20 जुलाई, 2024',
    blog3Content: 'दालें एक स्वस्थ भारतीय आहार की रीढ़ हैं। हम विभिन्न प्रकार की दालें प्रदान करते हैं, जिन्हें देखभाल के साथ साफ और पैक किया जाता है। हमारे स्टोर पर हर दिन उपलब्ध मूंग, अरहर और अन्य दालों के स्वास्थ्य लाभों के बारे में जानें।',
  },
};
