import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CategoryDetails.scss';
import redSofaImage from '../../Assets/Assets/Shop/popular prod/Images-1.png';
import miniTableImage from '../../Assets/Assets/Shop/popular prod/Images-2.png';
import blackChairImage from '../../Assets/Assets/Shop/popular prod/Images-3.png';
import dualChairImage from '../../Assets/Assets/Shop/popular prod/Images-4.png';
import tuffetSofaImage from '../../Assets/Assets/Shop/popular prod/Images.png';
import { Link } from 'react-router-dom';

const CategoryDetails = () => {
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [selectedCategories, setSelectedCategories] = useState(['office Chairs']);
    const [visibleProducts, setVisibleProducts] = useState(0);
    const [totalProducts, setTotalProducts] = useState(72);
    const [openSections, setOpenSections] = useState({
        categories: true,
        price: true,
        color: true,
        material: true
    });
    const [hoveredProduct, setHoveredProduct] = useState(null);

    // Mock data for demonstration
    useEffect(() => {
        const mockProducts = [
            {
                id: 1,
                name: 'Rotary Table',
                price: 80.00,
                originalPrice: 100.00,
                rating: 4.5,
                reviews: 5325,
                image: redSofaImage,
                category: 'office Chairs',
                color: 'Blue',
                material: 'Pvc'
            },
            {
                id: 2,
                name: 'Yellow Sofa',
                price: 50.00,
                originalPrice: 58.00,
                rating: 4.5,
                reviews: 5325,
                image: blackChairImage,
                category: 'Sofas',
                color: 'Yellow',
                material: 'Fabric'
            },
            {
                id: 3,
                name: 'Rotary Chair',
                price: 60.00,
                originalPrice: 76.00,
                rating: 4.5,
                reviews: 5325,
                image: tuffetSofaImage,
                category: 'office Chairs',
                color: 'Gray',
                material: 'Fabric'
            },
            {
                id: 4,
                name: 'Chair',
                price: 38.00,
                originalPrice: 40.00,
                rating: 4.5,
                reviews: 5325,
                image: blackChairImage,
                category: 'Chair',
                color: 'Black',
                material: 'Pvc'
            },
            {
                id: 5,
                name: 'Red Fabric Sofa',
                price: 40.00,
                originalPrice: 50.00,
                rating: 4.5,
                reviews: 5325,
                image: miniTableImage,
                category: 'Sofas',
                color: 'Red',
                material: 'Fabric'
            },
            {
                id: 6,
                name: 'Tufted Latest Sofa',
                price: 35.00,
                originalPrice: 40.00,
                rating: 4.5,
                reviews: 5325,
                image: dualChairImage,
                category: 'Sofas',
                color: 'Gray',
                material: 'Fabric'
            },
        ];

        setProducts(mockProducts);
        setVisibleProducts(16);
    }, []);

    // Categories data
    const categories = [
        { id: 1, name: 'office Chairs', count: 10, checked: true },
        { id: 2, name: 'Top Selling', count: 15, checked: false },
        { id: 3, name: 'Outdoor Sofas', count: 8, checked: false },
        { id: 4, name: 'Garden Sets', count: 12, checked: false },
        { id: 5, name: 'Steel Outdoor', count: 7, checked: false },
        { id: 6, name: 'Side Chairs', count: 9, checked: false },
        { id: 7, name: 'Sofas', count: 14, checked: false },
        { id: 8, name: 'Bean Bags', count: 6, checked: false },
        { id: 9, name: 'Chair', count: 11, checked: false }
    ];

    // Colors data
    const colors = [
        { name: 'Red', count: 10, code: '#E74C3C' },
        { name: 'Blue', count: 14, code: '#3498DB' },
        { name: 'Orange', count: 8, code: '#F39C12' },
        { name: 'Black', count: 9, code: '#000000' },
        { name: 'Green', count: 4, code: '#2ECC71' },
        { name: 'Yellow', count: 2, code: '#F1C40F' }
    ];

    // Materials data
    const materials = [
        { name: 'Rattan', count: 6, checked: false },
        { name: 'Metal', count: 20, checked: false },
        { name: 'Pvc', count: 7, checked: true },
        { name: 'Iron', count: 16, checked: false },
        { name: 'Plastic Rattan', count: 10, checked: false },
        { name: 'Beech Wood', count: 2, checked: false }
    ];

    // Toggle section open/close
    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Toggle category selection
    const toggleCategory = (categoryName) => {
        setSelectedCategories(prev =>
            prev.includes(categoryName)
                ? prev.filter(cat => cat !== categoryName)
                : [...prev, categoryName]
        );
    };

    const handlePriceChange = (e) => {
        setPriceRange([0, parseInt(e.target.value)]);
    };

    // Add to cart handler
    const addToCart = (product) => {
        console.log(`Added to cart: ${product.name}`);
    };

    return (
        <div className="zan-product-listing">
            <div className="zan-product-sidebar">
                {/* Product Categories Section */}
                <div className="zan-product-categories-container">
                    <div
                        className="zan-product-categories-header"
                        onClick={() => toggleSection('categories')}
                    >
                        <h2>Product Categories</h2>
                        <span className="zan-arrow">▼</span>
                    </div>

                    {openSections.categories && (
                        <ul className="zan-categories-list">
                            {categories.map(category => (
                                <li key={category.id} className="zan-category-item">
                                    <label className="zan-checkbox-container">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category.name)}
                                            onChange={() => toggleCategory(category.name)}
                                        />
                                        <span className="zan-checkmark"></span>
                                        <span className="zan-category-name">{category.name}</span>
                                    </label>
                                    <span className="zan-category-count">({category.count})</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Price Filter Section */}
                <div className="zan-filter-section">
                    <div
                        className="zan-filter-header"
                        onClick={() => toggleSection('price')}
                    >
                        <h3>Filter by Price</h3>
                        <span className="zan-arrow">▼</span>
                    </div>

                    {openSections.price && (
                        <div className="zan-price-range">
                            <span className="zan-price-label">Price: $0 - ${priceRange[1]}</span>
                            <div className="zan-slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="2000"
                                    value={priceRange[1]}
                                    onChange={handlePriceChange}
                                    className="zan-range-slider"
                                />
                                <div className="zan-range-track">
                                    <div
                                        className="zan-range-track-fill"
                                        style={{ width: `${(priceRange[1] / 2000) * 100}%` }}
                                    ></div>
                                    <div
                                        className="zan-range-handle"
                                        style={{ left: `${(priceRange[1] / 2000) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="zan-filter-section">
                    <div
                        className="zan-filter-header"
                        onClick={() => toggleSection('color')}
                    >
                        <h3>Filter by Color</h3>
                        <span className="zan-arrow">▼</span>
                    </div>

                    {openSections.color && (
                        <ul className="zan-color-list">
                            {colors.map(color => (
                                <li key={color.name} className="zan-color-item">
                                    <div className="zan-color-box-container">
                                        <span
                                            className="zan-color-box"
                                            style={{ backgroundColor: color.code }}
                                        ></span>
                                        <span className="zan-color-name">{color.name}</span>
                                    </div>
                                    <span className="zan-color-count">({color.count})</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Material Filter Section */}
                <div className="zan-filter-section">
                    <div
                        className="zan-filter-header"
                        onClick={() => toggleSection('material')}
                    >
                        <h3>Filter by Material</h3>
                        <span className="zan-arrow">▼</span>
                    </div>

                    {openSections.material && (
                        <ul className="zan-material-list">
                            {materials.map(material => (
                                <li key={material.name} className="zan-material-item">
                                    <label className="zan-checkbox-container">
                                        <input
                                            type="checkbox"
                                            checked={material.checked}
                                            onChange={() => {/* Add material filter logic */ }}
                                        />
                                        <span className="zan-checkmark"></span>
                                        <span className="zan-material-name">{material.name}</span>
                                    </label>
                                    <span className="zan-material-count">({material.count})</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="zan-product-grid-container">
                <div className="zan-product-grid-header">
                    <div className="zan-results-info">
                        Showing 1-{visibleProducts} of {totalProducts} results
                    </div>
                </div>

                <div className="zan-product-grid">
                    {products.map((product) => (
                        <Link to={"/productdetails/12"}>
                            <div
                                key={product.id}
                                className="zan-product-card"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="zan-product-image">
                                    <img src={product.image} alt={product.name} />
                                    {hoveredProduct === product.id && (
                                        <motion.button
                                            className="zan-add-to-cart-btn"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to Cart
                                        </motion.button>
                                    )}
                                </div>

                                <div className="zan-product-info">
                                    <h3 className="zan-product-name">{product.name}</h3>
                                    <div className="zan-product-rating">
                                        <div className="zan-stars">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < Math.floor(product.rating) ? 'filled' : 'empty'}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="zan-review-count">({product.reviews})</span>
                                    </div>
                                    <div className="zan-product-price">
                                        <span className="zan-current-price">${product.price.toFixed(2)}</span>
                                        <span className="zan-original-price">${product.originalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default CategoryDetails;