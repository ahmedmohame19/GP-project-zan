import React from 'react'
import "./Shop.scss"

import ProductsMainslider from '../../components/Shop/ProductsComponents/ProductsMainslider'

import redSofaImage from '../../Assets/Assets/Shop/popular prod/Images-1.png';
import miniTableImage from '../../Assets/Assets/Shop/popular prod/Images-2.png';
import blackChairImage from '../../Assets/Assets/Shop/popular prod/Images-3.png';
import dualChairImage from '../../Assets/Assets/Shop/popular prod/Images-4.png';
import tuffetSofaImage from '../../Assets/Assets/Shop/popular prod/Images.png';
import CategoryShop from '../../components/Shop/Categoery/CategoeryShop';


export default function Shop() {

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
            </div>
        </div>
    )
}
