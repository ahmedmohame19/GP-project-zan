import React from "react";
import { motion } from "framer-motion";
import "./Opinions.scss";
import { IoStar } from "react-icons/io5";
import { ImQuotesLeft } from "react-icons/im";

export default function Opinions() {
    // Animation variants for the container and individual cards
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="main-opinions-container"
            initial="hidden"
            whileInView={"visible"}
            variants={containerVariants}
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Customer Testimonials Real Results, Real Feedback
            </motion.h1>
            <div className="main-opinions">
                <motion.div className="card-opinions" variants={cardVariants}>
                    <div className="head-of-opinons">
                        <span>
                            <ImQuotesLeft />
                        </span>
                        <span className="flex items-center">
                            <IoStar /> (4.8/5)
                        </span>
                    </div>
                    <div className="body-of-opinons">
                        <p>
                            "Zan transformed our online store into a sleek, user-friendly platform. Our sales
                            skyrocketed by 35% in just three months! Their team is professional, creative, and
                            incredibly responsive."
                        </p>
                    </div>
                    <div className="footer-of-opinons">
                        <span>Ahmed Mohamed</span>
                        <span className="avatar rounded-full"></span>
                    </div>
                </motion.div>

                <motion.div className="card-opinions" variants={cardVariants}>
                    <div className="head-of-opinons">
                        <span>
                            <ImQuotesLeft />
                        </span>
                        <span className="flex items-center">
                            <IoStar /> (4.8/5)
                        </span>
                    </div>
                    <div className="body-of-opinons">
                        <p>
                            "Zan transformed our online store into a sleek, user-friendly platform. Our sales
                            skyrocketed by 35% in just three months! Their team is professional, creative, and
                            incredibly responsive."
                        </p>
                    </div>
                    <div className="footer-of-opinons">
                        <span>Ahmed Mohamed</span>
                        <span className="avatar rounded-full"></span>
                    </div>
                </motion.div>

                <motion.div className="card-opinions" variants={cardVariants}>
                    <div className="head-of-opinons">
                        <span>
                            <ImQuotesLeft />
                        </span>
                        <span className="flex items-center">
                            <IoStar /> (4.8/5)
                        </span>
                    </div>
                    <div className="body-of-opinons">
                        <p>
                            "Zan transformed our online store into a sleek, user-friendly platform. Our sales
                            skyrocketed by 35% in just three months! Their team is professional, creative, and
                            incredibly responsive."
                        </p>
                    </div>
                    <div className="footer-of-opinons">
                        <span>Ahmed Mohamed</span>
                        <span className="avatar rounded-full"></span>
                    </div>
                </motion.div>

                <motion.div className="card-opinions" variants={cardVariants}>
                    <div className="head-of-opinons">
                        <span>
                            <ImQuotesLeft />
                        </span>
                        <span className="flex items-center">
                            <IoStar /> (4.8/5)
                        </span>
                    </div>
                    <div className="body-of-opinons">
                        <p>
                            "Zan transformed our online store into a sleek, user-friendly platform. Our sales
                            skyrocketed by 35% in just three months! Their team is professional, creative, and
                            incredibly responsive."
                        </p>
                    </div>
                    <div className="footer-of-opinons">
                        <span>Ahmed Mohamed</span>
                        <span className="avatar rounded-full"></span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
