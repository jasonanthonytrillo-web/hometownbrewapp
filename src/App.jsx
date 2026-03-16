import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Events from './pages/Events'
import { CartProvider } from './context/CartContext'
import { ClientProvider, useClient } from './context/ClientContext'
import InstallPrompt from './components/InstallPrompt'
import { hometownbrew } from './data/hometownbrew'

// Inner component that uses client context
function AppContent() {
  const location = useLocation()
  const { client } = useClient()

  // Apply client theme colors as CSS variables
  useEffect(() => {
    if (client?.theme) {
      const root = document.documentElement
      
      // Set client-specific variables
      root.style.setProperty('--client-primary', client.theme.primary)
      root.style.setProperty('--client-secondary', client.theme.secondary)
      root.style.setProperty('--client-accent', client.theme.accent)
      root.style.setProperty('--client-background', client.theme.background)
      root.style.setProperty('--client-text', client.theme.text)
      
      // Also set the main theme variables used throughout the app
      root.style.setProperty('--primary-dark-green', client.theme.primary)
      root.style.setProperty('--light-green', client.theme.secondary)
      root.style.setProperty('--darkest-green', client.theme.text)
    }
  }, [client])

  return (
    <>
      <Helmet>
        <title>{client?.openGraph?.title || client?.name || 'Hometown Brew'}</title>
        <meta name="description" content={client?.openGraph?.description || client?.tagline || 'Coffee & Pastries'} />
        <meta property="og:title" content={client?.openGraph?.title || client?.name || 'Hometown Brew'} />
        <meta property="og:description" content={client?.openGraph?.description || client?.tagline || 'Coffee & Pastries'} />
        <meta property="og:image" content={client?.openGraph?.image} />
        <meta property="og:url" content={client?.openGraph?.url || client?.url || 'https://jat-7xjr.onrender.com'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={client?.twitter?.title || client?.name || 'Hometown Brew'} />
        <meta name="twitter:description" content={client?.twitter?.description || client?.tagline || 'Coffee & Pastries'} />
        <meta name="twitter:image" content={client?.twitter?.image} />
        <link rel="icon" type="image/jpeg" href={client?.favicon} />
      </Helmet>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Single client routes at root level */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/events" element={<Events />} />
            {/* Catch-all redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <InstallPrompt />
      </div>
    </>
  )
}

function App() {
  return (
    <ClientProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ClientProvider>
  )
}

export default App

