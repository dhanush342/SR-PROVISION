import type { Language, TranslatedString } from './data';

type TranslationKey = 
  | 'appName'
  | 'addReview'
  | 'adminLogin'
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
  | 'shopNow';

export const translations: { [key in Language]: { [key in TranslationKey]: string } } = {
  en: {
    appName: 'Srinivasa Rao Provision Online',
    addReview: 'Add a Review',
    adminLogin: 'Admin',
    blogs: 'Blogs',
    terms: 'Terms and Conditions',
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
    heroTitle: 'Authentic Indian Groceries, Delivered to You',
    heroSubtitle: 'Your one-stop shop for spices, lentils, rice, and all the tastes of home.',
    shopNow: 'Shop Now',
  },
  te: {
    appName: 'శ్రీనివాస రావు ప్రొవిజన్ ఆన్‌లైన్',
    addReview: 'సమీక్షను జోడించండి',
    adminLogin: 'అడ్మిన్',
    blogs: 'బ్లాగులు',
    terms: 'నిబంధనలు మరియు షరతులు',
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
    heroTitle: 'అసలైన భారతీయ కిరాణా సామాగ్రి, మీకు పంపిణీ చేయబడింది',
    heroSubtitle: 'మసాలాలు, పప్పులు, బియ్యం మరియు ఇంటి రుచుల కోసం మీ ఏకైక స్టాప్.',
    shopNow: 'ఇప్పుడే కొనండి',
  },
  hi: {
    appName: 'श्रीनिवास राव प्रोविजन ऑनलाइन',
    addReview: 'एक समीक्षा जोड़ें',
    adminLogin: 'एडमिन',
    blogs: 'ब्लॉग',
    terms: 'नियम और शर्तें',
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
    heroTitle: 'प्रामाणिक भारतीय किराने का सामान, आप तक पहुँचाया गया',
    heroSubtitle: 'मसालों, दाल, चावल और घर के सभी स्वादों के लिए आपकी वन-स्टॉप शॉप।',
    shopNow: 'अभी खरीदें',
  },
};
