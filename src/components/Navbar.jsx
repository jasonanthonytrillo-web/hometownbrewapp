import { Link, useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useClient } from '../context/ClientContext'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const params = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const { clientId, client: clientData } = useClient()

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

  // Determine the base path for navigation
  const basePath = clientId ? `/${clientId}` : ''

  // Check if this is the Simplify POS landing page (no menu/cart needed)
  const isSimplify = clientId === 'simplify'

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={basePath || "/"} className="navbar-logo" onClick={closeMenu}>
          <img 
            src={currentClient.logo}
            alt={`${currentClient.name} Logo`}
            className="logo-image"
          />
          <span className="logo-text">{currentClient.name}</span>
        </Link>
        
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

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to={basePath || "/"} 
              className={`nav-link ${location.pathname === '/' || location.pathname === basePath ? 'active' : ''}`}
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
                  to={`${basePath}/menu`} 
                  className={`nav-link ${location.pathname === '/menu' || location.pathname === `${basePath}/menu` ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to={`${basePath}/about`} 
                  className={`nav-link ${location.pathname === '/about' || location.pathname === `${basePath}/about` ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to={`${basePath}/contact`} 
                  className={`nav-link ${location.pathname === '/contact' || location.pathname === `${basePath}/contact` ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to={`${basePath}/cart`} 
                  className={`nav-link cart-link ${location.pathname === '/cart' || location.pathname === `${basePath}/cart` ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  {cartItemCount > 0 && (
                    <span className="cart-count">{cartItemCount}</span>
                  )}
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
