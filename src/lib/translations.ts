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
    blog1Title: 'The Magic of Indian Spices',
    blog1Date: 'August 1, 2024',
    blog1Content: 'From the vibrant yellow of turmeric to the fiery red of chili, Indian spices are a feast for the senses. Discover the history and health benefits of the essential spices in our collection.',
    blog2Title: 'A Guide to Healthy Lentils',
    blog2Date: 'July 25, 2024',
    blog2Content: 'Dals and pulses are a staple of Indian cuisine. Learn about the different types of lentils we carry, their nutritional value, and simple recipes to try at home.',
    blog3Title: 'Monsoon Essentials',
    blog3Date: 'July 18, 2024',
    blog3Content: 'As the rains arrive, our cravings for warm, comforting foods grow. We\'ve stocked up on everything you need for a cozy monsoon season, from chai ingredients to snack essentials.',
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
    blog1Title: 'భారతీయ మసాలాల మాయ',
    blog1Date: 'ఆగస్టు 1, 2024',
    blog1Content: 'పసుపు పచ్చని రంగు నుండి మిరపకాయల ఎరుపు రంగు వరకు, భారతీయ మసాలాలు ఇంద్రియాలకు విందు. మా సేకరణలోని అవసరమైన మసాలాల చరిత్ర మరియు ఆరోగ్య ప్రయోజనాలను కనుగొనండి.',
    blog2Title: 'ఆరోగ్యకరమైన పప్పులకు ఒక గైడ్',
    blog2Date: 'జూలై 25, 2024',
    blog2Content: 'పప్పులు భారతీయ వంటకాలలో ప్రధానమైనవి. మేము తీసుకువెళ్ళే వివిధ రకాల పప్పులు, వాటి పోషక విలువలు మరియు ఇంట్లో ప్రయత్నించడానికి సులభమైన వంటకాల గురించి తెలుసుకోండి.',
    blog3Title: 'వర్షాకాలపు అవసరాలు',
    blog3Date: 'జూలై 18, 2024',
    blog3Content: 'వర్షాలు రాగానే, వెచ్చని, సౌకర్యవంతమైన ఆహారాల కోసం మన కోరికలు పెరుగుతాయి. చాయ్ కావలసినవి నుండి స్నాక్ ఎసెన్షియల్స్ వరకు, హాయిగా ఉండే వర్షాకాలం కోసం మీకు కావలసినవన్నీ మేము నిల్వ చేసాము.',
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
    blog1Title: 'भारतीय मसालों का जादू',
    blog1Date: '1 अगस्त, 2024',
    blog1Content: 'हल्दी के जीवंत पीले रंग से लेकर मिर्च के उग्र लाल रंग तक, भारतीय मसाले इंद्रियों के लिए एक दावत हैं। हमारे संग्रह में आवश्यक मसालों के इतिहास और स्वास्थ्य लाभों की खोज करें।',
    blog2Title: 'स्वस्थ दालों के लिए एक गाइड',
    blog2Date: '25 जुलाई, 2024',
    blog2Content: 'दालें भारतीय व्यंजनों का एक प्रमुख हिस्सा हैं। हमारे द्वारा ले जाने वाली विभिन्न प्रकार की दालों, उनके पोषण मूल्य और घर पर आज़माने के लिए सरल व्यंजनों के बारे में जानें।',
    blog3Title: 'मानसून अनिवार्य',
    blog3Date: '18 जुलाई, 2024',
    blog3Content: 'जैसे ही बारिश आती है, गर्म, आरामदायक खाद्य पदार्थों के लिए हमारी लालसा बढ़ जाती है। हमने एक आरामदायक मानसून के मौसम के लिए आपकी ज़रूरत की हर चीज़ का स्टॉक कर लिया है, चाय की सामग्री से लेकर स्नैक आवश्यक चीज़ों तक।',
  },
};
