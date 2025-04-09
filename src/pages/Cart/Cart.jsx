import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Cart.scss';
import blackChairImage from '../../Assets/Assets/Shop/popular prod/Images-3.png';
import dualChairImage from '../../Assets/Assets/Shop/popular prod/Images-4.png';
import tuffetSofaImage from '../../Assets/Assets/Shop/popular prod/Images.png';
export default function Cart() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Tufted Latest Sofa',
            size: 'S',
            price: 80.00,
            quantity: 1,
            image: blackChairImage
        },
        {
            id: 2,
            name: 'Rotary Chair',
            size: 'Regular',
            price: 80.00,
            quantity: 1,
            image: dualChairImage
        },
        {
            id: 3,
            name: 'Beech wood Arm Chair',
            size: 'M',
            price: 40.00,
            quantity: 1,
            image: tuffetSofaImage
        }
    ]);

    const [discountCode, setDiscountCode] = useState('ZAN50');
    const deliveryCharge = 5.00;

    const calculateSubtotal = () => {
        return products.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    };

    const calculateGrandTotal = () => {
        return calculateSubtotal() + deliveryCharge;
    };

    const handleQuantityChange = (id, change) => {
        setProducts(
            products.map(product => {
                if (product.id === id) {
                    const newQuantity = Math.max(1, product.quantity + change);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            })
        );
    };

    const handleRemoveItem = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleDiscountSubmit = () => {
        console.log(`Applied discount code: ${discountCode}`);
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h1>Checkout</h1>

                <div className="checkout-layout">
                    <div className="checkout-left">
                        <div className="product-header-row">
                            <div className="column product-column">Products</div>
                            <div className="column price-column">Price</div>
                            <div className="column quantity-column">Quantity</div>
                            <div className="column subtotal-column">Subtotal</div>
                        </div>

                        {products.map(product => (
                            <div className="product-row" key={product.id}>
                                <div className="column product-column">
                                    <div className="product-info">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <div className="product-details">
                                            <h3>{product.name}</h3>
                                            <p>Size: {product.size}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="column price-column">${product.price.toFixed(2)}</div>

                                <div className="column quantity-column">
                                    <div className="quantity-control">
                                        <button
                                            onClick={() => handleQuantityChange(product.id, -1)}
                                            className="quantity-btn minus-btn"
                                        >
                                            −
                                        </button>
                                        <span className="quantity-value">{product.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(product.id, 1)}
                                            className="quantity-btn plus-btn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="column subtotal-column">
                                    <span className="product-subtotal">
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => handleRemoveItem(product.id)}
                                        className="remove-btn"
                                        aria-label="Remove item"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-right">
                        <div className="order-summary">
                            <div className="summary-item subtotal-row">
                                <span className="summary-label">Subtotal</span>
                                <span className="summary-value">${calculateSubtotal().toFixed(2)}</span>
                            </div>

                            <div className="discount-row">
                                <div className="discount-field-label">Enter Discount Code</div>
                                <div className="discount-field">
                                    <input
                                        type="text"
                                        value={discountCode}
                                        onChange={(e) => setDiscountCode(e.target.value)}
                                    />
                                    <button
                                        onClick={handleDiscountSubmit}
                                        className="apply-btn"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="summary-item delivery-row">
                                <span className="summary-label">Delivery Charge</span>
                                <span className="summary-value">${deliveryCharge.toFixed(2)}</span>
                            </div>

                            <div className="summary-item grand-total-row">
                                <span className="summary-label">Grand Total</span>
                                <span className="summary-value">${calculateGrandTotal().toFixed(2)}</span>
                            </div>

                            <motion.button
                                className="checkout-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Proceed to Checkout
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="request-container">
                <div className="request-content">
                    <h2>Send your request for furniture to us!</h2>
                    <p>Let's send it now for requests on furniture that need fresh inspiration!</p>

                    <div className="request-form">
                        <input type="text" placeholder="Enter name" />
                        <input type="text" placeholder="Enter your code" />

                        <motion.button
                            className="send-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send now
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};