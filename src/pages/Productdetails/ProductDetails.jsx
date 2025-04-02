import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './ProductDetails.scss';

// Import images
import redSofaImage from '../../Assets/Assets/Shop/popular prod/Images-1.png';
import miniTableImage from '../../Assets/Assets/Shop/popular prod/Images-2.png';
import blackChairImage from '../../Assets/Assets/Shop/popular prod/Images-3.png';
import dualChairImage from '../../Assets/Assets/Shop/popular prod/Images-4.png';
import tuffetSofaImage from '../../Assets/Assets/Shop/popular prod/Images.png';

const ProductDetails = () => {
    // fake data
    const product = {
        name: "Natural wood and Linen Sofa Bed",
        category: "Sofa",
        dimensions: "120×160×195 cm · off white",
        rating: 5.0,
        reviews: 121,
        price: 80.00,
        originalPrice: 100.00,
        shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        inStock: true,

        colors: [
            { name: "White", code: "#ffffff" },
            { name: "Blue", code: "#4169e1" },
            { name: "Orange", code: "#ff8c00" },
            { name: "Black", code: "#000000" },
            { name: "Lime", code: "#bada55" },
            { name: "Yellow", code: "#ffd700" },
        ],

        sizes: ["S", "M", "L", "XL"],

        images: [
            redSofaImage,
            dualChairImage,
            blackChairImage,
            dualChairImage,
            tuffetSofaImage,
        ],

        fullDescription: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        ],

        additionalInfo: [
            { label: "Material", value: "Wood, Linen" },
            { label: "Weight", value: "45 kg" },
            { label: "Dimensions", value: "120×160×195 cm" },
            { label: "Color", value: "Off white, Blue, Orange, Black, Lime, Yellow" },
            { label: "Warranty", value: "3 years" }
        ],

        customerReviews: [
            {
                name: "Mark Williams",
                avatar: tuffetSofaImage,
                rating: 5,
                date: "June 05, 2023",
                title: "Excellent Product, I Love It",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            },
            {
                name: "Alexa Johnson",
                avatar: tuffetSofaImage,
                rating: 5,
                date: "June 05, 2023",
                title: "My Daughter is very much happy with this products",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
        ],

        relatedProducts: [
            {
                name: "Wooden Armchair",
                price: 49.99,
                image: redSofaImage
            },
            {
                name: "Coffee Table",
                price: 35.50,
                image: dualChairImage
            },
            {
                name: "Floor Lamp",
                price: 29.99,
                image: redSofaImage
            },
            {
                name: "Velvet Sofa",
                price: 120.00,
                image: dualChairImage
            }
        ]
    };
    // fake data

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('reviews');

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const addToCart = () => {
        console.log('Added to cart:', {
            product,
            color: selectedColor,
            size: selectedSize,
            quantity
        });
    };

    // Form validation schema
    const reviewValidationSchema = Yup.object({
        rating: Yup.number()
            .min(1, 'Please select a rating')
            .required('Rating is required'),
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        reviewText: Yup.string()
            .min(10, 'Review must be at least 10 characters')
            .required('Review text is required')
    });

    // Initial form values
    const initialReviewValues = {
        rating: 0,
        name: '',
        email: '',
        reviewText: ''
    };

    // Handle form submission
    const handleReviewSubmit = (values, { resetForm }) => {
        // Create new review object
        const newReview = {
            name: values.name,
            rating: values.rating,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
            title: values.reviewText.split('\n')[0] || "Review",
            text: values.reviewText,
            avatar: null
        };

        console.log('New review submitted:', newReview);
        
        // Reset form
        resetForm();
        
        // Here you would typically make an API call to save the review
        // and then update your product.customerReviews array with the new review
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="product-detail">
            <div className="breadcrumb">
                <span>Home</span> &gt; <span>Shop</span> &gt; <span>{product.category}</span>
            </div>

            <div className="product-content">
                <div className="product-gallery">
                    <motion.div
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={fadeIn.transition}
                        className="main-gallery"
                    >
                        <Swiper
                            spaceBetween={10}
                            navigation={false}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Navigation, Thumbs, Pagination]}
                            pagination={{ clickable: true }}
                            className="main-swiper"
                        >
                            {product.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`${product.name} - View ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[Navigation, Thumbs]}
                        className="thumbs-swiper"
                    >
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="product-info">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="product-title"
                    >
                        {product.name}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="product-dimensions"
                    >
                        {product.dimensions}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="product-rating"
                    >
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>★</span>
                        ))}
                        <span className="rating-text">{product.rating} ({product.reviews} Reviews)</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        className="product-price"
                    >
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="product-description"
                    >
                        {product.shortDescription}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.1 }}
                        className="product-colors"
                    >
                        <h3>Color</h3>
                        <div className="color-options">
                            {product.colors.map((color) => (
                                <button
                                    key={color.name}
                                    className={`color-option ${selectedColor.name === color.name ? 'selected' : ''}`}
                                    style={{ backgroundColor: color.code }}
                                    onClick={() => handleColorSelect(color)}
                                    aria-label={`Select ${color.name} color`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="product-sizes"
                    >
                        <h3>Size</h3>
                        <div className="size-options">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.3 }}
                        className="product-actions"
                    >
                        <div className="quantity-selector">
                            <button onClick={decrementQuantity} className="quantity-btn">−</button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={incrementQuantity} className="quantity-btn">+</button>
                        </div>

                        <button onClick={addToCart} className="add-to-cart-btn">
                            Add to Cart
                        </button>

                        <button className="wishlist-btn">
                            <span className="heart-icon">♡</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="product-tabs">
                <div className="tab-headers">
                    <button
                        className={`tab-btn ${activeTab === 'descriptions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('descriptions')}
                    >
                        Descriptions
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'additionalInformation' ? 'active' : ''}`}
                        onClick={() => setActiveTab('additionalInformation')}
                    >
                        Additional Information
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'descriptions' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="descriptions-content"
                        >
                            {product.fullDescription.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'additionalInformation' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="additional-info-content"
                        >
                            <table>
                                <tbody>
                                    {product.additionalInfo.map((info, index) => (
                                        <tr key={index}>
                                            <td>{info.label}</td>
                                            <td>{info.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {activeTab === 'reviews' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="reviews-content"
                        >
                            <h3 className="customer-reviews-title">Customer Reviews</h3>

                            {/* Reviews List */}
                            {product.customerReviews.map((review, index) => (
                                <div key={index} className="review-item">
                                    <div className="review-avatar">
                                        {review.avatar ? (
                                            <img src={review.avatar} alt={`${review.name}'s avatar`} />
                                        ) : (
                                            <div className="avatar-placeholder">{review.name.charAt(0)}</div>
                                        )}
                                    </div>
                                    <div className="review-content">
                                        <div className="review-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < review.rating ? "star filled" : "star"}>★</span>
                                            ))}
                                        </div>
                                        <h4 className="review-title">{review.title}</h4>
                                        <p className="review-text">{review.text}</p>
                                        <div className="review-meta">
                                            <span className="review-author">Posted by: <strong>{review.name}</strong></span>
                                            <span className="review-date">Posted on: {review.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="add-review-section">
                                <h3 className="add-review-title">Add your Review</h3>
                                
                                {/* Formik Form */}
                                <Formik
                                    initialValues={initialReviewValues}
                                    validationSchema={reviewValidationSchema}
                                    onSubmit={handleReviewSubmit}
                                >
                                    {({ values, setFieldValue, errors, touched }) => (
                                        <Form className="review-form">
                                            <div className="form-group rating-group">
                                                <label>Your Rating</label>
                                                <div className="star-rating">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <div
                                                            key={star}
                                                            className={`rating-star ${star <= values.rating ? 'selected' : ''}`}
                                                            onClick={() => setFieldValue('rating', star)}
                                                        >
                                                            ★
                                                        </div>
                                                    ))}
                                                </div>
                                                {errors.rating && touched.rating && (
                                                    <div className="error-message">{errors.rating}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <Field
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter Your Name"
                                                />
                                                <ErrorMessage name="name" component="div" className="error-message" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <Field
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter Your Email"
                                                />
                                                <ErrorMessage name="email" component="div" className="error-message" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="reviewText">Your Review</label>
                                                <Field
                                                    as="textarea"
                                                    id="reviewText"
                                                    name="reviewText"
                                                    placeholder="Enter Your Review"
                                                    rows="4"
                                                />
                                                <ErrorMessage name="reviewText" component="div" className="error-message" />
                                            </div>

                                            <button type="submit" className="submit-review-btn">Submit</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="related-products">
                <h2>Related Products</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                    modules={[Navigation, Pagination]}
                    className="related-swiper"
                >
                    {product.relatedProducts.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="related-product-card">
                                <div className="related-product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h3 className="related-product-title">{item.name}</h3>
                                <div className="related-product-price">${item.price.toFixed(2)}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductDetails;