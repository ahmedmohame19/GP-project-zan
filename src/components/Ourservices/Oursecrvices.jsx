import React from 'react';
import './Ourservices.scss';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';

export default function Oursecrvices() {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const headingVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
    };

    const cardVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        },
    };

    return (
        <motion.div className="Main-our" variants={pageVariants} initial="initial" whileInView={"animate"} exit="exit">
            <motion.h1 variants={headingVariants}>Our Best Services</motion.h1>
            <div className="main-card">
                <motion.div className="card" variants={cardVariants} initial="initial" whileInView={"animate"}>
                    <div className="number flex">
                        <span>01</span>
                        <GoArrowUpRight />
                    </div>
                    <div className="text">
                        <h2>Furniture Design</h2>
                        <p>
                            Furniture design plays a significant role in the look, feel, and
                            functionality of a space, and can greatly impact our daily lives.
                        </p>
                    </div>
                </motion.div>
                <motion.div className="card" variants={cardVariants} initial="initial" whileInView={"animate"}>
                    <div className="number flex">
                        <span>02</span>
                        <GoArrowUpRight />
                    </div>
                    <div className="text">
                        <h2>Interior Detailing</h2>
                        <p>
                            Interior detailing adds depth, texture, and visual interest to a space, elevating the overall design with finishing touches.
                        </p>
                    </div>
                </motion.div>
                <motion.div className="card" variants={cardVariants} initial="initial" whileInView={"animate"}>
                    <div className="number flex">
                        <span>03</span>
                        <GoArrowUpRight />
                    </div>
                    <div className="text">
                        <h2>Home Redesign</h2>
                        <p>
                            Transform your living space with a home redesign that adds style, functionality, and a fresh perspective to your environment.
                        </p>
                    </div>
                </motion.div>
                <motion.div className="card" variants={cardVariants} initial="initial" whileInView={"animate"}>
                    <div className="number flex">
                        <span>04</span>
                        <GoArrowUpRight />
                    </div>
                    <div className="text">
                        <h2>Verified Workers</h2>
                        <p>
                            Verifying employee information: This includes checking things like education, work history, and criminal records.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}