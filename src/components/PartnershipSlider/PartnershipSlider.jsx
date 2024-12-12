import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";

import "./PartnershipSlider.scss";
import logo1 from "../../Assets/Assets/parnterships/Furnikita.png";
import logo2 from "../../Assets/Assets/parnterships/Ikio.png";
import logo3 from "../../Assets/Assets/parnterships/Kerumah.png";
import logo4 from "../../Assets/Assets/parnterships/Quhome.png";
import logo5 from "../../Assets/Assets/parnterships/RoomStagi.png";

export default function PartnershipSlider() {
    // Variants for heading and swiper container animations
    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const swiperVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
    };

    return (
        <motion.div
            className="partnership-slider"
            initial="hidden"
            whileInView={"visible"}
        >
            <motion.h2 variants={headingVariants}>Our Partnership</motion.h2>
            <motion.div variants={swiperVariants}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                >
                    {/* Individual logo slides */}
                    <SwiperSlide>
                        <img src={logo1} alt="Partner 1" className="partner-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo2} alt="Partner 2" className="partner-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo3} alt="Partner 3" className="partner-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo4} alt="Partner 4" className="partner-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo5} alt="Partner 5" className="partner-logo" />
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </motion.div>
    );
}
