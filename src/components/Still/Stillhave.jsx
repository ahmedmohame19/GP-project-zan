import React from "react";
import { motion } from "framer-motion";
import group from "../../Assets/Assets/Avatar/Avatar group.png";
import "./Stillhave.scss";

export default function Stillhave() {

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } },
    };

    return (
        <motion.div
            className="main-still"
            initial="hidden"
            whileInView={"visible"}
            variants={containerVariants}
        >
            <motion.div className="still" variants={childVariants}>
                <div className="img-group">
                    <img src={group} alt="group" />
                </div>
                <h1>Still have question</h1>
                <p>
                    Can’t find the answer you’re looking for? Please chat to our friendly team.
                </p>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Get in touch
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
