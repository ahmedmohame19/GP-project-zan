import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import "./Category.scss"
import prod1 from "../../Assets/Assets/prouductImages/25295 1.png"
import prod2 from "../../Assets/Assets/prouductImages/37545 1.png"
import prod3 from "../../Assets/Assets/prouductImages/Rectangle 22485.png"
import prod4 from "../../Assets/Assets/prouductImages/Wallpaper 1.png"
import prod5 from "../../Assets/Assets/prouductImages/close-up-arrangement-modern-vases_23-2149646531 1.png"
import prod6 from "../../Assets/Assets/prouductImages/div.elementor-cta__bg.png"
import prod7 from "../../Assets/Assets/prouductImages/high-angle-interior-design-with-eucalyptus-plant_23-2149420712 1.png"
import prod8 from "../../Assets/Assets/prouductImages/unsplash_3LTht2nxd34.png"

export default function Category() {
    // Variants for animation
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
            <div className="main-category">
                <h1>Category</h1>
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button type="button" className="text-gray-900 bg-gray-900 hover:bg-gray-900 hover:text-white active:bg-gray-900 text-white border border-gray-900 focus:ring-4 focus:outline-none focus:ring-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-all duration-300">All categories</button>
                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-900 hover:text-white border border-gray-900 focus:ring-4 focus:outline-none focus:ring-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-all duration-300">Chair</button>
                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-900 hover:text-white border border-gray-900 focus:ring-4 focus:outline-none focus:ring-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-all duration-300">Table</button>
                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-900 hover:text-white border border-gray-900 focus:ring-4 focus:outline-none focus:ring-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-all duration-300">Lamp and Accessories</button>
                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-900 hover:text-white border border-gray-900 focus:ring-4 focus:outline-none focus:ring-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-all duration-300">Kitchens</button>
                </div>

                <div className="main-products">
                    <div className="products-contanier gap-4">

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod1} alt="product 1" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod2} alt="product 2" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod3} alt="product 3" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod4} alt="product 4" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod5} alt="product 5" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod6} alt="product 6" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod7} alt="product 7" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView={"visible"}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='product'>
                                <div className="product-img">
                                    <img className="h-auto max-w-full rounded-lg" src={prod8} alt="product 8" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Easy chair</h3>
                                <h4>150 Egp</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
