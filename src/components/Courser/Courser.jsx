import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Courser.scss";

const Courser = () => {
    const [clickEffect, setClickEffect] = useState(false);

    // Framer Motion's motion values for smooth cursor movement
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring animations for smoother transitions
    const cursorX = useSpring(mouseX, { stiffness: 500, damping: 20 });
    const cursorY = useSpring(mouseY, { stiffness: 500, damping: 20 });

    useEffect(() => {
        const updatePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const triggerClickEffect = () => {
            setClickEffect(true);
            setTimeout(() => setClickEffect(false), 300);
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mousedown", triggerClickEffect);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mousedown", triggerClickEffect);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            {/* Click Effect */}
            {clickEffect && (
                <motion.div
                    className="click-effect"
                    style={{
                        x: cursorX,
                        y: cursorY,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 2, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                />
            )}
        </>
    );
};

export default Courser;
