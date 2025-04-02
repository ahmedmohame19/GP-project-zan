import React, { useState } from 'react';
import "./Navbar.scss";
import cart from "../../Assets/Assets/icons/Icon.png";
import logo from "../../Assets/Assets/Logo/white.svg";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCloseCircle } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState({
        home: false,
        shop: false,
        contact: false,
        services: false,
        joinUs: false
    });
    const [moblienav, setmoblienav] = useState(false)

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const Togglemobile = () => {
        setmoblienav(!moblienav)
    };

    const menuVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: '100%', opacity: 1 },
        exit: { height: 0, opacity: 0 }
    };
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">

                <div className="mainnav max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">

                    <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                    </Link>

                    <button
                        type="button"
                        className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown"
                        onClick={Togglemobile}

                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="w-full md:block md:w-auto desktop-nav">
                        <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:mt-0 md:text-sm md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    <Link to={"/"}>
                                        Home
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    <Link to={"/Shop"}>
                                        Shop
                                    </Link>
                                </button>
                            </li>

                            {/* Services Dropdown */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    onClick={() => handleDropdownToggle('Services')}
                                >
                                    Services <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                {openDropdown.Services && (
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
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    <Link to={'contactus'}>
                                        contact
                                    </Link>
                                </button>
                            </li>
                            {/* Join us Dropdown */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
                    <div className="cart">
                        <img src={cart} alt="cart" />
                    </div>
                </div>

            </nav>
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
                        <motion.div exit={{ opacity: 0 }} className="close" onClick={Togglemobile} >
                            <IoCloseCircle onClick={Togglemobile} />
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
