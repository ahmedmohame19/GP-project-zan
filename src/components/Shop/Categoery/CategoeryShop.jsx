import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "./CategoeryShop.scss"
import 'swiper/scss';
import 'swiper/scss/navigation';

import furnitureIcon from '../../../Assets/Assets/Shop/cat/Office_Furniture.png.png';
import homeDecorIcon from '../../../Assets/Assets/Shop/cat/Sports.png.png';
import officeChairIcon from '../../../Assets/Assets/Shop/cat/Kitchen_Bathroom_ID_576__2.png.png';
import lightingIcon from '../../../Assets/Assets/Shop/cat/Kitchen_Bathroom_ID_576__2.png.png';
import kitchenIcon from '../../../Assets/Assets/Shop/cat/Kitchen_Bathroom_ID_576__2.png.png';
import appliancesIcon from '../../../Assets/Assets/Shop/cat/Kitchen_Bathroom_ID_576__2.png.png';
import fabricBedIcon from '../../../Assets/Assets/Shop/cat/Kitchen_Bathroom_ID_576__2.png.png';
import storageIcon from '../../../Assets/Assets/Shop/cat/image_74_2.png.png';
import outdoorsIcon from '../../../Assets/Assets/Shop/cat/z6_6.png.png';
import sportsIcon from '../../../Assets/Assets/Shop/cat/Sports.png.png';
import { Link } from 'react-router-dom';

const CategoryShop = () => {
    const categories = [
        { name: 'Furniture', icon: furnitureIcon },
        { name: 'Home Decor', icon: homeDecorIcon },
        { name: 'Office Chair', icon: officeChairIcon },
        { name: 'Lighting', icon: lightingIcon },
        { name: 'Kitchen', icon: kitchenIcon },
        { name: 'Appliances', icon: appliancesIcon },
        { name: 'Fabric bed', icon: fabricBedIcon },
        { name: 'Storage', icon: storageIcon },
        { name: 'Outdoors', icon: outdoorsIcon },
        { name: 'Sports', icon: sportsIcon },
    ];

    return (
        <div className="category-section">
            <div className="category-header">
                <h2>Browse by Category</h2>
                <div className="view-all">
                    <span>All Categories</span>
                    <IoIosArrowForward />
                </div>
            </div>

            <div className="swiper-container">
                <div className="swiper-prev">
                    <IoIosArrowBack />
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView={6}
                    navigation={{
                        prevEl: '.swiper-prev',
                        nextEl: '.swiper-next',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 9,
                            spaceBetween: 10,
                        },
                    }}
                    className="category-swiper"
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div className="category-item">
                                <Link to={`/categoery/${category.name}`}>
                                    <div className="category-icon">
                                        <img src={category.icon} alt={category.name} />
                                    </div>
                                    <span className="category-name">{category.name}</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-next">
                    <IoIosArrowForward />
                </div>
            </div>
        </div >
    );
};

export default CategoryShop;