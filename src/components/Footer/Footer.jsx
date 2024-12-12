import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";
import logo from "../../Assets/Assets/Logo/dark.svg"
export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="footer-container">

                <div className="footer-logo">
                    <h1>
                        <img src={logo} alt="logo" />
                    </h1>
                    <p>Make your home comfortable with high quality and durable furniture.</p>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Shop</li>
                            <li>Catalogue</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Product</h3>
                        <ul>
                            <li>Hot Product</li>
                            <li>Chairs</li>
                            <li>Tables</li>
                            <li>Discount</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Support</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <p>©ZAN. All rights reserved</p>
            </motion.div>
        </motion.footer>
    );
}
