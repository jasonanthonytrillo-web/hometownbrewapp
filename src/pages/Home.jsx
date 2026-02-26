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
  const { client } = useClient()
  const { clientId } = useClient()
  
  // Check if this is the Simplify POS landing page
  const isSimplify = clientId === 'simplify'
  
  // Get client-specific content or use defaults
  const clientContent = clientHeroContent[clientId] || {
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

  // Determine base path for navigation
  const basePath = clientId ? `/${clientId}` : ''

  // Render Simplify POS Landing Page
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
            <p className="hero-subtitle">{clientContent.subtitle}</p>
            <a 
              href={contact?.messengerLink || 'https://www.messenger.com'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary hero-btn"
            >
              Avail Now
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
            <h2 className="section-title fade-in">What is Simplify?</h2>
            <p className="section-subtitle fade-in-delay-1">
               “Simplify POS lets your customers order from your website and sends their orders straight to Messenger — fast, easy, and hassle-free.”
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
            <h2 className="section-title fade-in">Why Choose Simplify?</h2>
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
              <h2>Ready to Simplify Your Business?</h2>
              <p>Start managing your store with ease today!</p>
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
          <Link to={`${basePath}/menu`} className="btn btn-primary hero-btn">
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
    </div>
  )
}

export default Home
