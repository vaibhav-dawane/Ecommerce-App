import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Men() {
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
            image: "./Images/Men/1.png",
            title: "Nike Style Exclusive",
        },
        {
            image: "./Images/Men/2.png",
            title: "Activewear by Proline",
        },
        {
            image: "./Images/Men/3.png",
            title: "Running Shoes by Asics",
        },
        {
            image: "./Images/Men/4.png",
            title: "Flip-Flop & Sliders",
        },
        {
            image: "./Images/Men/5.png",
            title: "Best of Fastrack",
        },
        {
            image: "./Images/Men/6.png",
            title: "Ethnic Casuals",
        },
        {
            image: "./Images/Men/7.png",
            title: "Everyday Kurtas",
        },
        {
            image: "./Images/Men/8.png",
            title: "Trendy Styles",
        },
        {
            image: "./Images/Men/9.png",
            title: "Stylish Sneakers",
        },
        {
            image: "./Images/Men/10.png",
            title: "Sporty Watches",
        },
    ]
    return (
        <div className='mt-16'>
            <div>
                <h1 className='uppercase tracking-wider text-2xl ml-8 font-semibold'>Men</h1>
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
export default Men
