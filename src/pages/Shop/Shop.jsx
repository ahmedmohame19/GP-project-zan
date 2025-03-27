import React from 'react'
import "./Shop.scss"

import ProductsMainslider from '../../components/Shop/ProductsComponents/ProductsMainslider'
import Copouns from '../../components/Shop/Copouns/Copouns';



// fake images 
import redSofaImage from '../../Assets/Assets/Shop/popular prod/Images-1.png';
import miniTableImage from '../../Assets/Assets/Shop/popular prod/Images-2.png';
import blackChairImage from '../../Assets/Assets/Shop/popular prod/Images-3.png';
import dualChairImage from '../../Assets/Assets/Shop/popular prod/Images-4.png';
import tuffetSofaImage from '../../Assets/Assets/Shop/popular prod/Images.png';
import CategoryShop from '../../components/Shop/Categoery/CategoeryShop';


// copouns 
import aura500Coupon from '../../Assets/Assets/Shop/copouns/Aura_AC_sEN-DT_1.jpg.png';
import sleep10Coupon from '../../Assets/Assets/Shop/copouns/Aura_AC_sEN-DT_1.jpg.png';
import sagadaCoupon from '../../Assets/Assets/Shop/copouns/Aura_AC_sEN-DT_1.jpg.png';

import allCouponsCoupon from '../../Assets/Assets/Shop/copouns/Aura_AC_sEN-DT_1.jpg.png';


// fake images 

export default function Shop() {

    // fake data 
    const popularProducts = [
        {
            id: 1,
            name: 'Red Fabric Sofa',
            price: 4.99,
            oldPrice: 6.99,
            rating: 4.5,
            reviewCount: 5325,
            image: redSofaImage,
            discount: 24
        },
        {
            id: 2,
            name: 'Mini Table',
            price: 5.99,
            rating: 4.5,
            reviewCount: 5325,
            image: miniTableImage
        },
        {
            id: 3,
            name: 'Chair',
            price: 0.41,
            rating: 4.5,
            reviewCount: 5325,
            image: blackChairImage,
            discount: 24
        },
        {
            id: 4,
            name: 'Rotary Chair',
            price: 2.76,
            rating: 4.5,
            reviewCount: 5325,
            image: dualChairImage
        },
        {
            id: 5,
            name: 'Tufted Latest Sofa',
            price: 3.49,
            rating: 4.5,
            reviewCount: 5325,
            image: tuffetSofaImage,
            discount: 15
        }
    ]
    const myCoupons = [
        {
            id: 1,
            image: aura500Coupon,
            alt: 'Get 500 EGP off on Aura ACs',
            code: 'Aura500'
        },
        {
            id: 2,
            image: sleep10Coupon,
            alt: '10% off on Homemart Mattresses',
            code: 'Sleep10'
        },
        {
            id: 3,
            image: sagadaCoupon,
            alt: '20% off uncapped on rugs',
            code: 'Sagada'
        },
        {
            id: 4,
            image: allCouponsCoupon,
            alt: 'Explore all available coupons',
            code: ''
        },
        {
            id: 5,
            image: allCouponsCoupon,
            alt: 'Explore all available coupons',
            code: ''
        }
    ];
    // fake data 
    return (
        <div className='Main-Shop'>
            <div className="hero-section">
                <div className='hero-section-img'>

                </div>
            </div>
            <CategoryShop />
            <div className="Shop-content">

                <ProductsMainslider
                    title="Popular products"
                    viewAllText="See All Products"
                    products={popularProducts}
                    showRating={true}
                    showAddToCart={true}
                    slidesPerView={4}
                    spaceBetween={20}
                />
                <Copouns coupons={myCoupons}
                    slidesPerView={4}
                    spaceBetween={20}
                    autoplayDelay={2000} />
            </div>
        </div>
    )
}
