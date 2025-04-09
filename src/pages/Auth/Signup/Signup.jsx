import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import blackChairImage from '../../../Assets/header/landingcover.png';

export default function SignUp() {
    // Page container animation
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    // Form container animation
    const formVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 10
            }
        }
    };

    // Individual input animations
    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    // Button hover and tap effects
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-80 bg-blend-overlay"
            style={{ backgroundImage: `url(${blackChairImage})`, backgroundSize: 'cover' }}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <motion.div
                className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={formVariants}
            >
                <div className="text-center mb-8">
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <h1 className="text-5xl font-bold">Z<span className="text-orange-500">Λ</span>N</h1>
                    </motion.div>
                    <motion.h2
                        className="text-xl mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Sign Up
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </motion.div>
                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </motion.div>

                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </motion.div>

                    <motion.button
                        className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-200"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Login
                    </motion.button>
                </div>

                <motion.div
                    className="mt-6 text-center text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to={"/Auth/Login"} className="text-orange-500 hover:text-orange-600 font-medium">Login</Link>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}