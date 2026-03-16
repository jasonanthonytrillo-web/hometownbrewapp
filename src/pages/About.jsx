import { useClient } from '../context/ClientContext'
import './About.css'

// Client-specific about content - only hometownbrew needed for single client
const clientAboutContent = {
  hometownbrew: {
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=500&fit=crop',
    story: [
      "Welcome to Hometown Brew, where passion meets perfection in every cup. Founded with a vision to bring the finest coffee and dairy products to our community, we've been serving quality since day one.",
      "Our journey began with a simple belief: everyone deserves access to exceptional coffee and fresh dairy products. We source our beans from sustainable farms around the world and partner with local dairy producers who share our commitment to quality.",
      "At Hometown Brew, we don't just serve coffee and dairy – we craft experiences. Every cup is made with care, every pastry is baked with love, and every customer is family."
    ]
  }
}

function About() {
  const { clientId, client } = useClient()

  // Get client-specific content
  const aboutContent = clientAboutContent[clientId] || clientAboutContent.hometownbrew

  return (
    <div className="about">

      {/* Content Section */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image img-zoom fade-in">
              <img 
                src={aboutContent.image} 
                alt={client.name || 'Our Shop'} 
              />
            </div>
            
            <div className="about-text fade-in-delay-1">
              <h2>Our Story</h2>
              {aboutContent.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-number">10+</span>
                  <span className="feature-label">Years of Excellence</span>
                </div>
                <div className="about-feature">
                  <span className="feature-number">50k+</span>
                  <span className="feature-label">Happy Customers</span>
                </div>
                <div className="about-feature">
                  <span className="feature-number">100+</span>
                  <span className="feature-label">Unique Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="fade-in">Our Values</h2>
          <div className="values-grid">
            <div className="value-card fade-in-delay-1">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our products. Every item is carefully selected and tested.</p>
            </div>
            
            <div className="value-card fade-in-delay-2">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Passion</h3>
              <p>Our team is passionate about what we do. Love and dedication go into every product we serve.</p>
            </div>
            
            <div className="value-card fade-in-delay-3">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>We believe in building strong relationships with our customers and local suppliers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
