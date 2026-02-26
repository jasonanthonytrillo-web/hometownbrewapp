import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import { ClientProvider, useClient } from './context/ClientContext'
import { getClientIds, defaultClientId } from './data/clients'

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

  // Get all client IDs for routing
  const clientIds = getClientIds()

  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Root route redirects to default client */}
            <Route path="/" element={<Home />} />
            
            {/* Client-specific routes */}
            {clientIds.map(clientId => (
              <Route key={clientId} path={`/${clientId}`} element={<Home />} />
            ))}
            {clientIds.map(clientId => (
              <Route key={`${clientId}-about`} path={`/${clientId}/about`} element={<About />} />
            ))}
            {clientIds.map(clientId => (
              <Route key={`${clientId}-contact`} path={`/${clientId}/contact`} element={<Contact />} />
            ))}
            {clientIds.map(clientId => (
              <Route key={`${clientId}-menu`} path={`/${clientId}/menu`} element={<Menu />} />
            ))}
            {clientIds.map(clientId => (
              <Route key={`${clientId}-cart`} path={`/${clientId}/cart`} element={<Cart />} />
            ))}
            
            {/* Legacy routes (redirect to default client) */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
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
