import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-80 bg-blend-overlay" style={{ backgroundImage: 'url("/api/placeholder/1440/800")', backgroundSize: 'cover' }}>
            <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center">
                        <h1 className="text-5xl font-bold">Z<span className="text-orange-500">Λ</span>N</h1>
                    </div>
                    <h2 className="text-xl mt-2">Sign in</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-800">Forgot your password?</a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                        />
                    </div>

                    <button className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-200">
                        Sign in
                    </button>
                </div>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;