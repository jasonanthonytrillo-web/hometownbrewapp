export const hometownbrew = {
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
}

