import React from 'react';
import Carousel from './Carousel';

function Banner() {
    return (
        <div className='flex justify-center mt-16'>
            <div className='w-[1250px] h-[400px] m-10  rounded-2xl'>
                <div className='mt-4'>
                    <Carousel />
                </div>
            </div>
        </div>
    );
}
export default Banner
