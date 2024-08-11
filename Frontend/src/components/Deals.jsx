import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import DealsCard from './DealsCard';

function Deals() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    const images = [
        {
            image: "./Images/Deals/1.png",
            title: "Adidas, Puma & More",
            discount: "Min 50% Off"
        },
        {
            image: "./Images/Deals/2.png",
            title: "Branded Kurtas",
            discount: "Under ₹599"
        },
        {
            image: "./Images/Deals/3.png",
            title: "Wedding Sarees",
            discount: "Upto 30% Off"
        },
        {
            image: "./Images/Deals/4.png",
            title: "Ladies Sandals",
            discount: "Min 20% Off"
        },
        {
            image: "./Images/Deals/5.png",
            title: "Men Jeans",
            discount: "Upto 60% Off"
        },
        {
            image: "./Images/Deals/6.png",
            title: "Stylish Watches",
            discount: "Under ₹999"
        },
        {
            image: "./Images/Deals/7.png",
            title: "Sunglasses",
            discount: "Under ₹499"
        },
        {
            image: "./Images/Deals/8.png",
            title: "Electronic Gadgets",
            discount: "Upto 20% Off"
        },
        {
            image: "./Images/Deals/9.png",
            title: "Kitchen Utensils",
            discount: "Min 10% Off"
        },
        {
            image: "./Images/Deals/10.png",
            title: "Earphones",
            discount: "Under ₹300"
        },
    ]

    return (
        <div>
            <div>
                <h1 className='uppercase tracking-wider text-2xl ml-8 font-semibold'>Top Deals On Fashion</h1>
            </div>
            <div className="container mx-auto mt-12">
                <Slider {...settings}>
                    {images.map((item, index) => (
                    <div key={index} className="px-2">
                        {/* <img src={image.image} alt={`Slide ${index}`} className="w-full h-auto rounded" /> */}
                        <DealsCard {...item}/>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
export default Deals