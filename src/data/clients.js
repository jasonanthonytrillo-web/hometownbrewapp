export const clients = {
  // Current client (Hometown Brew) - will be migrated
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
      { id: 'bestseller', label: 'Best Seller' }
    ],
    products: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Rich and bold single shot espresso',
        price: 120,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Perfect balance of espresso, steamed milk and foam',
        price: 150,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Smooth and creamy espresso with steamed milk',
        price: 160,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        name: 'Americano',
        description: 'Classic espresso with hot water for a milder taste',
        price: 130,
        category: 'hot-coffee',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop'
      },
      {
        id: 5,
        name: 'Croissant',
        description: 'Buttery flaky croissant, perfectly baked golden brown',
        price: 80,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
      },
      {
        id: 6,
        name: 'Danish Pastry',
        description: 'Sweet and tender Danish pastry filled with cream cheese',
        price: 120,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop'
      },
      {
        id: 7,
        name: 'Blueberry Muffin',
        description: 'Freshly baked muffin bursting with juicy blueberries',
        price: 150,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=400&h=300&fit=crop'
      },
      {
        id: 8,
        name: 'Cinnamon Roll',
        description: 'Warm cinnamon roll topped with creamy frosting',
        price: 170,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop'
      },
      {
        id: 9,
        name: 'Matu Chocolate Fresh Milk',
        description: 'Farm-fresh pure milk, locally sourced',
        price: 120,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop'
      },
      {
        id: 10,
        name: 'Fresh Milk',
        description: 'Probiotic yogurt drink for gut health',
        price: 100,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop'
      },
      {
        id: 11,
        name: 'White Mocha',
        description: 'Rich and creamy white mocha with vanilla and chocolate',
        price: 150,
        category: 'bestseller',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 12,
        name: 'Seasalt',
        description: 'Smooth and refreshing seasalt-flavored iced coffee',
        price: 150,
        category: 'iced-coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
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
    }
  },

  // Example: Second client - Milk Tea Shop
  milkteashop: {
    id: 'milkteashop',
    name: 'Milk Tea Shop',
    tagline: 'Premium Milk Tea & Fruit Tea',
    logo: '/milktea-logo.png',
    favicon: '/hblogo.jpg',
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
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Brown Sugar Milk Tea',
        description: 'Caramelized brown sugar with fresh milk',
        price: 150,
        category: 'milktea',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Taro Milk Tea',
        description: 'Smooth taro paste with creamy milk',
        price: 140,
        category: 'milktea',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop'
      },
      {
        id: 4,
        name: 'Mango Fruit Tea',
        description: 'Fresh mango chunks with fruity tea',
        price: 130,
        category: 'fruittea',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop'
      },
      {
        id: 5,
        name: 'Strawberry Fruit Tea',
        description: 'Sweet strawberries with refreshing tea',
        price: 120,
        category: 'fruittea',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop'
      },
      {
        id: 6,
        name: 'Strawberry Smoothie',
        description: 'Creamy strawberry smoothie',
        price: 160,
        category: 'smoothie',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop'
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
    }
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
      primary: '#533601',
      secondary: '#cf971d',
      accent: '#f6cd47',
      background: '#ffffff',
      text: '#c17906'
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
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Cold Brew',
        description: 'Smooth cold brewed coffee',
        price: 160,
        category: 'iced-coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Matcha Latte',
        description: 'Premium Japanese matcha with milk',
        price: 170,
        category: 'noncoffee',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop'
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
    }
  },

  // Simplify - POS Service Landing Page
  simplify: {
    id: 'simplify',
    name: 'Simplify',
    tagline: 'Your store. Your website. Your Messenger.',
    logo: '/simplifylogo.png',
    favicon: '/simplifylogo.png',
    banner: '/simplify-banner.jpg',
    url: 'https://jat-7xjr.onrender.com',
    theme: {
      primary: '#0028f1ca',
      secondary: '#1ea8d6',
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
      description: 'A passionate entrepreneur dedicated to helping small businesses thrive in the digital age. With Simplify, I aim to make point-of-sale systems accessible and easy to use for every store owner.'
    },
    features: [
      {
        title: 'Web-based POS',
        description: 'Access your store management from any device with an internet connection. No installations needed.',
        icon: '🌐'
      },
      {
        title: 'Messenger Ordering',
        description: 'Customers can easily order through Facebook Messenger. Streamline your sales process effortlessly.',
        icon: '💬'
      },
      {
        title: 'Easy Management',
        description: 'Manage products, track sales, and monitor your business with our intuitive dashboard.',
        icon: '📊'
      }
    ],
    benefits: [
      'No need for expensive hardware',
      'Real-time sales tracking',
      'Customer order management',
      'Easy product updates',
      '24/7 access from anywhere',
      'Simple setup process'
    ],
    openGraph: {
      title: 'Simplify POS - Point of Sale for Small Businesses',
      description: 'Simplify POS – the best point of sale system for small businesses!',
      image: 'https://jat-7xjr.onrender.com/simplifylogo.png',
      url: 'https://jat-7xjr.onrender.com'
    },
    twitter: {
      title: 'Simplify POS - Point of Sale for Small Businesses',
      description: 'Simplify POS – the best point of sale system for small businesses!',
      image: 'https://jat-7xjr.onrender.com/simplifylogo.png'
    },
    social: {
      facebook: 'https://www.facebook.com/jasonanthonytrillo',
      instagram: 'https://www.instagram.com/jasonanthonytrillo/'
    }
  }
}

/**
 * Get client by ID
 * @param {string} clientId - The client identifier from URL
 * @returns {object|undefined} Client configuration object
 */
export const getClientById = (clientId) => {
  return clients[clientId]
}

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
