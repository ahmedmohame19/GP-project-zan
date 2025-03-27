// CouponSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/autoplay';
import './Copouns.scss';

const Coupons = ({
    coupons = [],
    slidesPerView = 4,
    spaceBetween = 15,
    autoplayDelay = 3000,
    onCouponClick
}) => {
    const defaultCoupons = [
        {
            id: 1,
            image: '/images/coupon-aura.jpg',
            alt: 'Get 500 EGP off on Aura ACs',
            code: 'Aura500'
        },
        {
            id: 2,
            image: '/images/coupon-mattress.jpg',
            alt: '10% off on Homemart Mattresses',
            code: 'Sleep10'
        },
        {
            id: 3,
            image: '/images/coupon-rugs.jpg',
            alt: '20% off uncapped on rugs',
            code: 'Sagada'
        },
        {
            id: 4,
            image: '/images/coupon-all.jpg',
            alt: 'Explore all available coupons',
            code: ''
        }
    ];

    const couponList = coupons.length > 0 ? coupons : defaultCoupons;

    const handleCouponClick = (coupon) => {
        if (onCouponClick && typeof onCouponClick === 'function') {
            onCouponClick(coupon);
        }
    };

    return (
        <div className="coupon-swiper-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: slidesPerView,
                        spaceBetween: spaceBetween,
                    },
                }}
                className="coupon-swiper"
            >
                {couponList.map((coupon) => (
                    <SwiperSlide key={coupon.id || coupon.image}>
                        <div
                            className="coupon-image-card"
                            onClick={() => handleCouponClick(coupon)}
                        >
                            <img
                                src={coupon.image}
                                alt={coupon.alt || 'Coupon offer'}
                                className="coupon-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Coupons;