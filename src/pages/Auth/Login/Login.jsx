import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../../Assets/header/landingcover.png';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Baseurl } from './../../../Api/Baseurl';
import { toast } from 'react-toastify';
import { ToastOptions } from './../../../helpers/ToastOptions';

const Login = () => {
    const apiPassword = "UIbcsk2ZJSNT3X5EZ6O";

    const UserLogin = async (values) => {
        try {
            const response = await axios.post(
                `${Baseurl}/login?api_password=${apiPassword}`,
                values
            );
            console.log("Login successful:", response.data);
            toast.success("Student deleted successful", ToastOptions("success"));
        } catch (error) {
            toast.error("Student deleted successful", ToastOptions("error"));
            console.error("Login failed:", error.response?.data || error.message);
        }
    };

    const Validation = Yup.object({
        email: Yup.string().email("Email is not valid").required("Email is required"),
        password: Yup.string().required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Validation,
        onSubmit: UserLogin
    });

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-80 bg-blend-overlay"
            style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}
            initial="initial"
            animate="in"
            exit="out"
            variants={{
                initial: { opacity: 0 },
                in: { opacity: 1 },
                out: { opacity: 0 }
            }}
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        >
            <motion.div
                className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 10 }}
            >
                <div className="text-center mb-8">
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <h1 className="text-5xl font-bold">Z<span className="text-orange-500">Λ</span>N</h1>
                    </motion.div>
                    <motion.h2
                        className="text-xl mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Sign in
                    </motion.h2>
                </div>

                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                        )}
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Sign in
                    </motion.button>
                </form>

                <motion.div
                    className="mt-6 text-center text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to={"/Auth/SignUp"} className="text-orange-500 hover:text-orange-600 font-medium">Sign Up</Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Login;
