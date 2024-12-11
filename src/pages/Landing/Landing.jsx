import React from "react";
import { motion } from "framer-motion";
import { GoSearch } from "react-icons/go";
import Why from "../../components/Why/Why";
import "./Landing.scss";

export default function Landing() {

  // Animation Variants for main
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  //  Animation Variants for text and search
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.div
        className="main-landing"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text">
          <motion.h1 variants={textVariants}>
            Make Your <span>Interior</span> More
          </motion.h1>
          <motion.h2 variants={textVariants}>
            Minimalistic & Modern
          </motion.h2>
          <motion.p variants={textVariants}>
            Turn your room with Zan into a lot more minimalist and modern with
            ease and speed
          </motion.p>
          <motion.div className="search" variants={searchVariants}>
            <GoSearch className="rounded-full" />
            <input
              type="search"
              placeholder="search furniture"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
      <Why />
    </>
  );
}
