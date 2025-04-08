import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CheckoutPopup.scss';

const initialCartItems = [
    {
        id: 1,
        name: 'Tufted Latest Sofa',
        price: 80.00,
        size: 'S',
        image: '/path-to-sofa-image.jpg'
    },
    {
        id: 2,
        name: 'Rusary Chair',
        price: 80.00,
        size: 'Regular',
        image: '/path-to-chair-image.jpg'
    },
    {
        id: 3,
        name: 'Beech Wood Arm Chair',
        price: 40.00,
        size: 'M',
        image: '/path-to-arm-chair-image.jpg'
    }
];

const CheckoutPopup = ({ isOpen, onClose }) => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [selectedColor, setSelectedColor] = useState('red');

    // Calculate subtotal
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    // Remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Color selection
    const colors = ['red', 'blue', 'orange'];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="checkout-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="checkout-popup"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="checkout-header">
                            <h2>You have {cartItems.length} items in your cart</h2>
                        </div>

                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p>Size: {item.size}</p>
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>
                                    <button
                                        className="remove-item"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="color-selection">
                            <h3>Color</h3>
                            <div className="color-options">
                                {colors.map((color) => (
                                    <motion.div
                                        key={color}
                                        className={`color-option ${color} ${selectedColor === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="size-selection">
                            <h3>Size</h3>
                            <div className="size-options">
                                {['S', 'M', 'L'].map((size) => (
                                    <button
                                        key={size}
                                        className="size-option"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="checkout-summary">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <button className="view-cart-btn">View Cart</button>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CheckoutPopup;


{/* <CheckoutPopup 
isOpen={isCheckoutOpen} 
onClose={closeCheckout} 
/> */}