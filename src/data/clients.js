export const clients = {
  // Hometown Brew config (kept for reference, main config now in hometownbrew.js)
  hometownbrew: {
    id: 'hometownbrew',
    name: 'Hometown Brew',
    tagline: 'Coffee & Pastries',
    logo: '/hblogo.jpg',
    favicon: '/hblogo.jpg',
    banner: '/banner.jpg',
    url: 'https://jat-7xjr.onrender.com/hometownbrew',
    theme: {
      primary: '#05300d',
      secondary: '#4aab20ac',
      accent: '#000000',
      background: '#ffffff',
      text: '#152e0b'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'hot-coffee', label: 'Hot Coffee' },
      { id: 'iced-coffee', label: 'Iced Coffee' },
      { id: 'pastries', label: 'Pastries' },
      { id: 'dairy', label: 'Dairy Products' },
      { id: 'bestseller', label: 'Best Seller' },
      { id: 'popup', label: 'Pop-Up Package' }
    ],
    products: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Rich and bold single shot espresso',
        price: 120,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { label: 'Small (12oz)', price: 120 },
          { label: 'Medium (16oz)', price: 140 },
          { label: 'Large (20oz)', price: 160 }
        ]
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Perfect balance of espresso, steamed milk and foam',
        price: 150,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { label: 'Small (12oz)', price: 140 },
          { label: 'Medium (16oz)', price: 160 },
          { label: 'Large (20oz)', price: 180 }
        ]
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Smooth and creamy espresso with steamed milk',
        price: 160,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { label: 'Small (12oz)', price: 150 },
          { label: 'Medium (16oz)', price: 170 },
          { label: 'Large (20oz)', price: 190 }
        ]
      },
      {
        id: 4,
        name: 'Americano',
        description: 'Classic espresso with hot water for a milder taste',
        price: 130,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { label: 'Small (12oz)', price: 120 },
          { label: 'Medium (16oz)', price: 140 },
          { label: 'Large (20oz)', price: 160 }
        ]
      },
      {
        id: 5,
        name: 'Croissant',
        description: 'Buttery flaky croissant, perfectly baked golden brown',
        price: 80,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
        available: true
      },
      {
        id: 6,
        name: 'Danish Pastry',
        description: 'Sweet and tender Danish pastry filled with cream cheese',
        price: 120,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop',
        available: true
      },
      {
        id: 7,
        name: 'Blueberry Muffin',
        description: 'Freshly baked muffin bursting with juicy blueberries',
        price: 150,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=400&h=300&fit=crop',
        available: true
      },
      {
        id: 8,
        name: 'Cinnamon Roll',
        description: 'Warm cinnamon roll topped with creamy frosting',
        price: 170,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop',
        available: true
      },
      {
        id: 9,
        name: 'Matu Chocolate Fresh Milk',
        description: 'Farm-fresh pure milk, locally sourced',
        price: 120,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
        available: false,
        sizes: [
          { label: 'Small (12oz)', price: 110 },
          { label: 'Medium (16oz)', price: 130 },
          { label: 'Large (20oz)', price: 150 }
        ]
      },
      {
        id: 10,
        name: 'Fresh Milk',
        description: 'Probiotic yogurt drink for gut health',
        price: 100,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { label: 'Small (12oz)', price: 90 },
          { label: 'Medium (16oz)', price: 110 },
          { label: 'Large (20oz)', price: 130 }
        ]
      },
      {
        id: 11,
        name: 'White Mocha',
        description: 'Rich and creamy white mocha with vanilla and chocolate',
        price: 150,
        category: 'bestseller',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
        available: true
      },
      {
        id: 12,
        name: 'Seasalt',
        description: 'Smooth and refreshing seasalt-flavored iced coffee',
        price: 150,
        category: 'iced-coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { label: 'Small (12oz)', price: 140 },
          { label: 'Medium (16oz)', price: 160 },
          { label: 'Large (20oz)', price: 180 }
        ]
      }
    ],
    contact: {
      phone: '(+63) 991-935-7954',
      email: 'hometownbrew@prototype.com',
      address: 'Cagampang St, Buenavista, Agusan del Norte',
      googleReviewLink: 'https://www.google.com/search?q=google+review+homebtown+brew',
      mapLink: 'https://www.google.com/maps/place/Hometown+Brew+Caf%C3%A9/@8.9760371,125.4122931,20.36z/data=!4m6!3m5!1s0x3301c700508e70c9:0x61962a9e35c930ce!8m2!3d8.976178!4d125.4125414!16s%2Fg%2F11yzcywcgz?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D',
      formsubmitEmail: 'tsccresurrection@gmail.com',
      storeHours: [
        { day: 'Thursday', hours: '10 AM–12 AM', isClosed: false },
        { day: 'Friday', hours: '10 AM–12 AM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–12 AM', isClosed: false },
        { day: 'Sunday', hours: '10 AM–12 AM', isClosed: false },
        { day: 'Monday', hours: 'Closed', isClosed: true },
        { day: 'Tuesday', hours: '10 AM–12 AM', isClosed: false },
        { day: 'Wednesday', hours: '10 AM–12 AM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/336367819563080',
    openGraph: {
      title: 'Hometown Brew - Coffee & Pastries',
      description: 'Hometown Brew – the best coffee and pastries in town!',
      image: 'https://jat-7xjr.onrender.com/hblogo.jpg',
      url: 'https://jat-7xjr.onrender.com/#/hometownbrew'
    },
    twitter: {
      title: 'Hometown Brew - Coffee & Pastries',
      description: 'Hometown Brew – the best coffee and pastries in town!',
      image: 'https://jat-7xjr.onrender.com/hblogo.jpg'
    },
    social: {
      facebook: 'https://www.facebook.com/hometownbrew24',
      instagram: 'https://www.instagram.com/hometown_brew/'
    },
    testimonials: [
      {
        name: 'Maria Santos',
        rating: 5,
        comment: 'Best coffee in town! The pastries are incredibly fresh and delicious.'
      },
      {
        name: 'John Reyes',
        rating: 5,
        comment: 'Love the cozy atmosphere and friendly staff. Perfect morning spot!'
      },
      {
        name: 'Sarah Dela Cruz',
        rating: 5,
        comment: 'Quality ingredients and excellent service. Highly recommended!'
      }
    ]
  },

  // Example: Second client - Milk Tea Shop
  milkteashop: {
    id: 'milkteashop',
    name: 'Milk Tea Shop',
    tagline: 'Premium Milk Tea & Fruit Tea',
    logo: '/milktea-logo.png',
    favicon: '/milktea-logo.png',
    banner: '/milktea-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/milkteashop',
    theme: {
      primary: '#2E7D32',
      secondary: '#81C784',
      accent: '#A5D6A7',
      background: '#E8F5E9',
      text: '#1B5E20'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'milktea', label: 'Milk Tea' },
      { id: 'fruittea', label: 'Fruit Tea' },
      { id: 'smoothie', label: 'Smoothies' },
      { id: 'toppings', label: 'Toppings' }
    ],
    products: [
      {
        id: 1,
        name: 'Classic Milk Tea',
        description: 'Premium black tea with creamy milk',
        price: 120,
        category: 'milktea',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 110 },
          { label: 'Medium (16oz)', price: 130 },
          { label: 'Large (20oz)', price: 150 }
        ]
      },
      {
        id: 2,
        name: 'Brown Sugar Milk Tea',
        description: 'Caramelized brown sugar with fresh milk',
        price: 150,
        category: 'milktea',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 140 },
          { label: 'Medium (16oz)', price: 160 },
          { label: 'Large (20oz)', price: 180 }
        ]
      },
      {
        id: 3,
        name: 'Taro Milk Tea',
        description: 'Smooth taro paste with creamy milk',
        price: 140,
        category: 'milktea',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 130 },
          { label: 'Medium (16oz)', price: 150 },
          { label: 'Large (20oz)', price: 170 }
        ]
      },
      {
        id: 4,
        name: 'Mango Fruit Tea',
        description: 'Fresh mango chunks with fruity tea',
        price: 130,
        category: 'fruittea',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 120 },
          { label: 'Medium (16oz)', price: 140 },
          { label: 'Large (20oz)', price: 160 }
        ]
      },
      {
        id: 5,
        name: 'Strawberry Fruit Tea',
        description: 'Sweet strawberries with refreshing tea',
        price: 120,
        category: 'fruittea',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 110 },
          { label: 'Medium (16oz)', price: 130 },
          { label: 'Large (20oz)', price: 150 }
        ]
      },
      {
        id: 6,
        name: 'Strawberry Smoothie',
        description: 'Creamy strawberry smoothie',
        price: 160,
        category: 'smoothie',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 150 },
          { label: 'Medium (16oz)', price: 170 },
          { label: 'Large (20oz)', price: 190 }
        ]
      }
    ],
    contact: {
      phone: '(+63) 912-345-6789',
      email: 'info@milkteashop.com',
      address: 'Sample Address, City',
      googleReviewLink: 'https://www.google.com/search?q=milkteashop',
      mapLink: 'https://goo.gl/maps/example',
      formsubmitEmail: 'milkteashop@email.com',
      storeHours: [
        { day: 'Monday', hours: '10 AM–10 PM', isClosed: false },
        { day: 'Tuesday', hours: '10 AM–10 PM', isClosed: false },
        { day: 'Wednesday', hours: '10 AM–10 PM', isClosed: false },
        { day: 'Thursday', hours: '10 AM–10 PM', isClosed: false },
        { day: 'Friday', hours: '10 AM–10 PM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–10 PM', isClosed: false },
        { day: 'Sunday', hours: '12 PM–9 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/123456789',
    openGraph: {
      title: 'Milk Tea Shop - Premium Boba & Fruit Tea',
      description: 'Milk Tea Shop – the best milk tea, fruit tea, and smoothies in town!',
      image: 'https://jat-7xjr.onrender.com/milktea-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/milkteashop'
    },
    twitter: {
      title: 'Milk Tea Shop - Premium Boba & Fruit Tea',
      description: 'Milk Tea Shop – the best milk tea, fruit tea, and smoothies in town!',
      image: 'https://jat-7xjr.onrender.com/milktea-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/milkteashop',
      instagram: 'https://www.instagram.com/milkteashop/'
    },
    testimonials: [
      {
        name: 'Jessica Tan',
        rating: 5,
        comment: 'The best boba drinks I\'ve ever had! Love the brown sugar milk tea.'
      },
      {
        name: 'Alex Wong',
        rating: 5,
        comment: 'Fresh ingredients and perfect taste every time. My go-to spot!'
      },
      {
        name: 'Emma Liu',
        rating: 5,
        comment: 'Amazing smoothies and friendly staff. Worth every visit!'
      }
    ]
  },

  // Example: Third client - Project Brew
  projectbrew: {
    id: 'projectbrew',
    name: 'Project Brew',
    tagline: 'Artisan Coffee & Pastries',
    logo: '/pblogo.jpg',
    favicon: '/pblogo.jpg',
    banner: '/projectbrew-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/projectbrew',
    theme: {
      primary: '#654321',
      secondary: '#8B6F47',
      accent: '#FFD700',
      background: '#ffffff',
      text: '#654321'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'hot-coffee', label: 'Hot Coffee' },
      { id: 'iced-coffee', label: 'Iced Coffee' },
      { id: 'noncoffee', label: 'Non-Coffee' },
      { id: 'pastries', label: 'Pastries' }
    ],
    products: [
      {
        id: 1,
        name: 'Pour Over Coffee',
        description: 'Single origin pour over coffee',
        price: 180,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 170 },
          { label: 'Medium (16oz)', price: 190 },
          { label: 'Large (20oz)', price: 210 }
        ]
      },
      {
        id: 2,
        name: 'Cold Brew',
        description: 'Smooth cold brewed coffee',
        price: 160,
        category: 'iced-coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 150 },
          { label: 'Medium (16oz)', price: 170 },
          { label: 'Large (20oz)', price: 190 }
        ]
      },
      {
        id: 3,
        name: 'Matcha Latte',
        description: 'Premium Japanese matcha with milk',
        price: 170,
        category: 'noncoffee',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 160 },
          { label: 'Medium (16oz)', price: 180 },
          { label: 'Large (20oz)', price: 200 }
        ]
      },
      {
        id: 4,
        name: 'Chocolate Croissant',
        description: 'Flaky croissant filled with chocolate',
        price: 120,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 999-888-7777',
      email: 'hello@projectbrew.ph',
      address: 'Innovation District, City',
      googleReviewLink: 'https://www.google.com/search?q=projectbrew',
      mapLink: 'https://goo.gl/maps/projectbrew',
      formsubmitEmail: 'projectbrew@email.com',
      storeHours: [
        { day: 'Monday', hours: '7 AM–9 PM', isClosed: false },
        { day: 'Tuesday', hours: '7 AM–9 PM', isClosed: false },
        { day: 'Wednesday', hours: '7 AM–9 PM', isClosed: false },
        { day: 'Thursday', hours: '7 AM–9 PM', isClosed: false },
        { day: 'Friday', hours: '7 AM–10 PM', isClosed: false },
        { day: 'Saturday', hours: '8 AM–10 PM', isClosed: false },
        { day: 'Sunday', hours: '8 AM–8 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/117782470094668',
    openGraph: {
      title: 'Project Brew - Artisan Coffee & Pastries',
      description: 'Project Brew – premium artisan coffee and delicious pastries!',
      image: 'https://jat-7xjr.onrender.com/pblogo.jpg',
      url: 'https://jat-7xjr.onrender.com/#/projectbrew'
    },
    twitter: {
      title: 'Project Brew - Artisan Coffee & Pastries',
      description: 'Project Brew – premium artisan coffee and delicious pastries!',
      image: 'https://jat-7xjr.onrender.com/pblogo.jpg'
    },
    social: {
      facebook: 'https://www.facebook.com/ProjectBrewBXU',
      instagram: 'https://www.instagram.com/projectbrewbxu/?hl=en'
    },
    testimonials: [
      {
        name: 'Michael Cruz',
        rating: 5,
        comment: 'Exceptional espresso quality! The baristas really know their craft.'
      },
      {
        name: 'Nicole Torres',
        rating: 5,
        comment: 'Premium coffee experience at a reasonable price. Absolutely love it!'
      },
      {
        name: 'David Martinez',
        rating: 5,
        comment: 'Innovation in every cup is not just a tagline, they truly deliver!'
      }
    ]
  },

  // Simplify Cafe Kiosk Landing Page
  simplify: {
    id: 'simplify',
    name: 'Simplify Cafe Kiosk',
    tagline: 'Website + Online Kiosk for Cafes & Restaurants',
    logo: '/simplifylogo.png',
    favicon: '/simplifylogo.png',
    banner: '/simplify-banner.jpg',
    url: 'https://jat-7xjr.onrender.com',
    theme: {
      primary: '#b19469ca',
      secondary: '#4e2f00c9',
      accent: '#ff24a0',
      background: '#FAFAFA',
      text: '#000000'
    },
    categories: [],
    products: [],
    contact: {
      phone: '09919357954 / 09487901802',
      email: 'jasonanthonytrillo@gmail.com',
      address: '',
      facebook: 'https://www.facebook.com/jasonanthonytrillo',
      messengerLink: 'https://www.messenger.com/t/jasonanthonytrillo'
    },
    messengerLink: 'https://www.messenger.com/t/jasonanthonytrillo',
    owner: {
      name: 'Jason Anthony Trillo',
      photo: '/jasonanthony.jpg',
      description: 'Creator of Simplify Cafe Kiosk – the complete website and online ordering solution for cafes and restaurants. Orders are stored in real-time and instantly sent to your Messenger for quick fulfillment.'
    },
    features: [
      {
        title: 'Complete Cafe Website',
        description: 'Professional responsive website showcasing your menu, location, and story.',
        icon: '🌐'
      },
      {
        title: 'Online Kiosk Ordering',
        description: 'Customers browse and place orders directly from your website – no apps needed.',
        icon: '💻'
      },
      {
        title: 'Instant Messenger Delivery',
        description: 'All orders automatically sent to your Facebook Messenger with full details.',
        icon: '📱'
      },

    ],
    benefits: [
      'Zero hardware costs – works on any device',
      'Orders stored and organized automatically',
      'Instant Messenger notifications',
      'Real-time sales and order tracking',
      'Customer data collection and management',
      'Easy menu updates from anywhere',
      '24/7 accessible order system'
    ],
    openGraph: {
      title: 'Simplify POS - Point of Sale for Small Businesses',
      description: 'Simplify POS – the best point of sale system for small businesses!',
      image: 'https://cravecornerhub.onrender.com/Crave Corner.jpg',
      url: 'https://cravecornerhub.onrender.com'
    },
    twitter: {
      title: 'Simplify POS - Point of Sale for Small Businesses',
      description: 'Simplify POS – the best point of sale system for small businesses!',
      image: 'https://cravecornerhub.onrender.com/wallpaper.jpg'
    },
    social: {
      facebook: 'https://www.facebook.com/jasonanthonytrillo',
      instagram: 'https://www.instagram.com/jasonanthonytrillo/'
    },
    testimonials: [
      {
        name: 'Robert Santos',
        rating: 5,
        comment: 'Game-changer for my business! Easy to use and very reliable.'
      },
      {
        name: 'Lisa Nguyen',
        rating: 5,
        comment: 'Best POS system out there. Excellent customer support!'
      },
      {
        name: 'Carlos Rodriguez',
        rating: 5,
        comment: 'Simplified my entire business operations. Highly recommended!'
      }
    ]
  },

  // Bakery Bliss
  bakerybliss: {
    id: 'bakerybliss',
    name: 'Bakery Bliss',
    tagline: 'Fresh Baked Goodness Daily',
    logo: '/bakery-logo.png',
    favicon: '/bakery-logo.png',
    banner: '/bakery-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/bakerybliss',
    theme: {
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#F4A460',
      background: '#FFF8DC',
      text: '#654321'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'bread', label: 'Bread' },
      { id: 'pastries', label: 'Pastries' },
      { id: 'cakes', label: 'Cakes' },
      { id: 'cookies', label: 'Cookies' }
    ],
    products: [
      {
        id: 1,
        name: 'Sourdough Bread',
        description: 'Artisan sourdough with tangy flavor',
        price: 250,
        category: 'bread',
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd15b74?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Chocolate Cake',
        description: 'Rich and moist chocolate layer cake',
        price: 450,
        category: 'cakes',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Almond Croissant',
        description: 'Buttery croissant with almond filling',
        price: 180,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 912-345-6789',
      email: 'hello@bakerybliss.com',
      address: 'Baker Street, City Center',
      googleReviewLink: 'https://www.google.com/search?q=bakery+bliss',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'bakerybliss@email.com',
      storeHours: [
        { day: 'Monday', hours: '7 AM–7 PM', isClosed: false },
        { day: 'Tuesday', hours: '7 AM–7 PM', isClosed: false },
        { day: 'Wednesday', hours: '7 AM–7 PM', isClosed: false },
        { day: 'Thursday', hours: '7 AM–7 PM', isClosed: false },
        { day: 'Friday', hours: '7 AM–8 PM', isClosed: false },
        { day: 'Saturday', hours: '8 AM–8 PM', isClosed: false },
        { day: 'Sunday', hours: '8 AM–6 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/bakerybliss',
    openGraph: {
      title: 'Bakery Bliss - Fresh Baked Goodness Daily',
      description: 'Artisan breads, cakes, and pastries baked fresh every day!',
      image: 'https://jat-7xjr.onrender.com/bakery-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/bakerybliss'
    },
    twitter: {
      title: 'Bakery Bliss - Fresh Baked Goodness Daily',
      description: 'Artisan breads, cakes, and pastries baked fresh every day!',
      image: 'https://jat-7xjr.onrender.com/bakery-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/bakerybliss',
      instagram: 'https://www.instagram.com/bakerybliss/'
    },
    testimonials: [
      {
        name: 'Angela Lee',
        rating: 5,
        comment: 'Fresh baked goods every single day! The quality is unmatched.'
      },
      {
        name: 'Peter Gonzales',
        rating: 5,
        comment: 'My favorite bakery. Their sourdough bread is incredible!'
      },
      {
        name: 'Sophie Adams',
        rating: 5,
        comment: 'Perfect pastries and friendly service. A true gem!'
      }
    ]
  },

  // Fitness Hub
  fitnesshub: {
    id: 'fitnesshub',
    name: 'Fitness Hub',
    tagline: 'Transform Your Body, Transform Your Life',
    logo: '/fitness-logo.png',
    favicon: '/fitness-logo.png',
    banner: '/fitness-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/fitnesshub',
    theme: {
      primary: '#1976D2',
      secondary: '#42A5F5',
      accent: '#0D47A1',
      background: '#E3F2FD',
      text: '#0D47A1'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'membership', label: 'Memberships' },
      { id: 'classes', label: 'Classes' },
      { id: 'personal-training', label: 'Personal Training' }
    ],
    products: [
      {
        id: 1,
        name: 'Monthly Membership',
        description: 'Unlimited access to gym facilities',
        price: 1500,
        category: 'membership',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Yoga Class',
        description: '60-minute guided yoga session',
        price: 300,
        category: 'classes',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Personal Training Session',
        description: '1-on-1 training with certified trainer',
        price: 1200,
        category: 'personal-training',
        image: 'https://images.unsplash.com/photo-1521575107034-e3fb11b08e77?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 912-555-6789',
      email: 'info@fitnesshub.com',
      address: 'Sports Complex, Gym District',
      googleReviewLink: 'https://www.google.com/search?q=fitness+hub',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'fitnesshub@email.com',
      storeHours: [
        { day: 'Monday', hours: '5 AM–10 PM', isClosed: false },
        { day: 'Tuesday', hours: '5 AM–10 PM', isClosed: false },
        { day: 'Wednesday', hours: '5 AM–10 PM', isClosed: false },
        { day: 'Thursday', hours: '5 AM–10 PM', isClosed: false },
        { day: 'Friday', hours: '5 AM–10 PM', isClosed: false },
        { day: 'Saturday', hours: '7 AM–8 PM', isClosed: false },
        { day: 'Sunday', hours: '7 AM–6 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/fitnesshub',
    openGraph: {
      title: 'Fitness Hub - Transform Your Body, Transform Your Life',
      description: 'Professional gym with classes, trainers, and state-of-the-art equipment!',
      image: 'https://jat-7xjr.onrender.com/fitness-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/fitnesshub'
    },
    twitter: {
      title: 'Fitness Hub - Transform Your Body, Transform Your Life',
      description: 'Professional gym with classes, trainers, and state-of-the-art equipment!',
      image: 'https://jat-7xjr.onrender.com/fitness-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/fitnesshub',
      instagram: 'https://www.instagram.com/fitnesshub/'
    },
    testimonials: [
      {
        name: 'Marcus Johnson',
        rating: 5,
        comment: 'Amazing gym with top-notch trainers. Transformation guaranteed!'
      },
      {
        name: 'Lisa Wang',
        rating: 5,
        comment: 'Best fitness facility in the area. Love the supportive community!'
      },
      {
        name: 'James Mitchell',
        rating: 5,
        comment: 'Professional staff and excellent equipment. Worth every peso!'
      }
    ]
  },

  // Beauty Glam
  beautyglam: {
    id: 'beautyglam',
    name: 'Beauty Glam',
    tagline: 'Your Beauty Destination',
    logo: '/beauty-logo.png',
    favicon: '/beauty-logo.png',
    banner: '/beauty-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/beautyglam',
    theme: {
      primary: '#E91E63',
      secondary: '#F06292',
      accent: '#C2185B',
      background: '#FCE4EC',
      text: '#880E4F'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'haircut', label: 'Hair Cut' },
      { id: 'skincare', label: 'Skincare' },
      { id: 'massage', label: 'Massage' },
      { id: 'nails', label: 'Nails' }
    ],
    products: [
      {
        id: 1,
        name: 'Hair Cut & Style',
        description: 'Professional haircut with styling',
        price: 400,
        category: 'haircut',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a537?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Facial Treatment',
        description: 'Deep cleansing and rejuvenating facial',
        price: 800,
        category: 'skincare',
        image: 'https://images.unsplash.com/photo-1577862519420-c8546f8df921?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Relaxation Massage',
        description: '60-minute full body massage',
        price: 1000,
        category: 'massage',
        image: 'https://images.unsplash.com/photo-1544161515-81205f29e368?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        name: 'Manicure & Pedicure',
        description: 'Complete nail care and polish',
        price: 500,
        category: 'nails',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 912-777-6789',
      email: 'hello@beautyglam.com',
      address: 'Beauty Avenue, Fashion District',
      googleReviewLink: 'https://www.google.com/search?q=beauty+glam',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'beautyglam@email.com',
      storeHours: [
        { day: 'Monday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Tuesday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Wednesday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Thursday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Friday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Sunday', hours: '12 PM–6 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/beautyglam',
    openGraph: {
      title: 'Beauty Glam - Your Beauty Destination',
      description: 'Premium salon services for hair, skin, massage, and nails!',
      image: 'https://jat-7xjr.onrender.com/beauty-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/beautyglam'
    },
    twitter: {
      title: 'Beauty Glam - Your Beauty Destination',
      description: 'Premium salon services for hair, skin, massage, and nails!',
      image: 'https://jat-7xjr.onrender.com/beauty-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/beautyglam',
      instagram: 'https://www.instagram.com/beautyglam/'
    },
    testimonials: [
      {
        name: 'Victoria Rose',
        rating: 5,
        comment: 'Best salon in town! My hair looks and feels amazing!'
      },
      {
        name: 'Amanda Lopez',
        rating: 5,
        comment: 'Professional stylists and relaxing atmosphere. Highly recommended!'
      },
      {
        name: 'Rebecca Kim',
        rating: 5,
        comment: 'Excellent service and beautiful results every time. Love it!'
      }
    ]
  },

  // Pizza Perfect
  pizzaperfect: {
    id: 'pizzaperfect',
    name: 'Pizza Perfect',
    tagline: 'Wood-Fired Pizza Perfection',
    logo: '/pizza-logo.png',
    favicon: '/pizza-logo.png',
    banner: '/pizza-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/pizzaperfect',
    theme: {
      primary: '#FF6F00',
      secondary: '#FFB74D',
      accent: '#E65100',
      background: '#FFF3E0',
      text: '#BF360C'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'pizza', label: 'Pizza' },
      { id: 'appetizers', label: 'Appetizers' },
      { id: 'drinks', label: 'Drinks' }
    ],
    products: [
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato, mozzarella, and basil',
        price: 350,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Pepperoni Pizza',
        description: 'Loaded with premium pepperoni and cheese',
        price: 400,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Garlic Bread',
        description: 'Crispy garlic bread with herbs',
        price: 120,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        name: 'Fresh Lemonade',
        description: 'Homemade fresh lemonade',
        price: 80,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1585518419759-8a48d3f2ef30?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 70 },
          { label: 'Medium (16oz)', price: 90 },
          { label: 'Large (20oz)', price: 110 }
        ]
      }
    ],
    contact: {
      phone: '(+63) 912-888-6789',
      email: 'order@pizzaperfect.com',
      address: 'Pizza Lane, Downtown',
      googleReviewLink: 'https://www.google.com/search?q=pizza+perfect',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'pizzaperfect@email.com',
      storeHours: [
        { day: 'Monday', hours: '11 AM–11 PM', isClosed: false },
        { day: 'Tuesday', hours: '11 AM–11 PM', isClosed: false },
        { day: 'Wednesday', hours: '11 AM–11 PM', isClosed: false },
        { day: 'Thursday', hours: '11 AM–11 PM', isClosed: false },
        { day: 'Friday', hours: '11 AM–12 AM', isClosed: false },
        { day: 'Saturday', hours: '12 PM–12 AM', isClosed: false },
        { day: 'Sunday', hours: '12 PM–10 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/pizzaperfect',
    openGraph: {
      title: 'Pizza Perfect - Wood-Fired Pizza Perfection',
      description: 'Delicious wood-fired pizzas made with fresh ingredients!',
      image: 'https://jat-7xjr.onrender.com/pizza-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/pizzaperfect'
    },
    twitter: {
      title: 'Pizza Perfect - Wood-Fired Pizza Perfection',
      description: 'Delicious wood-fired pizzas made with fresh ingredients!',
      image: 'https://jat-7xjr.onrender.com/pizza-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/pizzaperfect',
      instagram: 'https://www.instagram.com/pizzaperfect/'
    },
    testimonials: [
      {
        name: 'Tony Romano',
        rating: 5,
        comment: 'Authentic wood-fired pizzas! The best in the city!'
      },
      {
        name: 'Isabella Sofia',
        rating: 5,
        comment: 'Fresh ingredients and perfect crust. Pure perfection!'
      },
      {
        name: 'Marco Benedetti',
        rating: 5,
        comment: 'Family-friendly atmosphere and delicious food. Highly recommended!'
      }
    ]
  },

  // Floral Arts
  floralarts: {
    id: 'floralarts',
    name: 'Floral Arts',
    tagline: 'Beautiful Flowers for Every Occasion',
    logo: '/floral-logo.png',
    favicon: '/floral-logo.png',
    banner: '/floral-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/floralarts',
    theme: {
      primary: '#9C27B0',
      secondary: '#CE93D8',
      accent: '#6A1B9A',
      background: '#F3E5F5',
      text: '#4A148C'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'bouquets', label: 'Bouquets' },
      { id: 'arrangements', label: 'Arrangements' },
      { id: 'wedding', label: 'Wedding' }
    ],
    products: [
      {
        id: 1,
        name: 'Rose Bouquet',
        description: '12 beautiful red roses',
        price: 800,
        category: 'bouquets',
        image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Sunflower Arrangement',
        description: 'Bright sunflowers in a vase',
        price: 600,
        category: 'arrangements',
        image: 'https://images.unsplash.com/photo-1563241527-3004b6f85d6f?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Wedding Centerpiece',
        description: 'Elegant floral centerpiece for weddings',
        price: 3000,
        category: 'wedding',
        image: 'https://images.unsplash.com/photo-1585748048308-f8eda3c2fb12?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 912-999-6789',
      email: 'hello@floralarts.com',
      address: 'Garden Street, Flower District',
      googleReviewLink: 'https://www.google.com/search?q=floral+arts',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'floralarts@email.com',
      storeHours: [
        { day: 'Monday', hours: '9 AM–6 PM', isClosed: false },
        { day: 'Tuesday', hours: '9 AM–6 PM', isClosed: false },
        { day: 'Wednesday', hours: '9 AM–6 PM', isClosed: false },
        { day: 'Thursday', hours: '9 AM–6 PM', isClosed: false },
        { day: 'Friday', hours: '9 AM–7 PM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Sunday', hours: '10 AM–5 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/floralarts',
    openGraph: {
      title: 'Floral Arts - Beautiful Flowers for Every Occasion',
      description: 'Fresh flowers arranged beautifully for weddings, events, and celebrations!',
      image: 'https://jat-7xjr.onrender.com/floral-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/floralarts'
    },
    twitter: {
      title: 'Floral Arts - Beautiful Flowers for Every Occasion',
      description: 'Fresh flowers arranged beautifully for weddings, events, and celebrations!',
      image: 'https://jat-7xjr.onrender.com/floral-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/floralarts',
      instagram: 'https://www.instagram.com/floralarts/'
    },
    testimonials: [
      {
        name: 'Charlotte White',
        rating: 5,
        comment: 'Stunning arrangements! Made my wedding day absolutely perfect!'
      },
      {
        name: 'Grace Chen',
        rating: 5,
        comment: 'Beautiful flowers and excellent customer service. Highly recommend!'
      },
      {
        name: 'Caroline Blake',
        rating: 5,
        comment: 'Professional and creative. My flowers lasted so long!'
      }
    ]
  },

  // Pet Paradise
  petparadise: {
    id: 'petparadise',
    name: 'Pet Paradise',
    tagline: 'Everything for Your Beloved Pet',
    logo: '/pet-logo.png',
    favicon: '/pet-logo.png',
    banner: '/pet-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/petparadise',
    theme: {
      primary: '#FF9800',
      secondary: '#FFB74D',
      accent: '#E65100',
      background: '#FFF3E0',
      text: '#E65100'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'food', label: 'Pet Food' },
      { id: 'toys', label: 'Toys' },
      { id: 'grooming', label: 'Grooming' },
      { id: 'accessories', label: 'Accessories' }
    ],
    products: [
      {
        id: 1,
        name: 'Premium Dog Food',
        description: 'Nutritious dog food for all breeds',
        price: 450,
        category: 'food',
        image: 'https://images.unsplash.com/photo-1576081101132-d0b5e8d58e3f?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Interactive Dog Toy',
        description: 'Durable interactive ball toy',
        price: 200,
        category: 'toys',
        image: 'https://images.unsplash.com/photo-1623395145889-ae1a5c93f2ec?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Dog Grooming Service',
        description: 'Professional grooming and bath',
        price: 800,
        category: 'grooming',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        name: 'Pet Collar & Leash',
        description: 'Durable pet collar with leash',
        price: 300,
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1552646264-3c2aedc5a9a3?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 913-111-6789',
      email: 'info@petparadise.com',
      address: 'Pet Lane, Animal District',
      googleReviewLink: 'https://www.google.com/search?q=pet+paradise',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'petparadise@email.com',
      storeHours: [
        { day: 'Monday', hours: '9 AM–7 PM', isClosed: false },
        { day: 'Tuesday', hours: '9 AM–7 PM', isClosed: false },
        { day: 'Wednesday', hours: '9 AM–7 PM', isClosed: false },
        { day: 'Thursday', hours: '9 AM–7 PM', isClosed: false },
        { day: 'Friday', hours: '9 AM–8 PM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Sunday', hours: '10 AM–6 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/petparadise',
    openGraph: {
      title: 'Pet Paradise - Everything for Your Beloved Pet',
      description: 'Quality pet food, toys, grooming services, and accessories!',
      image: 'https://jat-7xjr.onrender.com/pet-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/petparadise'
    },
    twitter: {
      title: 'Pet Paradise - Everything for Your Beloved Pet',
      description: 'Quality pet food, toys, grooming services, and accessories!',
      image: 'https://jat-7xjr.onrender.com/pet-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/petparadise',
      instagram: 'https://www.instagram.com/petparadise/'
    },
    testimonials: [
      {
        name: 'Katherine Holmes',
        rating: 5,
        comment: 'Best pet store ever! Quality products and amazing service.'
      },
      {
        name: 'Richard Park',
        rating: 5,
        comment: 'My pets love the toys and treats from here. Great prices too!'
      },
      {
        name: 'Diana Foster',
        rating: 5,
        comment: 'Grooming service is excellent. My dog looks adorable!'
      }
    ]
  },

  // Smoothie Bar
  smoothiebar: {
    id: 'smoothiebar',
    name: 'Smoothie Bar',
    tagline: 'Healthy & Delicious Smoothies',
    logo: '/smoothie-logo.png',
    favicon: '/smoothie-logo.png',
    banner: '/smoothie-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/smoothiebar',
    theme: {
      primary: '#4CAF50',
      secondary: '#81C784',
      accent: '#2E7D32',
      background: '#E8F5E9',
      text: '#1B5E20'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'fruit', label: 'Fruit Smoothies' },
      { id: 'protein', label: 'Protein Smoothies' },
      { id: 'detox', label: 'Detox' }
    ],
    products: [
      {
        id: 1,
        name: 'Strawberry Banana',
        description: 'Fresh strawberry and banana smoothie',
        price: 150,
        category: 'fruit',
        image: 'https://images.unsplash.com/photo-1590080876657-cd0eacc437b6?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 140 },
          { label: 'Medium (16oz)', price: 160 },
          { label: 'Large (20oz)', price: 180 }
        ]
      },
      {
        id: 2,
        name: 'Protein Shake',
        description: 'Protein-rich smoothie with whey powder',
        price: 200,
        category: 'protein',
        image: 'https://images.unsplash.com/photo-1590550967968-9fa3209b03a5?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 190 },
          { label: 'Medium (16oz)', price: 210 },
          { label: 'Large (20oz)', price: 230 }
        ]
      },
      {
        id: 3,
        name: 'Green Detox',
        description: 'Spinach, celery, apple detox smoothie',
        price: 180,
        category: 'detox',
        image: 'https://images.unsplash.com/photo-1585730870360-62908ff1ca5d?w=400&h=300&fit=crop',
        sizes: [
          { label: 'Small (12oz)', price: 170 },
          { label: 'Medium (16oz)', price: 190 },
          { label: 'Large (20oz)', price: 210 }
        ]
      }
    ],
    contact: {
      phone: '(+63) 913-222-6789',
      email: 'hello@smoothiebar.com',
      address: 'Health Street, Wellness District',
      googleReviewLink: 'https://www.google.com/search?q=smoothie+bar',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'smoothiebar@email.com',
      storeHours: [
        { day: 'Monday', hours: '7 AM–6 PM', isClosed: false },
        { day: 'Tuesday', hours: '7 AM–6 PM', isClosed: false },
        { day: 'Wednesday', hours: '7 AM–6 PM', isClosed: false },
        { day: 'Thursday', hours: '7 AM–6 PM', isClosed: false },
        { day: 'Friday', hours: '7 AM–7 PM', isClosed: false },
        { day: 'Saturday', hours: '8 AM–7 PM', isClosed: false },
        { day: 'Sunday', hours: '8 AM–5 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/smoothiebar',
    openGraph: {
      title: 'Smoothie Bar - Healthy & Delicious Smoothies',
      description: 'Fresh, nutritious smoothies made with quality ingredients!',
      image: 'https://jat-7xjr.onrender.com/smoothie-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/smoothiebar'
    },
    twitter: {
      title: 'Smoothie Bar - Healthy & Delicious Smoothies',
      description: 'Fresh, nutritious smoothies made with quality ingredients!',
      image: 'https://jat-7xjr.onrender.com/smoothie-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/smoothiebar',
      instagram: 'https://www.instagram.com/smoothiebar/'
    },
    testimonials: [
      {
        name: 'Oliver Garcia',
        rating: 5,
        comment: 'Healthy and delicious! My favorite post-workout spot!'
      },
      {
        name: 'Sophie Turner',
        rating: 5,
        comment: 'Fresh fruits and great taste. Perfect for my diet plan!'
      },
      {
        name: 'Jack Wilson',
        rating: 5,
        comment: 'Best smoothies in town. Highly nutritious and tasty!'
      }
    ]
  },

  // Fashion Boutique
  fashionboutique: {
    id: 'fashionboutique',
    name: 'Fashion Boutique',
    tagline: 'Trendy Styles for Every Season',
    logo: '/fashion-logo.png',
    favicon: '/fashion-logo.png',
    banner: '/fashion-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/fashionboutique',
    theme: {
      primary: '#673AB7',
      secondary: '#9575CD',
      accent: '#512DA8',
      background: '#F3E5F5',
      text: '#311B92'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'dresses', label: 'Dresses' },
      { id: 'tops', label: 'Tops' },
      { id: 'accessories', label: 'Accessories' }
    ],
    products: [
      {
        id: 1,
        name: 'Summer Midi Dress',
        description: 'Comfortable summer midi dress',
        price: 1200,
        category: 'dresses',
        image: 'https://images.unsplash.com/photo-1595777707802-221658fb74c3?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Casual T-Shirt',
        description: 'Premium cotton casual t-shirt',
        price: 500,
        category: 'tops',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Gold Necklace',
        description: 'Elegant gold statement necklace',
        price: 800,
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 913-333-6789',
      email: 'hello@fashionboutique.com',
      address: 'Fashion Street, Style District',
      googleReviewLink: 'https://www.google.com/search?q=fashion+boutique',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'fashionboutique@email.com',
      storeHours: [
        { day: 'Monday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Tuesday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Wednesday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Thursday', hours: '10 AM–7 PM', isClosed: false },
        { day: 'Friday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Sunday', hours: '12 PM–6 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/fashionboutique',
    openGraph: {
      title: 'Fashion Boutique - Trendy Styles for Every Season',
      description: 'Discover the latest fashion trends with our curated collection!',
      image: 'https://jat-7xjr.onrender.com/fashion-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/fashionboutique'
    },
    twitter: {
      title: 'Fashion Boutique - Trendy Styles for Every Season',
      description: 'Discover the latest fashion trends with our curated collection!',
      image: 'https://jat-7xjr.onrender.com/fashion-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/fashionboutique',
      instagram: 'https://www.instagram.com/fashionboutique/'
    },
    testimonials: [
      {
        name: 'Eleanor Davis',
        rating: 5,
        comment: 'Trendy styles and excellent quality! My go-to fashion destination!'
      },
      {
        name: 'Olivia Thompson',
        rating: 5,
        comment: 'Amazing collection and friendly staff. Always find great pieces!'
      },
      {
        name: 'Madison Bell',
        rating: 5,
        comment: 'Fashion-forward boutique with reasonable prices. Love shopping here!'
      }
    ]
  },

  // Bookworm
  bookworm: {
    id: 'bookworm',
    name: 'Bookworm',
    tagline: 'Where Stories Come Alive',
    logo: '/book-logo.png',
    favicon: '/book-logo.png',
    banner: '/book-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/bookworm',
    theme: {
      primary: '#5D4037',
      secondary: '#A1887F',
      accent: '#3E2723',
      background: '#EFEBE9',
      text: '#3E2723'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'fiction', label: 'Fiction' },
      { id: 'nonfiction', label: 'Non-Fiction' },
      { id: 'children', label: "Children's Books" }
    ],
    products: [
      {
        id: 1,
        name: 'Fantasy Novel',
        description: 'Epic fantasy adventure novel',
        price: 450,
        category: 'fiction',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Self-Help Book',
        description: 'Personal development and growth',
        price: 500,
        category: 'nonfiction',
        image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: "Children's Storybook",
        description: 'Beautiful illustrated storybook for kids',
        price: 350,
        category: 'children',
        image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 913-444-6789',
      email: 'hello@bookworm.com',
      address: 'Library Lane, Literary District',
      googleReviewLink: 'https://www.google.com/search?q=bookworm',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'bookworm@email.com',
      storeHours: [
        { day: 'Monday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Tuesday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Wednesday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Thursday', hours: '10 AM–8 PM', isClosed: false },
        { day: 'Friday', hours: '10 AM–9 PM', isClosed: false },
        { day: 'Saturday', hours: '10 AM–9 PM', isClosed: false },
        { day: 'Sunday', hours: '12 PM–7 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/bookworm',
    openGraph: {
      title: 'Bookworm - Where Stories Come Alive',
      description: 'Your favorite bookstore with fiction, non-fiction, and more!',
      image: 'https://jat-7xjr.onrender.com/book-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/bookworm'
    },
    twitter: {
      title: 'Bookworm - Where Stories Come Alive',
      description: 'Your favorite bookstore with fiction, non-fiction, and more!',
      image: 'https://jat-7xjr.onrender.com/book-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/bookworm',
      instagram: 'https://www.instagram.com/bookworm/'
    },
    testimonials: [
      {
        name: 'Henry Edwards',
        rating: 5,
        comment: 'Wonderful selection of books and cozy reading area. My happy place!'
      },
      {
        name: 'Amelia Brown',
        rating: 5,
        comment: 'Knowledgeable staff and great recommendations. Love this bookstore!'
      },
      {
        name: 'Benjamin Clark',
        rating: 5,
        comment: 'Best bookstore in the city. Always has what I\'m looking for!'
      }
    ]
  },

  // Car Wash Pro
  carwashpro: {
    id: 'carwashpro',
    name: 'Car Wash Pro',
    tagline: 'Professional Auto Detailing',
    logo: '/carwash-logo.png',
    favicon: '/carwash-logo.png',
    banner: '/carwash-banner.jpg',
    url: 'https://jat-7xjr.onrender.com/carwashpro',
    theme: {
      primary: '#00BCD4',
      secondary: '#4DD0E1',
      accent: '#00838F',
      background: '#E0F2F1',
      text: '#006064'
    },
    categories: [
      { id: 'all', label: 'All' },
      { id: 'wash', label: 'Car Wash' },
      { id: 'detail', label: 'Detailing' },
      { id: 'ceramic', label: 'Ceramic Coating' }
    ],
    products: [
      {
        id: 1,
        name: 'Basic Car Wash',
        description: 'Complete exterior car wash',
        price: 400,
        category: 'wash',
        image: 'https://images.unsplash.com/photo-1486262715619-67b519e0edd0?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Full Interior Detailing',
        description: 'Deep clean interior and exterior',
        price: 1500,
        category: 'detail',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Ceramic Coating',
        description: 'Premium ceramic coating protection',
        price: 3000,
        category: 'ceramic',
        image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop'
      }
    ],
    contact: {
      phone: '(+63) 913-555-6789',
      email: 'hello@carwashpro.com',
      address: 'Auto Street, Service District',
      googleReviewLink: 'https://www.google.com/search?q=car+wash+pro',
      mapLink: 'https://maps.google.com',
      formsubmitEmail: 'carwashpro@email.com',
      storeHours: [
        { day: 'Monday', hours: '8 AM–6 PM', isClosed: false },
        { day: 'Tuesday', hours: '8 AM–6 PM', isClosed: false },
        { day: 'Wednesday', hours: '8 AM–6 PM', isClosed: false },
        { day: 'Thursday', hours: '8 AM–6 PM', isClosed: false },
        { day: 'Friday', hours: '8 AM–7 PM', isClosed: false },
        { day: 'Saturday', hours: '9 AM–7 PM', isClosed: false },
        { day: 'Sunday', hours: '9 AM–5 PM', isClosed: false }
      ]
    },
    messengerLink: 'https://www.messenger.com/t/carwashpro',
    openGraph: {
      title: 'Car Wash Pro - Professional Auto Detailing',
      description: 'Expert car wash and detailing services for your vehicle!',
      image: 'https://jat-7xjr.onrender.com/carwash-logo.png',
      url: 'https://jat-7xjr.onrender.com/#/carwashpro'
    },
    twitter: {
      title: 'Car Wash Pro - Professional Auto Detailing',
      description: 'Expert car wash and detailing services for your vehicle!',
      image: 'https://jat-7xjr.onrender.com/carwash-logo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/carwashpro',
      instagram: 'https://www.instagram.com/carwashpro/'
    },
    testimonials: [
      {
        name: 'Christopher Harris',
        rating: 5,
        comment: 'Professional detailing service. My car looks brand new!'
      },
      {
        name: 'Patricia Martin',
        rating: 5,
        comment: 'Best car wash I\'ve ever been to. Highly detailed and affordable!'
      },
      {
        name: 'Joseph Allen',
        rating: 5,
        comment: 'Expert service and attention to detail. Highly recommended!'
      }
    ]
  }
}

/**
 * Get client by ID
 * @param {string} clientId - The client identifier from URL
 * @returns {object|undefined} Client configuration object
 */
// getClientById removed - single client app

/**
 * Get all client IDs for routing
 * @returns {string[]} Array of client IDs
 */
export const getClientIds = () => {
  return Object.keys(clients)
}

/**
 * Default client (used when no client is specified in URL)
 */
export const defaultClientId = 'simplify'
