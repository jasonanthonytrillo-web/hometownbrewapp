import { useState, useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import { useClient } from '../context/ClientContext'
import './Menu.css'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [addingProductId, setAddingProductId] = useState(null)
  const [addPhase, setAddPhase] = useState('idle') // idle | adding | added
  const addStartRef = useRef(0)
  const { addToCart } = useCart()
const { client } = useClient()


  const PRODUCTS_PER_PAGE = 15

  // Scroll to size modal when product is selected
  useEffect(() => {
    if (selectedProduct && selectedProduct.sizes && selectedProduct.sizes.length > 0) {
      setTimeout(() => {
        const sizeModal = document.querySelector('.size-modal-overlay')
        if (sizeModal) {
          sizeModal.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [selectedProduct])

  const showToastNotification = (message, shouldScroll = true) => {
    console.log('🍞 showToastNotification CALLED:', message)
    console.log('📱 showToast before:', showToast)
    setToastMessage(message)
    setShowToast(true)
    console.log('📱 showToast AFTER setState:', true)
    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setTimeout(() => {
      console.log('🍞 Toast timeout - hiding')
      setShowToast(false)
    }, 5000) // Longer timeout for testing
  }

  // Get categories and products from client config, with fallbacks
  const categories = client?.categories || [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'pastries', label: 'Pastries' },
    { id: 'dairy', label: 'Dairy Products' },
    { id: 'bestseller', label: 'Best Seller' }
  ]

  const products = client?.products || []

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  // Reset to page 1 when category or search changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleAddToCart = async (product) => {
    if (addingProductId === product.id) return // Prevent double-click

    // Check if product is available
    if (product.available === false) {
      showToastNotification(`${product.name} is currently not available`, false)
      return
    }

    addStartRef.current = Date.now()
    setAddingProductId(product.id)
    setAddPhase('adding')
    console.log('Add to cart clicked:', product.name)

    // If product has sizes, show size selection modal
    if (product.sizes && product.sizes.length > 0) {
      setSelectedProduct(product)
      setSelectedSize(null)
      setTimeout(() => setAddingProductId(null), 500)
    } else {
      // If no sizes, add to cart directly
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description
      })
console.log(`Added ${product.name} to cart ✓`)
      setAddPhase('added')
      console.log('Toast shown for', product.name)
      setTimeout(() => {
        setAddingProductId(null)
        setAddPhase('idle')
        addStartRef.current = 0
      }, 2200)
    }
  }

const handleSizeSelect = (size) => {
    console.log('🔵 handleSizeSelect called with size:', size.label, 'product:', selectedProduct.name)
    if (selectedProduct) {
      const productToAdd = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: size.price,
        image: selectedProduct.image,
        description: selectedProduct.description,
        size: size.label,
        sizes: selectedProduct.sizes
      }
      console.log('🛒 Calling addToCart with:', productToAdd)
      addToCart(productToAdd)
      console.log('✅ addToCart called, showing toast for:', selectedProduct.name)
      console.log(`Successfully added ${selectedProduct.name} (${size.label}) to cart ✓`)
      setSelectedProduct(null)
      setSelectedSize(null)
    }
  }

  return (
    <div className="menu fade-in">


      <section className="menu-content">
        <div className="menu-container">
          <div className="menu-search">
            <input
              type="text"
              className="menu-search-input"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <span className="menu-search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          <div className="menu-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products-message">
              <h3>No products found.</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <>
              <div className="menu-grid">
                {paginatedProducts.map(product => (
                  <div key={product.id} className={`menu-card ${product.available === false ? 'unavailable' : ''}`}>
                    {product.available === false && (
                      <div className="sold-out-badge">Sold Out</div>
                    )}
                    <div className="menu-card-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="menu-card-content">
                      <h3 className="menu-card-title">{product.name}</h3>
                      <p className="menu-card-description">{product.description}</p>
                      <div className="menu-card-footer">
                        <span className="menu-card-price">
                          {product.sizes && product.sizes.length > 0 
                            ? `From ₱${product.sizes[0].price}`
                            : `₱${product.price}`
                          }
                        </span>
                        <button 
                          className={`menu-card-button ${addingProductId === product.id ? 'adding' : ''}`}
                          onClick={() => handleAddToCart(product)}
                          disabled={product.available === false || addingProductId === product.id}
                        >
                          {addingProductId === product.id ? (
                            <>
                              {addPhase === 'adding' ? (
                                <>
                                  Adding...
                                  <span className="spinner"></span>
                                </>
                              ) : addPhase === 'added' ? (
                                'Added ✓'
                              ) : (
                                'Add to Cart'
                              )}
                            </>
                          ) : product.available === false ? 'Not Available' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pagination-controls">
                  <button 
                    className="pagination-btn"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    ← Previous
                  </button>
                  <div className="pagination-info">
                    Page {currentPage} of {totalPages}
                  </div>
                  <button 
                    className="pagination-btn"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}

          {/* Size Selection Modal */}
          {selectedProduct && selectedProduct.sizes && (
            <div className="size-modal-overlay">
              <div className="size-modal-card">
                <h3>Select Size for {selectedProduct.name}</h3>
                <div className="size-options">
                  {selectedProduct.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="size-option-btn"
                      onClick={() => handleSizeSelect(size)}
                    >
                      <span className="size-label">{size.label}</span>
                      <span className="size-price">₱{size.price}</span>
                    </button>
                  ))}
                </div>
                <button 
                  className="size-cancel-btn"
                  onClick={() => setSelectedProduct(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Toast Notification */}
{showToast && (
            <div key="toast-unique" className="toast-notification">
              <span className="toast-message">{toastMessage}</span>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Menu
