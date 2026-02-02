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
  | 'heroTitleIntro'
  | 'heroTitleLocation'
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
  | 'blog3Content'
  | 'footerTagline'
  | 'visitUs'
  | 'addressLine1'
  | 'addressLine2'
  | 'faqTitle'
  | 'faqSubtitle'
  | 'q_delivery'
  | 'a_delivery'
  | 'q_onlineOrder'
  | 'a_onlineOrder'
  | 'q_freshProduce'
  | 'a_freshProduce'
  | 'q_earlyVeggies'
  | 'a_earlyVeggies'
  | 'q_crowd'
  | 'a_crowd'
  | 'q_prices'
  | 'a_prices'
  | 'q_quality'
  | 'a_quality'
  | 'q_chocolates'
  | 'a_chocolates'
  | 'q_fruits'
  | 'a_fruits'
  | 'q_leafyVeggies'
  | 'a_leafyVeggies';


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
    heroTitleIntro: 'Your trusted neighborhood store in',
    heroTitleLocation: 'Kavali',
    heroSubtitle: 'Quality groceries, fresh staples, and authentic spices at wholesale prices. Visit us directly for quick pickup.',
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
    footerTagline: 'Serving the community since 2010 with high-quality groceries and staples at fair prices.',
    visitUs: 'Visit Us',
    addressLine1: 'Near Anjaneyaswami Statue, Vengal Rao Nagar',
    addressLine2: 'Kavali, Andhra Pradesh 524201',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Quick answers to common questions about our store and services.',
    q_delivery: 'Is home delivery available?',
    a_delivery: 'We do not offer home delivery at this time. Our focus is on providing the best in-store prices and experience.',
    q_onlineOrder: 'Can I order online?',
    a_onlineOrder: 'Currently, we do not support online ordering. Please visit us in-store for all your grocery needs.',
    q_freshProduce: 'What fresh produce is in stock?',
    a_freshProduce: 'We stock a variety of fresh, seasonal produce. Availability changes daily, so we recommend visiting the store for the best selection.',
    q_earlyVeggies: 'Are vegetables available early?',
    a_earlyVeggies: 'Yes, fresh vegetables arrive early in the morning. For the best selection, we recommend visiting us before 10 AM.',
    q_crowd: 'Is the store crowded?',
    a_crowd: 'The store can get busy during peak hours (8-10 AM and 5-7 PM). For a quieter shopping experience, we suggest visiting mid-day.',
    q_prices: 'Are prices reasonable?',
    a_prices: 'We are proud to offer wholesale prices, providing excellent value for our customers.',
    q_quality: 'Is the quality top-notch?',
    a_quality: 'Absolutely. We are committed to providing only high-quality products and fresh produce.',
    q_chocolates: 'Do they sell chocolates?',
    a_chocolates: 'Yes, we have a selection of popular chocolates and other confectionary items.',
    q_fruits: 'Are there fresh fruits?',
    a_fruits: 'We offer a selection of seasonal fresh fruits.',
    q_leafyVeggies: 'Are leafy vegetables available?',
    a_leafyVeggies: 'Yes, we stock a variety of fresh leafy vegetables daily.',
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
    heroTitleIntro: 'మీ నమ్మకమైన కిరాణా దుకాణం',
    heroTitleLocation: 'కావలిలో',
    heroSubtitle: 'నాణ్యమైన కిరాణా, తాజా నిత్యావసరాలు, మరియు అసలైన మసాలా దినుసులు హోల్‌సేల్ ధరలకే. త్వరిత పికప్ కోసం మమ్మల్ని నేరుగా సందర్శించండి.',
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
    footerTagline: '2010 నుండి సమాజానికి సరసమైన ధరలకు అధిక-నాణ్యత కిరాణా మరియు నిత్యావసరాలను అందిస్తోంది.',
    visitUs: 'మమ్మల్ని సందర్శించండి',
    addressLine1: 'అంజనేయస్వామి విగ్రహం దగ్గర, వెంగల్ రావు నగర్',
    addressLine2: 'కావలి, ఆంధ్రప్రదేశ్ 524201',
    faqTitle: 'తరచుగా అడిగే ప్రశ్నలు',
    faqSubtitle: 'మా స్టోర్ మరియు సేవల గురించి సాధారణ ప్రశ్నలకు శీఘ్ర సమాధానాలు.',
    q_delivery: 'హోమ్ డెలివరీ అందుబాటులో ఉందా?',
    a_delivery: 'ప్రస్తుతానికి మేము హోమ్ డెలివరీ అందించడం లేదు. మా లక్ష్యం ఉత్తమ స్టోర్ ధరలు మరియు అనుభవాన్ని అందించడం.',
    q_onlineOrder: 'నేను ఆన్‌లైన్‌లో ఆర్డర్ చేయవచ్చా?',
    a_onlineOrder: 'ప్రస్తుతం, మేము ఆన్‌లైన్ ఆర్డర్‌లకు మద్దతు ఇవ్వడం లేదు. దయచేసి మీ కిరాణా అవసరాల కోసం మా స్టోర్‌ను సందర్శించండి.',
    q_freshProduce: 'ఏ తాజా ఉత్పత్తులు స్టాక్‌లో ఉన్నాయి?',
    a_freshProduce: 'మేము అనేక రకాల తాజా, కాలానుగుణ ఉత్పత్తులను నిల్వ చేస్తాము. లభ్యత ప్రతిరోజూ మారుతుంది, కాబట్టి ఉత్తమ ఎంపిక కోసం స్టోర్‌ను సందర్శించమని మేము సిఫార్సు చేస్తున్నాము.',
    q_earlyVeggies: 'కూరగాయలు తొందరగా అందుబాటులో ఉంటాయా?',
    a_earlyVeggies: 'అవును, తాజా కూరగాయలు ఉదయాన్నే వస్తాయి. ఉత్తమ ఎంపిక కోసం, ఉదయం 10 గంటల లోపు మమ్మల్ని సందర్శించమని మేము సిఫార్సు చేస్తున్నాము.',
    q_crowd: 'దుకాణం రద్దీగా ఉంటుందా?',
    a_crowd: 'ప్రధాన సమయాల్లో (ఉదయం 8-10 మరియు సాయంత్రం 5-7) దుకాణం రద్దీగా ఉంటుంది. నిశ్శబ్ద షాపింగ్ అనుభవం కోసం, మధ్యాహ్నం సందర్శించమని మేము సూచిస్తున్నాము.',
    q_prices: 'ధరలు సహేతుకంగా ఉన్నాయా?',
    a_prices: 'మేము టోకు ధరలను అందించడం గర్వంగా ఉంది, మా వినియోగదారులకు అద్భుతమైన విలువను అందిస్తున్నాము.',
    q_quality: 'నాణ్యత అద్భుతంగా ఉందా?',
    a_quality: 'ఖచ్చితంగా. మేము అధిక-నాణ్యత ఉత్పత్తులు మరియు తాజా ఉత్పత్తులను మాత్రమే అందించడానికి కట్టుబడి ఉన్నాము.',
    q_chocolates: 'వారు చాక్లెట్లు అమ్ముతారా?',
    a_chocolates: 'అవును, మా వద్ద ప్రసిద్ధ చాక్లెట్లు మరియు ఇతర మిఠాయి వస్తువుల ఎంపిక ఉంది.',
    q_fruits: 'తాజా పండ్లు ఉన్నాయా?',
    a_fruits: 'మేము కాలానుగుణ తాజా పండ్ల ఎంపికను అందిస్తున్నాము.',
    q_leafyVeggies: 'ఆకు కూరలు అందుబాటులో ఉన్నాయా?',
    a_leafyVeggies: 'అవును, మేము ప్రతిరోజూ అనేక రకాల తాజా ఆకు కూరలను నిల్వ చేస్తాము.',
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
    heroTitleIntro: 'आपका भरोसेमंद पड़ोस का स्टोर',
    heroTitleLocation: 'कावली में',
    heroSubtitle: 'थोक मूल्यों पर गुणवत्तापूर्ण किराने का सामान, ताज़ा स्टेपल और प्रामाणिक मसाले। त्वरित पिकअप के लिए सीधे हमसे मिलें।',
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
    footerTagline: '2010 से समुदाय को उचित मूल्य पर उच्च गुणवत्ता वाले किराने और स्टेपल के साथ सेवा प्रदान कर रहा है।',
    visitUs: 'हमसे मिलें',
    addressLine1: 'आंजनेयस्वामी प्रतिमा के पास, वंगल राव नगर',
    addressLine2: 'कावली, आंध्र प्रदेश 524201',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqSubtitle: 'हमारे स्टोर और सेवाओं के बारे में सामान्य प्रश्नों के त्वरित उत्तर।',
    q_delivery: 'क्या होम डिलीवरी उपलब्ध है?',
    a_delivery: 'हम इस समय होम डिलीवरी की पेशकश नहीं करते हैं। हमारा ध्यान सर्वोत्तम इन-स्टोर मूल्य और अनुभव प्रदान करने पर है।',
    q_onlineOrder: 'क्या मैं ऑनलाइन ऑर्डर कर सकता हूँ?',
    a_onlineOrder: 'वर्तमान में, हम ऑनलाइन ऑर्डर का समर्थन नहीं करते हैं। अपनी सभी किराने की जरूरतों के लिए कृपया हमारे स्टोर पर आएं।',
    q_freshProduce: 'स्टॉक में कौन सी ताज़ी उपज है?',
    a_freshProduce: 'हम विभिन्न प्रकार की ताज़ी, मौसमी उपज का स्टॉक करते हैं। उपलब्धता प्रतिदिन बदलती रहती है, इसलिए हम सर्वोत्तम चयन के लिए स्टोर पर जाने की सलाह देते हैं।',
    q_earlyVeggies: 'क्या सब्जियां जल्दी उपलब्ध होती हैं?',
    a_earlyVeggies: 'हां, ताजी सब्जियां सुबह जल्दी आ जाती हैं। सर्वोत्तम चयन के लिए, हम सुबह 10 बजे से पहले हमसे मिलने की सलाह देते हैं।',
    q_crowd: 'क्या दुकान में भीड़ रहती है?',
    a_crowd: 'पीक आवर्स (सुबह 8-10 बजे और शाम 5-7 बजे) के दौरान दुकान में भीड़ हो सकती है। शांत खरीदारी अनुभव के लिए, हम दोपहर में आने का सुझाव देते हैं।',
    q_prices: 'क्या कीमतें उचित हैं?',
    a_prices: 'हमें थोक मूल्य प्रदान करने पर गर्व है, जो हमारे ग्राहकों को उत्कृष्ट मूल्य प्रदान करता है।',
    q_quality: 'क्या गुणवत्ता शीर्ष स्तर की है?',
    a_quality: 'बिल्कुल। हम केवल उच्च गुणवत्ता वाले उत्पाद और ताज़ी उपज प्रदान करने के लिए प्रतिबद्ध हैं।',
    q_chocolates: 'क्या वे चॉकलेट बेचते हैं?',
    a_chocolates: 'हाँ, हमारे पास लोकप्रिय चॉकलेट और अन्य कन्फेक्शनरी वस्तुओं का चयन है।',
    q_fruits: 'क्या ताजे फल हैं?',
    a_fruits: 'हम मौसमी ताजे फलों का चयन प्रदान करते हैं।',
    q_leafyVeggies: 'क्या पत्तेदार सब्जियां उपलब्ध हैं?',
    a_leafyVeggies: 'हां, हम प्रतिदिन विभिन्न प्रकार की ताजी पत्तेदार सब्जियों का स्टॉक करते हैं।',
  },
};
