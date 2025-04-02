// ProductGrid.jsx
import React from 'react';
import './GridProducts.scss';
import { Link } from 'react-router-dom';

const ProductGrid = ({ categories }) => {

    const ProductCard = ({ product }) => (
        <Link to={"/productdetails/12"}>
            <div className="product-card">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-pricing">
                        <div className="price-info">
                            {product.originalPrice && (
                                <span className="original-price">{product.originalPrice}</span>
                            )}
                            <span className="current-price">{product.currentPrice} EGP</span>
                        </div>
                        <button className="add-to-cart">
                            <i className="cart-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
    return (
        <div className="product-sections-container">
            {categories.map((category, index) => (
                <section key={index} className="product-section">
                    <header className="section-header">
                        <h2>{category.title}</h2>
                        <a href={category.link} className="view-all">
                            View All <span className="arrow">❯❯</span>
                        </a>
                    </header>

                    <div className="products-grid">
                        {category.products.map((product, productIndex) => (
                            <ProductCard key={productIndex} product={product} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};
export default ProductGrid;