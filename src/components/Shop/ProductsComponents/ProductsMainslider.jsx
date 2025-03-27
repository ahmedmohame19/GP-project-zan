// PopularProducts.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiShoppingBag } from 'react-icons/fi';

import './ProductsMainslider.scss';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

const ProductsMainslider = ({
    title = "Popular Products",
    viewAllText = "View All",
    products = [],
    showRating = true,
    showAddToCart = true,
    slidesPerView = 5,
    spaceBetween = 15
}) => {

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    // Star rating component
    const StarRating = ({ rating, reviewCount }) => {
        return (
            <div className="product-rating">
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
                    ))}
                </div>
                <span className="review-count">({reviewCount})</span>
            </div>
        );
    };

    // Discount tag component
    const DiscountTag = ({ discount }) => {
        if (!discount) return null;
        return (
            <div className="discount-tag">
                <span>{discount}%</span>
            </div>
        );
    };

    return (
        <div className="popular-products-section">
            <div className="section-header">
                <h2>{title}</h2>
                <div className="view-all">
                    <span>{viewAllText}</span>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="products-wrapper">
                <div className="swiper-button-prev">
                    <IoIosArrowBack />
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={spaceBetween}
                    slidesPerView={slidesPerView}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: slidesPerView,
                            spaceBetween: spaceBetween,
                        },
                    }}
                    className="products-swiper"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={product.id || index}>
                            <motion.div
                                className="product-card"
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="product-image-container">
                                    <DiscountTag discount={product.discount} />
                                    <img src={product.image} alt={product.name} className="product-image" />

                                    {showAddToCart && (
                                        <motion.button
                                            className="add-to-cart"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiShoppingBag />
                                        </motion.button>
                                    )}
                                </div>

                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>

                                    {showRating && (
                                        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                                    )}

                                    <div className="product-price">
                                        <span className="current-price">${product.price.toFixed(2)}</span>
                                        {product.oldPrice && (
                                            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-next">
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
};

export default ProductsMainslider;