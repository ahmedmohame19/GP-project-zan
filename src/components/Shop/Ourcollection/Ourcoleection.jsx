import React, { useState, useEffect } from 'react';
import './Ourcollection.scss';

const OurCollections = ({ products: initialProducts }) => {
    const [products, setProducts] = useState(initialProducts || []);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [sortBy, setSortBy] = useState('Relevancy');
    const [categories, setCategories] = useState(['All Categories']);

    useEffect(() => {

        if (initialProducts && initialProducts.length > 0) {
            const uniqueCategories = ['All Categories', ...new Set(initialProducts.map(product => product.category))];
            setCategories(uniqueCategories);
            setProducts(initialProducts);
        }
    }, [initialProducts]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'All Categories') {
            setProducts(initialProducts);
        } else {
            const filtered = initialProducts.filter(product => product.category === category);
            setProducts(filtered);
        }
    };

    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
        let sortedProducts = [...products];

        switch (sortOption) {
            case 'Price: Low to High':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'Price: High to Low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'Rating':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default: // Relevancy is default
                sortedProducts = [...initialProducts];
                if (selectedCategory !== 'All Categories') {
                    sortedProducts = sortedProducts.filter(product => product.category === selectedCategory);
                }
                break;
        }

        setProducts(sortedProducts);
    };

    return (
        <div className="our-collections">
            <h1 className="text-center text-3xl font-bold mb-6">OUR COLLECTIONS</h1>

            <div className="filters-and-sort flex justify-between mb-6">
                <div className="filters">
                    <p className="text-sm font-medium mb-2">Filters</p>
                    <div className="relative">
                        <select
                            className="dropdown-select"
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className="dropdown-arrow"></div>
                    </div>
                </div>

                <div className="results-count">
                    <p>Showing {products.length} Results</p>
                </div>

                <div className="sort-by">
                    <p className="text-sm font-medium mb-2">Sort By</p>
                    <div className="relative">
                        <select
                            className="dropdown-select"
                            value={sortBy}
                            onChange={(e) => handleSortChange(e.target.value)}
                        >
                            <option value="Relevancy">Relevancy</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="Rating">Rating</option>
                        </select>
                        <div className="dropdown-arrow"></div>
                    </div>
                </div>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                        </div>
                        <div className="product-info">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">${product.price}</p>
                            </div>
                            <div className="product-rating">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>★</span>
                                    ))}
                                </div>
                                <span className="rating-count">({product.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="view-all-container">
                <button className="view-all-btn">View all</button>
            </div>
        </div>
    );
};

export default OurCollections;