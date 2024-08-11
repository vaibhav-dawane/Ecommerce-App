import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Women() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    const images = [
        {
            image: "./Images/Women/1.png",
            title: "Dresses from W",
        },
        {
            image: "./Images/Women/2.png",
            title: "Joggers by Unser Armor",
        },
        {
            image: "./Images/Women/9.png",
            title: "Tops & Tees",
        },
        {
            image: "./Images/Women/3.png",
            title: "Running Shoes",
        },
        {
            image: "./Images/Women/6.png",
            title: "White Watches",
        },
        {
            image: "./Images/Women/4.png",
            title: "Everyday Classic",
        },
        {
            image: "./Images/Women/7.png",
            title: "Handcrafted Jewellery",
        },
        {
            image: "./Images/Women/8.png",
            title: "Mod Blocking",
        },
        {
            image: "./Images/Women/5.png",
            title: "Comfort Footware",
        },
        {
            image: "./Images/Women/10.png",
            title: "Ethnic",
        },
    ]
    return (
        <div className='mt-16'>
            <div>
                <h1 className='uppercase tracking-wider text-2xl ml-8 font-semibold'>Women</h1>
            </div>
            <div className="container mx-auto mt-12">
                <Slider {...settings}>
                    {images.map((item, index) => (
                    <div key={index} className="px-2">
                        <div className='w-[220px] h-[288px] border-gray-200 rounded-md cursor-pointer'>
                            <div className='h-4/5'>
                                <img src={item.image} class="w-full h-full object-cover p-2 rounded-xl hover:scale-105"  alt=""/>
                            </div>
                            <div className='h-1/5 text-center'>
                                <h3 className='pt-2 text-sm font-semibold'>{item.title}</h3>
                                <p className='uppercase text-[8px]'>+ explore</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
export default Women
