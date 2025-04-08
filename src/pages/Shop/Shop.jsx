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
import ProductGrid from '../../components/Shop/GridProducts/GridProducts';
import OurCollections from '../../components/Shop/Ourcollection/Ourcoleection';
import Countdown from '../../components/Countcown/Countdown';


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
    const productSections = [
        {
            title: "New Arrivals",
            viewAllLink: "/new-arrivals",
            products: [
                {
                    name: "Beech Wood and Plastic Backed Fabri",
                    image: tuffetSofaImage,
                    originalPrice: "3205",
                    currentPrice: "1775",
                },
                {
                    name: "Bosch rotary Professional Drill unit",
                    image: tuffetSofaImage,
                    originalPrice: "5497",
                    currentPrice: "4793",
                },
                {
                    name: "Beech Wood and Plastic Backed Fabri",
                    image: tuffetSofaImage,
                    originalPrice: "3205",
                    currentPrice: "1775",
                },
                {
                    name: "Bosch rotary Professional Drill unit",
                    image: tuffetSofaImage,
                    originalPrice: "5497",
                    currentPrice: "4793",
                },
            ]
        },
        {
            title: "Mega Deals",
            viewAllLink: "/mega-deals",
            products: [
                {
                    name: "Metal Bunk Bed Grey - 200x120x190",
                    image: dualChairImage,
                    originalPrice: "16600",
                    currentPrice: "12849",
                },
                {
                    name: "Outdoor Set - Multi Color",
                    image: dualChairImage,
                    originalPrice: "6934",
                    currentPrice: "5449",
                },
                {
                    name: "Outdoor Set - Multi Color",
                    image: dualChairImage,
                    originalPrice: "6934",
                    currentPrice: "5449",
                },
                {
                    name: "Outdoor Set - Multi Color",
                    image: dualChairImage,
                    originalPrice: "6934",
                    currentPrice: "5449",
                },

            ]
        },
        {
            title: "Essentials",
            viewAllLink: "/essentials",
            products: [
                {
                    name: "MDF Wardrobe Two Shutters White - 2",
                    image: tuffetSofaImage,
                    originalPrice: "25150",
                    currentPrice: "15849",
                },
                {
                    name: "MDF Coffee Table White - 40x50x100",
                    image: tuffetSofaImage,
                    originalPrice: "6740",
                    currentPrice: "4339",
                },
                {
                    name: "MDF Wardrobe Two Shutters White - 2",
                    image: tuffetSofaImage,
                    originalPrice: "25150",
                    currentPrice: "15849",
                },
                {
                    name: "MDF Coffee Table White - 40x50x100",
                    image: tuffetSofaImage,
                    originalPrice: "6740",
                    currentPrice: "4339",
                },
            ]
        }
    ];
    const productData = [
        {
            id: 1,
            name: 'Rotary Table',
            price: 149,
            image: tuffetSofaImage,
            category: 'Tables',
            rating: 4.5,
            reviews: 5325
        },
        {
            id: 2,
            name: 'Red Fabric Sofa',
            price: 550,
            image: tuffetSofaImage,
            category: 'Sofas',
            rating: 4.3,
            reviews: 5325
        },
        {
            id: 3,
            name: 'Tufted Linen Sofa',
            price: 299,
            image: tuffetSofaImage,
            category: 'Sofas',
            rating: 4.7,
            reviews: 5325
        },
        {
            id: 4,
            name: 'Chair',
            price: 149,
            image: tuffetSofaImage,
            category: 'Chairs',
            rating: 4.5,
            reviews: 5325
        },
        {
            id: 5,
            name: 'Yellow Sofa',
            price: 149,
            image: tuffetSofaImage,
            category: 'Sofas',
            rating: 4.6,
            reviews: 5325
        },
        {
            id: 6,
            name: 'Rotary Chair',
            price: 149,
            image: tuffetSofaImage,
            category: 'Chairs',
            rating: 4.5,
            reviews: 5325
        },
        {
            id: 7,
            name: 'Rotary Table',
            price: 149,
            image: tuffetSofaImage,
            category: 'Tables',
            rating: 4.8,
            reviews: 5325
        },
        {
            id: 8,
            name: 'Red Fabric Sofa',
            price: 550,
            image: miniTableImage,
            category: 'Sofas',
            rating: 4.3,
            reviews: 5325
        },
        {
            id: 9,
            name: 'Tufted Linen Sofa',
            price: 299,
            image: tuffetSofaImage,
            category: 'Sofas',
            rating: 4.7,
            reviews: 5325
        },
        {
            id: 10,
            name: 'Chair',
            price: 149,
            image: miniTableImage,
            category: 'Chairs',
            rating: 4.5,
            reviews: 5325
        },
        {
            id: 11,
            name: 'Yellow Sofa',
            price: 149,
            image: tuffetSofaImage,
            category: 'Sofas',
            rating: 4.6,
            reviews: 5325
        },
        {
            id: 12,
            name: 'Rotary Chair',
            price: 149,
            image: miniTableImage,
            category: 'Chairs',
            rating: 4.5,
            reviews: 5325
        }
    ];
    // fake data 
    return (
        <div className='Main-Shop'>
            <div className="hero-section">
                <div className='hero-section-img'>

                </div>
            </div>
            <CategoryShop  />
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
                    autoplayDelay={2000}
                />
                <div className="shop-banner-1">

                </div>

                {/* prod by categores */}
                <ProductsMainslider
                    title="Tv units"
                    viewAllText="See All Products"
                    products={popularProducts}
                    showRating={true}
                    showAddToCart={true}
                    slidesPerView={4}
                    spaceBetween={20}
                />
                <ProductsMainslider
                    title="Tv units"
                    viewAllText="See All Products"
                    products={popularProducts}
                    showRating={true}
                    showAddToCart={true}
                    slidesPerView={4}
                    spaceBetween={20}
                />
                {/* prod by categores */}
                <ProductGrid categories={productSections} />

                <ProductsMainslider
                    title="Tv units"
                    viewAllText="See All Products"
                    products={popularProducts}
                    showRating={true}
                    showAddToCart={true}
                    slidesPerView={4}
                    spaceBetween={20}
                />
                <ProductsMainslider
                    title="Tv units"
                    viewAllText="See All Products"
                    products={popularProducts}
                    showRating={true}
                    showAddToCart={true}
                    slidesPerView={4}
                    spaceBetween={20}
                />
                <ProductsMainslider
                    title="Tv units"
                    viewAllText="See All Products"
                    products={popularProducts}
                    showRating={true}
                    showAddToCart={true}
                    slidesPerView={4}
                    spaceBetween={20}
                />
            </div>
            <div className="shop-banner-2">

            </div>
            <OurCollections products={productData} />
            <Countdown />
        </div>
    )
}
