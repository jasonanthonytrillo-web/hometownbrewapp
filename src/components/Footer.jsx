import { Link } from 'react-router-dom'
import { useClient } from '../context/ClientContext'
import './Footer.css'

function Footer() {
  const { clientId, client } = useClient()
  
  // Get client-specific data with fallbacks
  const businessName = client?.name || 'Business'
  const tagline = clientId === 'milkteashop' ? 'Refreshing Boba Drinks & More' 
    : clientId === 'projectbrew' ? 'Innovation in Every Cup'
    : 'Coffee and Pastries Made with Passion'

  // Determine base path for navigation
  const basePath = clientId ? `/${clientId}` : ''

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to={basePath || "/"} className="footer-logo">
            {businessName}
          </Link>
          <p className="footer-tagline">
            {tagline}
          </p>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/hometownbrew24" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/hometown_brew/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
