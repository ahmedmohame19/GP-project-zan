export const handleAddToCartt = (productId, productName, productPrice, quantity) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'addToCart',
    ecommerce: {
      items: [{
        id: productId,
        name: productName,
        price: productPrice,
        quantity: quantity
      }]
    }
  })
}

// ///////////////////////////////////////////////

export const handleViewCart = (cartItems) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'viewCart',
    ecommerce: {
      items: cartItems
    }
  })
}

export const handleCheckout = (cartItems) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'beginCheckout',
    ecommerce: {
      items: cartItems
    }
  })
}

export const handleBookOrder = (cartItems) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'PlaceOrder',
    ecommerce: {
      items: cartItems
    }
  })
}

// ///////////////////////////////////
export const handleAddToFavorites = (favoriteItems) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'addToFavorites',
    ecommerce: {
      items: favoriteItems
    }
  })
}
