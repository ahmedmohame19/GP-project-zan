import React, { useState } from 'react';
import "./Navbar.scss";
import cart from "../../Assets/Assets/icons/Icon.png";

import logo from "../../Assets/Assets/Logo/white.svg";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCloseCircle } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import redSofaImage from '../../Assets/Assets/Shop/popular prod/Images-1.png';
export default function Navbar() {

    const [openDropdown, setOpenDropdown] = useState({
        home: false,
        shop: false,
        contact: false,
        services: false,
        joinUs: false
    });

    const [moblienav, setmoblienav] = useState(false);

    const [openCart, setOpenCart] = useState(false);

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const toggleMobile = () => {
        setmoblienav(!moblienav);
    };

    const toggleCart = () => {
        setOpenCart(!openCart);
    };

    const menuVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: '100%', opacity: 1 },
        exit: { height: 0, opacity: 0 }
    };

    const cartPopupVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    // Sample cart items for demonstration
    const cartItems = [
        {
            id: 1,
            name: 'Tufted Latest Sofa',
            price: 680.00,
            size: 'S',
            image: '../../Assets/Assets/products/sofa1.png'
        },
        {
            id: 2,
            name: 'Rotary Chair',
            price: 580.00,
            size: 'Regular',
            image: '../../Assets/Assets/products/chair1.png'
        },
        {
            id: 3,
            name: 'Bench wood Arm Chair',
            price: 840.00,
            size: 'M',
            image: '../../Assets/Assets/products/chair2.png'
        }
    ];

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="mainnav max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                    <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Zan Logo" />
                    </Link>

                    <button
                        type="button"
                        className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown"
                        onClick={toggleMobile}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="w-full md:block md:w-auto desktop-nav">
                        <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:text-sm md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
                            <li>
                                <button className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <Link to={"/"}>Home</Link>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <Link to={"/Shop"}>Shop</Link>
                                </button>
                            </li>

                            {/* Services Dropdown */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    onClick={() => handleDropdownToggle('services')}
                                >
                                    Services <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                {openDropdown.services && (
                                    <div className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Services Item 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Services Item 2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            {/* Contact Dropdown */}
                            <li>
                                <button className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <Link to={'contactus'}>Contact</Link>
                                </button>
                            </li>
                            {/* Join us Dropdown */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    onClick={() => handleDropdownToggle('joinUs')}
                                >
                                    Join us <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                {openDropdown.joinUs && (
                                    <div className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Join us Item 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Join us Item 2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                    <div className="nav-right-items">
                        <div className="cart cursor-pointer relative" onClick={toggleCart}>
                            <img src={cart} alt="cart" />
                            <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                        </div>
                        <div className="login-button rounded-md">
                            <Link to="/Auth/Login" className="w-28 text-center  text-white py-2 px-4 rounded-md transition">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cart Popup */}
                <AnimatePresence>
                    {openCart && (
                        <motion.div
                            className="cart-popup absolute right-4 top-16 w-80 bg-white rounded-lg shadow-lg z-50"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={cartPopupVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-4 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800">Your Cart</h3>
                                    <span className="text-sm text-gray-600">You have 3 items in your cart</span>
                                </div>
                            </div>
                            <div className="max-h-80 overflow-y-auto">
                                {cartItems.map(item => (
                                    <div key={item.id} className="p-4 border-b border-gray-100 flex items-center">
                                        <div className="w-16 h-16 bg-gray-100 rounded-md mr-3 flex items-center justify-center">
                                            <img src={redSofaImage} alt={item.name} className="max-w-full max-h-full" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                                            <div className="flex justify-between items-center mt-1">
                                                <div>
                                                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                                                    <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                                                </div>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex justify-between mb-3">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">$2,100.00</span>
                                </div>
                                <Link to={"/cart"}>
                                    <button onClick={() => toggleCart()} className="w-full bg-gray-950 text-white py-2 rounded-md hover:bg-gray-700 transition">
                                        View Cart
                                    </button>
                                </Link>
                                <Link to={""}>
                                    <button onClick={() => toggleCart()} className="w-full bg-gray-950 text-white py-2 rounded-md mt-2 hover:bg-gray-700 transition">
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {moblienav && <motion.div
                    className="nav2 transition"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <div className="mobilemenue">
                        <motion.div exit={{ opacity: 0 }} className="close" onClick={toggleMobile} >
                            <IoCloseCircle onClick={toggleMobile} />
                        </motion.div>

                        <motion.div exit={{ opacity: 0 }} className="head my-4">
                            <button>
                                Home
                                <MdKeyboardArrowDown />
                            </button>
                        </motion.div>
                        <motion.div exit={{ opacity: 0 }} className="head my-4">
                            <button>
                                Shop
                                <MdKeyboardArrowDown />
                            </button>
                        </motion.div>

                        <motion.div exit={{ opacity: 0 }} className="head my-4">
                            <button>
                                Services
                                <MdKeyboardArrowDown />
                            </button>
                        </motion.div>

                        <motion.div exit={{ opacity: 0 }} className="head my-4">
                            <button>
                                Contact
                                <MdKeyboardArrowDown />
                            </button>
                        </motion.div>

                        <motion.div exit={{ opacity: 0 }} className="head my-4">
                            <button>
                                Join us
                                <MdKeyboardArrowDown />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
                }
            </AnimatePresence>
        </>
    );
}