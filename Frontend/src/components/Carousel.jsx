import React, { useState, useEffect } from 'react';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: "item1",
            src: "./Images/1.png",
            alt: "Slide 1",
            type: "HandBags",
            discount: "Up To 30% Off"
        },
        {
            id: "item2",
            src: "./Images/2.png",
            alt: "Slide 2",
            type: "Shirts & Tshirts",
            discount: "Min. 10% Off"
        },
        {
            id: "item3",
            src: "./Images/3.png",
            alt: "Slide 3",
            type: "Watches",
            discount: "25-30% Off"
        },
        {
            id: "item4",
            src: "./Images/4.png",
            alt: "Slide 4",
            type: "Shoes",
            discount: "Up To 50% Off"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          // mod because, we don't want to exceed slide size i.e. 4
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on slide change
    }, [slides.length]);

    return (
        <div>
            <div className="carousel overflow-hidden relative w-full h-[300px]">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`carousel-item w-full absolute transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={slide.src} className="w-4/6 h-96" alt={slide.alt} />
                        <div className='w-2/6 m-4 ml-14'>
                            <h3 className='text-3xl mt-14 tracking-widest uppercase'>{slide.type}</h3>
                            <h4 className='text-2xl mt-4'>{slide.discount}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-full justify-center gap-4 py-2">
                {slides.map((slide, index) => (
                    <a
                        key={slide.id}
                        href={`#${slide.id}`}
                        className={`w-2 h-2 rounded-full block ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></a>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
