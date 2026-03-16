import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useClient } from '../context/ClientContext'
import './Home.css'
import './Simplify.css'

// Default hero images (coffee shop theme)
const defaultHeroImages = [
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&h=1080&fit=crop'
]

// Simplify hero images
const simplifyHeroImages = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop'
]

// Client-specific hero images and content
const clientHeroContent = {
  hometownbrew: {
    images: defaultHeroImages,
    title: 'Hometown Brew',
    subtitle: 'Coffee and Pastries Made with Passion',
    featured: [
      {
        title: 'Coffee',
        description: 'Sourced from the finest beans around the world, our coffee is expertly roasted to bring out the rich, complex flavors that coffee lovers crave.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
      },
      {
        title: 'Dairies',
        description: 'Fresh, creamy dairy products from local farms. From rich milk to artisan cheeses, we bring you the best nature has to offer.',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop'
      },
      {
        title: 'Pastries',
        description: 'Freshly baked pastries crafted by our expert bakers. From flaky croissants to delicious muffins, perfect with your coffee.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      }
    ]
  },
  milkteashop: {
    images: [
      'https://images.unsplash.com/photo-1558857563-b371033873b8?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=1920&h=1080&fit=crop'
    ],
    title: 'Milk Tea Shop',
    subtitle: 'Refreshing Boba Drinks & More',
    featured: [
      {
        title: 'Milk Tea',
        description: 'Premium tea blended with creamy milk for the perfect boba experience. Try our classic milk tea or brown sugar variants!',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop'
      },
      {
        title: 'Fruit Tea',
        description: 'Fresh fruits combined with refreshing tea. Our fruit teas are perfect for those who love a lighter, fruity taste.',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop'
      },
      {
        title: 'Smoothies',
 
        description: 'Creamy and refreshing smoothies made with real fruits. A healthy treat for any time of day!',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop'
      }
    ]
  },
  projectbrew: {
    images: [
      '/wallpaper.jpg',
      '/pb.jpg',
      '/pb1.jpg',
      '/pb1.jpg'
    ],
    title: 'Project Brew',
    subtitle: 'Innovation in Every Cup',
    featured: [
      {
        title: 'Specialty Coffee',
        description: 'Single-origin beans carefully sourced from the best farms. Our baristas craft each cup with precision and passion.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
      },
      {
        title: 'Non-Coffee',
        description: 'Explore our unique matcha, chocolate, and tea-based beverages. Something for everyone!',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        title: 'Pastries',
        description: 'Artisan pastries baked fresh daily. Perfect companions to your favorite brew.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      }
    ]
  },
  simplify: {
    images: simplifyHeroImages,
    title: 'Simplify',
    subtitle: 'Your store. Your website. Your Messenger.',
    featured: []
  }
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
const { client } = useClient()
  
  // Single client - no Simplify landing
  const isSimplify = false
  
  // Get store hours from client config
  const storeHours = client?.contact?.storeHours || [
    { day: 'Monday', hours: '10 AM–10 PM', isClosed: false },
    { day: 'Tuesday', hours: '10 AM–10 PM', isClosed: false },
    { day: 'Wednesday', hours: '10 AM–10 PM', isClosed: false },
    { day: 'Thursday', hours: '10 AM–10 PM', isClosed: false },
    { day: 'Friday', hours: '10 AM–10 PM', isClosed: false },
    { day: 'Saturday', hours: '10 AM–10 PM', isClosed: false },
    { day: 'Sunday', hours: 'Closed', isClosed: true }
  ]

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date()
      const day = now.getDay()
      const hours = now.getHours()
      
      // Sunday = 0
      if (day === 0) {
        setIsOpen(false)
        return
      }
      
      // Open from 10 AM to midnight
      if (hours >= 10 || hours < 0) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    checkOpenStatus()
    const interval = setInterval(checkOpenStatus, 60000)
    return () => clearInterval(interval)
  }, [])
  
  // Get client-specific content or use defaults
  const clientContent = clientHeroContent['hometownbrew'] || {
    images: defaultHeroImages,
    title: clientId ? clientId.charAt(0).toUpperCase() + clientId.slice(1) : 'Welcome',
    subtitle: 'Discover our delicious menu',
    featured: clientHeroContent.hometownbrew.featured
  }

  const heroImages = clientContent.images

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [heroImages.length])

// Single client - root paths
  const basePath = ''

  // Render Simplify Cafe Kiosk Landing Page
  if (isSimplify && client) {
    const { owner, features, benefits, contact } = client
    
    return (
      <div className="home simplify-landing">
        {/* Hero Section */}
        <section className="hero simplify-hero">
          <div className="hero-slideshow">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content fade-in">
            <h1 className="hero-title">{clientContent.title}</h1>
            <p className="hero-subtitle">Website + Online Kiosk for your Cafe or Restaurant</p>
            <a 
              href={contact?.messengerLink || 'https://www.messenger.com'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary hero-btn"
            >
              Get Your Kiosk
            </a>
          </div>
          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="clients-section">
          <div className="container">
            <h2 className="section-title fade-in">Live Websites</h2>
            <p className="section-subtitle fade-in-delay-1">
              See Simplify Kiosk in action with our live client websites
            </p>
            <div className="features-grid clients-grid">
              <Link 
                to="/projectbrew" 
                className="feature-card client-card fade-in-delay-1"
              >
                <div className="feature-icon client-preview">
                  <img src="/pblogo.jpg" alt="Projectbrew" className="client-logo" />
                  <img src="/pb.jpg" alt="Live Preview" className="client-preview-img" />
                </div>
                <h3>Projectbrew</h3>
                <p>Specialty coffee & artisan pastries</p>
                <a href="/projectbrew" className="live-link">Live Demo →</a>
              </Link>
              <Link 
                to="/hometownbrew" 
                className="feature-card client-card fade-in-delay-2"
              >
                <div className="feature-icon client-preview">
                  <img src="/hblogo.jpg" alt="Hometown Brew" className="client-logo" />
                  <img src="/croissant.jpg" alt="Live Preview" className="client-preview-img" />
                </div>
                <h3>Hometown Brew</h3>
                <p>Coffee, dairies & fresh baked goods</p>
                <a href="/hometownbrew" className="live-link">Live Demo →</a>
              </Link>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="section-title fade-in">About Me</h2>
            <div className="about-content">
              <div className="about-image">
                <img 
                  src={owner?.photo || '/jasonanthony.jpg'} 
                  alt={owner?.name || 'Jason Anthony Trillo'} 
                />
              </div>
              <div className="about-text">
                <h3>{owner?.name || 'Jason Anthony Trillo'}</h3>
                <p>{owner?.description || 'A passionate entrepreneur dedicated to helping small businesses thrive in the digital age. With Simplify, I aim to make point-of-sale systems accessible and easy to use for every store owner.'}</p>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">Facebook:</span>
                    <a href={contact?.facebook} target="_blank" rel="noopener noreferrer">
                      {contact?.facebook?.replace('https://www.facebook.com/', '') || 'jasonanthonytrillo'}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Contact:</span>
                    <a href={`tel:${contact?.phone?.replace(/[^0-9]/g, '')}`}>
                      {contact?.phone || '09919357954 / 09487901802'}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Gmail:</span>
                    <a href={`mailto:${contact?.email}`}>
                      {contact?.email || 'jasonanthonytrillo@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title fade-in">What is Simplify Cafe Kiosk?</h2>
            <p className="section-subtitle fade-in-delay-1">
               "Complete website solution for cafes & restaurants. Customers order online, orders are stored securely and instantly forwarded to your Facebook Messenger."
            </p>
            
            <div className="features-grid">
              {features?.map((feature, index) => (
                <div key={index} className={`feature-card fade-in-delay-${index + 1}`}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              )) || (
                <>
                  <div className="feature-card fade-in-delay-1">
                    <div className="feature-icon">🌐</div>
                    <h3>Web-based POS</h3>
                    <p>Access your store management from any device with an internet connection. No installations needed.</p>
                  </div>
                  <div className="feature-card fade-in-delay-2">
                    <div className="feature-icon">💬</div>
                    <h3>Messenger Ordering</h3>
                    <p>Customers can easily order through Facebook Messenger. Streamline your sales process effortlessly.</p>
                  </div>
                  <div className="feature-card fade-in-delay-3">
                    <div className="feature-icon">📊</div>
                    <h3>Easy Management</h3>
                    <p>Manage products, track sales, and monitor your business with our intuitive dashboard.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">

          <div className="container">
            <h2 className="section-title fade-in">Why Choose Simplify Cafe Kiosk?</h2>
            <p className="section-subtitle fade-in-delay-1">
              Benefits that help your business grow
            </p>
            
            <div className="benefits-grid">
              {(benefits || [
                'No need for expensive hardware',
                'Real-time sales tracking',
                'Customer order management',
                'Easy product updates',
                '24/7 access from anywhere',
                'Simple setup process'
              ]).map((benefit, index) => (
                <div key={index} className={`benefit-item fade-in-delay-${(index % 3) + 1}`}>
                  <span className="benefit-check">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content fade-in">
              <h2>Ready for Your Cafe Kiosk?</h2>
              <p>Get orders delivered straight to Messenger today!</p>
              <a 
                href={contact?.messengerLink || 'https://www.messenger.com'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary cta-btn"
              >
                Avail Now
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Render default client landing page
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">{clientContent.title}</h1>
          <p className="hero-subtitle">{clientContent.subtitle}</p>
<Link to="/menu" className="btn btn-primary hero-btn">
            Order Now
          </Link>
        </div>
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="container">
          <h2 className="section-title fade-in">Our Specialties</h2>
          <p className="section-subtitle fade-in-delay-1">
            Discover our handcrafted selection of premium products
          </p>
          
          <div className="featured-grid">
            {clientContent.featured.map((item, index) => (
              <div key={index} className={`featured-card fade-in-delay-${index + 1}`}>
                <div className="card-image img-zoom">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                  />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours & Testimonials Section */}
      <section className="store-hours-section">
        <div className="container">
          <h2 className="section-title fade-in">What Our Customers Say</h2>
          <div className="hours-testimonials-grid">
            {/* Testimonials Column */}
            <div className="testimonials-card fade-in-delay-1">
              <h3 className="card-title">Customer Reviews</h3>
              <div className="testimonials-list">
                {client?.testimonials?.map((testimonial, index) => (
                  <div key={index} className="testimonial-item">
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                    <p className="testimonial-comment">"{testimonial.comment}"</p>
                    <p className="testimonial-author">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Hours Column */}
            <div className="store-hours-card fade-in-delay-2">
              <h3 className="card-title">Store Hours</h3>
              <div className="store-hours-status">
                <span className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
                  {isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <div className="store-hours-list">
                {storeHours.map((schedule, index) => (
                  <div key={index} className={`hours-row ${schedule.isClosed ? 'closed-day' : ''}`}>
                    <span className="day">{schedule.day}</span>
                    <span className="hours">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
