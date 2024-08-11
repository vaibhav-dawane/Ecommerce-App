import React from 'react';

function DealsCard({image, title, discount}) {
    return (
        <div className='w-[180px] h-[260px] border-[1px] border-gray-200 rounded-md cursor-pointer'>
            <div className='h-3/4'>
                <img src={image} class="w-full h-full object-cover p-2 rounded-xl hover:scale-105"  alt=""/>
            </div>
            <div className='h-1/4 bg-slate-100 text-center'>
                <h3 className='pt-2 text-sm font-semibold'>{title}</h3>
                <p className='text-sm'>{discount}</p>
            </div>
        </div>
    );
}
export default DealsCard
