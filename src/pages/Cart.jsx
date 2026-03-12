import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useClient } from '../context/ClientContext'
import './Cart.css'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, updateSize, clearCart, cartTotal } = useCart()
  const { client, clientId } = useClient()
  const [showOrderType, setShowOrderType] = useState(false)
  const [showNameInput, setShowNameInput] = useState(false)
  const [showPaymentMode, setShowPaymentMode] = useState(false)
  const [showCashlessOptions, setShowCashlessOptions] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedOrderType, setSelectedOrderType] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('')
  const [selectedCashlessOption, setSelectedCashlessOption] = useState('')
  const [selectedSizeItemId, setSelectedSizeItemId] = useState(null)

  // Scroll to order type modal when checkout is clicked
  useEffect(() => {
    if (showOrderType) {
      setTimeout(() => {
        const modal = document.querySelector('.order-type-modal')
        if (modal) {
          modal.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [showOrderType])

  // Scroll to name input modal
  useEffect(() => {
    if (showNameInput) {
      setTimeout(() => {
        const modal = document.querySelector('.order-type-modal')
        if (modal) {
          modal.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [showNameInput])

  // Scroll to payment mode modal
  useEffect(() => {
    if (showPaymentMode) {
      setTimeout(() => {
        const modal = document.querySelector('.order-type-modal')
        if (modal) {
          modal.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [showPaymentMode])

  // Scroll to continue shopping button when cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setTimeout(() => {
        const continueBtn = document.querySelector('.continue-shopping-btn')
        if (continueBtn) {
          continueBtn.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [cartItems])

  // Get client-specific base path for navigation
  const basePath = clientId ? `/${clientId}` : ''

  // Get client-specific messenger link - with fallback
  const getMessengerLink = () => {
    // Try to get from client object first
    if (client?.messengerLink) {
      return client.messengerLink
    }
    // Fallback to simplify's messenger if no client messenger link
    return 'https://www.messenger.com/t/jasonanthonytrillo'
  }

  // Extract page ID from messenger link
  const getMessengerPageId = (messengerLink) => {
    // Extract the page ID from links like https://www.messenger.com/t/336367819563080
    const match = messengerLink.match(/\/t\/(\d+)/)
    if (match) {
      return match[1]
    }
    // Try alternative format
    const altMatch = messengerLink.match(/messenger\.com\/t\/([^\/]+)/)
    if (altMatch) {
      return altMatch[1]
    }
    return null
  }

const generateOrderId = () => {
    // Generate random 6-digit number (includes numbers prominently, still random)
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateOrderText = (orderType, paymentMode, cashlessOption) => {
    const orderId = generateOrderId()
    const clientName = client?.name || 'Business'
    
    let orderText = `Order ID: ${orderId}\n`
    orderText += `Name: ${customerName}\n`
    orderText += `Type: ${orderType}\n`
    orderText += `Payment: ${paymentMode}`
    if (cashlessOption) {
      orderText += ` (${cashlessOption})`
    }
    orderText += `\n\n`
    orderText += "Orders:\n"
    
    cartItems.forEach((item, index) => {
      orderText += `${index + 1}. ${item.name}${item.size ? ` (${item.size})` : ''} x${item.quantity} - ₱${item.price * item.quantity}\n`
    })
    
    orderText += `\n\nThis is my order for ${clientName}. Please confirm.`
    return orderText
  }

  const handleOrderTypeSelect = (orderType) => {
    setSelectedOrderType(orderType)
    setShowOrderType(false)
    setShowNameInput(true)
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    if (customerName.trim()) {
      setShowNameInput(false)
      setShowPaymentMode(true)
    }
  }

  const handlePaymentModeSelect = (mode) => {
    setSelectedPaymentMode(mode)
    if (mode === 'Cashless') {
      setShowCashlessOptions(true)
    } else {
      setShowPaymentMode(false)
      setShowConfirm(true)
    }
  }

  const handleCashlessOptionSelect = (option) => {
    setSelectedCashlessOption(option)
    setShowCashlessOptions(false)
    setShowPaymentMode(false)
    setShowConfirm(true)
  }

  const handleConfirmCheckout = async () => {
    const paymentDisplay = selectedPaymentMode === 'Cash' 
      ? 'Cash' 
      : `${selectedPaymentMode} (${selectedCashlessOption})`
    
    const orderText = generateOrderText(selectedOrderType, paymentDisplay, '')
    const messengerLink = getMessengerLink()
    
    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)
    
    // Try to copy to clipboard first
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(orderText)
      }
    } catch (err) {
      console.log('Clipboard not available')
    }
    
    // Try different Messenger URL formats
    const encodedMessage = encodeURIComponent(orderText)
    
    // Method 1: Try using m.me format (works better on mobile)
    const pageId = getMessengerPageId(messengerLink)
    
    let messengerUrl = ''
    if (pageId) {
      // Use m.me short link format with message
      messengerUrl = `https://m.me/${pageId}?text=${encodedMessage}`
    } else {
      // Fallback to original link
      messengerUrl = `${messengerLink}?text=${encodedMessage}`
    }
    
    // For mobile, try direct navigation
    if (isMobile) {
      // Use location.href for better mobile support
      window.location.href = messengerUrl
    } else {
      // Desktop - open in new tab
      window.open(messengerUrl, '_blank')
    }

    // Clear cart after checkout
    clearCart()
    setShowConfirm(false)
    setSelectedOrderType('')
    setCustomerName('')
    setSelectedPaymentMode('')
    setSelectedCashlessOption('')
    
    // Scroll to Browse Menu button after checkout completion
    setTimeout(() => {
      const continueBtn = document.querySelector('.continue-shopping-btn')
      if (continueBtn) {
        continueBtn.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 300)
  }

  const resetPaymentFlow = () => {
    setShowPaymentMode(false)
    setShowCashlessOptions(false)
    setShowConfirm(false)
    setSelectedPaymentMode('')
    setSelectedCashlessOption('')
  }

  const handleChangeSizeClick = (itemId) => {
    setSelectedSizeItemId(itemId)
  }

  const handleSizeChange = (itemId, newSize) => {
    updateSize(itemId, newSize.label, newSize.price)
    setSelectedSizeItemId(null)
    // Scroll to cart summary after size change
    setTimeout(() => {
      const cartSummary = document.querySelector('.cart-summary')
      if (cartSummary) {
        cartSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart empty-cart fade-in">
        <div className="empty-cart-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items yet.</p>
          <Link to={`${basePath}/menu`} className="continue-shopping-btn">
            Browse Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart fade-in-fast">
      {/* Order Type Selection Modal */}
      {showOrderType && (
        <div className="order-type-modal">
          <div className="order-type-content">
            <h2>Select Order Type</h2>
            <p>How would you like to receive your order?</p>
            <div className="order-type-buttons">
              <button 
                className="order-type-btn dine-in"
                onClick={() => handleOrderTypeSelect('Dine-in')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                  <path d="M7 2v20"/>
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
                <span>Dine-in</span>
              </button>
              <button 
                className="order-type-btn takeout"
                onClick={() => handleOrderTypeSelect('Takeout')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>
                  <path d="M12 18v-6"/>
                  <path d="M9 15h6"/>
                </svg>
                <span>Takeout</span>
              </button>
            </div>
            <button 
              className="cancel-order-type"
              onClick={() => setShowOrderType(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Name Input Modal */}
      {showNameInput && (
        <div className="order-type-modal">
          <div className="order-type-content">
            <h2>Enter Your Name</h2>
            <p>We'll call your name when your order is ready!</p>
            <form onSubmit={handleNameSubmit} className="name-input-form">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name"
                className="name-input"
                autoFocus
                required
              />
              <button type="submit" className="confirm-btn">
                Continue
              </button>
            </form>
            <button 
              className="cancel-order-type"
              onClick={() => {
                setShowNameInput(false)
                setShowOrderType(true)
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      {/* Payment Mode Selection Modal */}
      {showPaymentMode && !showCashlessOptions && (
        <div className="order-type-modal">
          <div className="order-type-content">
            <h2>Select Payment Mode</h2>
            <p>How would you like to pay?</p>
            <div className="order-type-buttons">
              <button 
                className="order-type-btn cash"
                onClick={() => handlePaymentModeSelect('Cash')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="12" x="2" y="6" rx="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M6 12h.01M18 12h.01"/>
                </svg>
                <span>Cash</span>
              </button>
              <button 
                className="order-type-btn cashless"
                onClick={() => handlePaymentModeSelect('Cashless')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <path d="M2 10h20"/>
                </svg>
                <span>Cashless</span>
              </button>
            </div>
            <button 
              className="cancel-order-type"
              onClick={() => setShowPaymentMode(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      {/* Cashless Options Modal */}
      {showCashlessOptions && (
        <div className="order-type-modal">
          <div className="order-type-content">
            <h2>Select Cashless Option</h2>
            <p>Choose your payment app</p>
            <div className="order-type-buttons cashless-options">
              <button 
                className="order-type-btn gcash"
                onClick={() => handleCashlessOptionSelect('GCash')}
              >
                <span>GCash</span>
              </button>
              <button 
                className="order-type-btn paymaya"
                onClick={() => handleCashlessOptionSelect('PayMaya')}
              >
                <span>PayMaya</span>
              </button>
            </div>
            <button 
              className="cancel-order-type"
              onClick={() => setShowCashlessOptions(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
{showConfirm && (
        <div className="order-type-modal">
          <div className="order-type-content confirm-modal">
            <div className="confirm-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <h2>Proceed to Messenger?</h2>
            <p>Your order will open in Messenger. Just click Send to complete your order!</p>
            <div className="confirm-buttons">
              <button 
                className="confirm-btn"
                onClick={handleConfirmCheckout}
              >
                Yes, Proceed
              </button>
              <button 
                className="cancel-order-type"
                onClick={() => {
                  setShowConfirm(false)
                  setSelectedOrderType('')
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>
        
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                {item.size && (
                  <p className="cart-item-size">
                    Size: <span className="size-badge">{item.size}</span>
                    {item.sizes && item.sizes.length > 0 && (
                      <button 
                        className="change-size-btn"
                        onClick={() => handleChangeSizeClick(item.id)}
                      >
                        Change
                      </button>
                    )}
                  </p>
                )}
              </div>
              <div className="cart-item-actions">
                <div className="cart-item-price">
                  ₱{item.price * item.quantity}
                </div>
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Size Change Modal */}
        {selectedSizeItemId && cartItems.find(item => item.id === selectedSizeItemId) && cartItems.find(item => item.id === selectedSizeItemId).sizes && (
          <div className="size-modal-overlay">
            <div className="size-modal-card">
              <h3>Select Size for {cartItems.find(item => item.id === selectedSizeItemId).name}</h3>
              <div className="size-options">
                {cartItems.find(item => item.id === selectedSizeItemId).sizes.map((size, index) => (
                  <button
                    key={index}
                    className="size-option-btn"
                    onClick={() => handleSizeChange(selectedSizeItemId, size)}
                  >
                    <span className="size-label">{size.label}</span>
                    <span className="size-price">₱{size.price}</span>
                  </button>
                ))}
              </div>
              <button 
                className="size-cancel-btn"
                onClick={() => setSelectedSizeItemId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="cart-summary">
          <div className="cart-total">
            <span>Total:</span>
            <span className="cart-total-amount">₱{cartTotal}</span>
          </div>
          <button 
            className="checkout-btn" 
            onClick={() => setShowOrderType(true)}
          >
            Proceed to Checkout
          </button>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
