import { Link, useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useClient } from '../context/ClientContext'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const params = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems, cartAnimKey } = useCart()
const { client: clientData } = useClient()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Get client-specific data with fallback
  const currentClient = clientData || {
    name: 'Business',
    logo: '/hblogo.jpg'
  }

  // Single client - no basePath needed
  const basePath = ''

  // Single Hometown Brew client
  const isSimplify = false

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img 
            src={currentClient.logo}
            alt={`${currentClient.name} Logo`}
            className="logo-image"
          />
          <span className="logo-text">{currentClient.name}</span>
        </Link>
        
        {/* Mobile Controls Container */}
        <div className="mobile-controls">
          {/* Cart Link for Mobile */}
          {!isSimplify && (
              <Link 
              to="/cart" 
              className="mobile-cart-link"
              title="View Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartItemCount > 0 && (
                <span key={cartAnimKey} className="cart-count">{cartItemCount}</span>
              )}
            </Link>
          )}

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          
          {/* Only show Menu, About, Contact, Cart for non-Simplify clients */}
          {!isSimplify && (
            <>
              <li>
                <Link 
                  to="/menu" 
                  className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  {cartItemCount > 0 && (
                    <span key={cartAnimKey} className="cart-count">{cartItemCount}</span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/#" 
                  className="nav-link install-link"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    if (window.deferredPrompt) {
                      window.deferredPrompt.prompt();
                    } else {
                      alert('Open in Chrome mobile and add to home screen for app-like experience!');
                    }
                  }}
                >
                  📱 Download App
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
