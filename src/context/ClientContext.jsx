import { createContext, useContext, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getClientById, getClientIds, defaultClientId } from '../data/clients'

const ClientContext = createContext(null)

export const useClient = () => {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider')
  }
  return context
}

export const ClientProvider = ({ children }) => {
  const location = useLocation()
  
  // Get all valid client IDs
  const clientIds = useMemo(() => getClientIds(), [])
  
  // Extract client ID from URL path synchronously
  // Expected format: /projectbrew, /projectbrew/menu, /milkteashop, etc.
  const urlClientId = useMemo(() => {
    const path = location.pathname
    const pathParts = path.split('/').filter(Boolean)
    const firstSegment = pathParts[0]
    
    // Check if the first path segment is a valid client ID
    if (clientIds.includes(firstSegment)) {
      return firstSegment
    }
    
    // Default to the default client if no valid client ID in URL
    return defaultClientId
  }, [location.pathname, clientIds])

  // Get client data based on URL client ID
  const client = useMemo(() => {
    return getClientById(urlClientId)
  }, [urlClientId])

  // Update document title with client name (useEffect for side effects)
  useEffect(() => {
    if (client) {
      document.title = client.name
    }
  }, [client])

  const value = {
    client,
    clientId: urlClientId,
    isLoading: false,
    getClientById,
    getClientIds
  }

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  )
}

export default ClientContext
