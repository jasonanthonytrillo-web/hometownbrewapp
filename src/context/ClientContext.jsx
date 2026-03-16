import { createContext, useContext, useMemo, useEffect } from 'react'
import { hometownbrew } from '../data/hometownbrew'
import { getClientIds } from '../data/clients' // kept for now

const ClientContext = createContext(null)

export const useClient = () => {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider')
  }
  return context
}

export const ClientProvider = ({ children }) => {
  // Single client app - always return Hometown Brew
  const client = hometownbrew

  const clientId = 'hometownbrew'


  // Update document title and favicon with client-specific settings (useEffect for side effects)
  useEffect(() => {
    if (client) {
      document.title = client.name
      
      // Update favicon dynamically
      const faviconLink = document.querySelector("link[rel='icon']")
      if (faviconLink && client.favicon) {
        faviconLink.href = client.favicon
      }
    }
  }, [client])

  const value = {
    client,
    clientId,
    isLoading: false
  }

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  )
}

export default ClientContext
