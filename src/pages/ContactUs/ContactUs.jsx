import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactUs.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaPaperPlane, FaCheck, FaChair, FaCouch, FaBed } from 'react-icons/fa';
import { FaStore } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiTable } from "react-icons/bi";

const ContactUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const formVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.7
            }
        }
    };
    

    const furnitureVariants = {
        animate: {
            y: -600,
            opacity: [0, 0.25, 0],
            scale: [0.8, 1.1, 0.9],
            rotate: [0, 15, 30],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
            }
        }
    };

    // Form validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        subject: Yup.string()
            .min(5, 'Too Short!')
            .required('Subject is required'),
        message: Yup.string()
            .min(10, 'Message is too short')
            .required('Message is required'),
    });

    // Handle form submission
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            console.log('Form values:', values);
            setIsSubmitted(true);
            resetForm();
            setSubmitting(false);
        }, 1000);
    };

    const generateFurnitureIcons = (count) => {
        return Array.from({ length: count }).map((_, index) => {
            const icons = [FaChair, FaCouch, FaBed, BiTable];
            const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
            // Random size
            const size = Math.random() * 40 + 40;
            
            return (
                <motion.div
                    key={index}
                    className="furniture-icon"
                    style={{
                        width: size,
                        height: size,
                        left: `${Math.random() * 100}%`,
                        bottom: `-${size}px`,
                        animationDelay: `${Math.random() * 20}s`
                    }}
                    variants={furnitureVariants}
                    animate="animate"
                    initial={{ opacity: 0 }}
                >
                    <RandomIcon size={size} />
                </motion.div>
            );
        });
    };

    return (
        <div className="contact-us-container">
            <div className="background-elements">
                <div className="vertical-lines"></div>
                {generateFurnitureIcons(30)}
            </div>
            
            <motion.div
                className="contact-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="contact-header" variants={itemVariants}>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Get in <span className="highlight">Touch</span> With Us
                    </motion.h1>
                    <motion.div
                        className="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.p variants={itemVariants}>
                        Turn your concepts into stunning modern interior designs with us.
                        We're here to help with your interior needs.
                    </motion.p>
                </motion.div>

                <div className="contact-main">
                    <motion.div className="contact-info" variants={itemVariants}>
                        <motion.div
                            className="info-card"
                            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)" }}
                        >
                            <div className="icon">
                                <FaStore />
                            </div>
                            <h3>Our Showroom</h3>
                            <p>123 Interior Avenue, Design District, DD 45678</p>
                        </motion.div>

                        <motion.div
                            className="info-card"
                            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)" }}
                        >
                            <div className="icon">
                                <FaPhone />
                            </div>
                            <h3>Call Us</h3>
                            <p>+1 (555) 123-4567</p>
                        </motion.div>

                        <motion.div
                            className="info-card"
                            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)" }}
                        >
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <h3>Email Us</h3>
                            <p>contact@zanecommerce.com</p>
                        </motion.div>

                        <motion.div className="social-media">
                            <h3>Connect With Us</h3>
                            <div className="social-icons">
                                {[
                                    { name: 'facebook', icon: <FaFacebook /> },
                                    { name: 'twitter', icon: <FaTwitter /> },
                                    { name: 'instagram', icon: <FaInstagram /> },
                                    { name: 'linkedin', icon: <FaLinkedin /> }
                                ].map((platform, index) => (
                                    <motion.a
                                        key={platform.name}
                                        href={`#${platform.name}`}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + (index * 0.1) }}
                                    >
                                        {platform.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="contact-form"
                        variants={formVariants}
                    >
                        {isSubmitted ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="success-icon">
                                    <FaCheck />
                                </div>
                                <h2>Message Sent!</h2>
                                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another Message
                                </motion.button>
                            </motion.div>
                        ) : (
                            <Formik
                                initialValues={{ name: '', email: '', subject: '', message: '' }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, touched, errors }) => (
                                    <Form>
                                        <motion.h2 variants={itemVariants}>Send us a Message</motion.h2>

                                        <motion.div
                                            className="form-group"
                                            variants={itemVariants}
                                        >
                                            <label htmlFor="name">Name</label>
                                            <Field
                                                type="text"
                                                name="name"
                                                placeholder="Your name"
                                                className={touched.name && errors.name ? "error" : ""}
                                            />
                                            <ErrorMessage name="name" component="div" className="error-message" />
                                        </motion.div>

                                        <motion.div
                                            className="form-group"
                                            variants={itemVariants}
                                        >
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Your email address"
                                                className={touched.email && errors.email ? "error" : ""}
                                            />
                                            <ErrorMessage name="email" component="div" className="error-message" />
                                        </motion.div>

                                        <motion.div
                                            className="form-group"
                                            variants={itemVariants}
                                        >
                                            <label htmlFor="subject">Subject</label>
                                            <Field
                                                type="text"
                                                name="subject"
                                                placeholder="What is this regarding?"
                                                className={touched.subject && errors.subject ? "error" : ""}
                                            />
                                            <ErrorMessage name="subject" component="div" className="error-message" />
                                        </motion.div>

                                        <motion.div
                                            className="form-group"
                                            variants={itemVariants}
                                        >
                                            <label htmlFor="message">Message</label>
                                            <Field
                                                as="textarea"
                                                name="message"
                                                placeholder="Your message..."
                                                className={touched.message && errors.message ? "error" : ""}
                                                rows="5"
                                            />
                                            <ErrorMessage name="message" component="div" className="error-message" />
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                                            whileTap={{ scale: 0.95 }}
                                            variants={itemVariants}
                                        >
                                            {isSubmitting ? (
                                                <div className="loading-spinner">
                                                    <div className="spinner"></div>
                                                    <span>Sending...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <FaPaperPlane />
                                                </>
                                            )}
                                        </motion.button>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;