import React from "react";
import { motion } from "framer-motion";
import "./Why.scss";

import mobile from "../../Assets/Assets/Mobile screen + shadow.png";
import qulity from "../../Assets/Assets/icons/quality.png";

export default function Why() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="main-why my-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            variants={containerVariants}
        >
            <motion.h1 className="my-5" variants={itemVariants}>
                Why you should <br /> choose Zan
            </motion.h1>

            <motion.div className="why-content" variants={itemVariants}>
                <motion.div className="mobile-secreen-img" variants={itemVariants}>
                    <img src={mobile} alt="mobile screen" />
                </motion.div>

                <div className="rest-why">
                    <div className="content mb-6">
                        <motion.div className="content-child mb-6" variants={itemVariants}>
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="quality" />
                            </div>
                            <h2>High Quality</h2>
                            <p>Lorem, ipsum dolor sit amet!</p>
                        </motion.div>

                        <motion.div className="content-child mb-6" variants={itemVariants}>
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="quality" />
                            </div>
                            <h2>High Quality</h2>
                            <p>Lorem, ipsum dolor sit amet!</p>
                        </motion.div>
                    </div>

                    <div className="content mb-6">
                        <motion.div className="content-child mb-6" variants={itemVariants}>
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="quality" />
                            </div>
                            <h2>High Quality</h2>
                            <p>Lorem, ipsum dolor sit amet!</p>
                        </motion.div>

                        <motion.div className="content-child mb-6" variants={itemVariants}>
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="quality" />
                            </div>
                            <h2>High Quality</h2>
                            <p>Lorem, ipsum dolor sit amet!</p>
                        </motion.div>
                    </div>

                    <div className="content mb-6">
                        <motion.div className="content-child mb-6" variants={itemVariants}>
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="quality" />
                            </div>
                            <h2>High Quality</h2>
                            <p>Lorem, ipsum dolor sit amet!</p>
                        </motion.div>

                        <motion.div className="content-child mb-6" variants={itemVariants}>
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="quality" />
                            </div>
                            <h2>High Quality</h2>
                            <p>Lorem, ipsum dolor sit amet!</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
