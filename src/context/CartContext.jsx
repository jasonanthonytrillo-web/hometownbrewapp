import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const [cartAnimKey, setCartAnimKey] = useState(0)

  const addToCart = (product) => {
    console.log('🎯 CartContext addToCart CALLED with:', product)
    console.log('📦 Previous cart length:', cartItems.length)
    
    // Trigger badge animation restart
    setCartAnimKey(prev => prev + 1)
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      console.log('🔍 Existing item found:', !!existingItem)
      if (existingItem) {
        const newCart = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        console.log('➕ Quantity updated. New cart length:', newCart.length)
        return newCart
      }
      const newCart = [...prevItems, { ...product, quantity: 1 }]
      console.log('🆕 New item added. New cart length:', newCart.length)
      return newCart
    })
    console.log('✅ setCartItems triggered, animKey:', cartAnimKey + 1)
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const updateSize = (productId, newSize, newPrice) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, size: newSize, price: newPrice } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateSize,
      clearCart,
      cartTotal,
      cartCount,
      cartAnimKey
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
