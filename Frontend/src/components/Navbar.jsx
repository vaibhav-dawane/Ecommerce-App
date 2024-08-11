import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu ';

function Navbar() {
    
    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Buy-e-Fy</a>
                    <div className="">                  
                        <div className="form-control ml-6">
                            <input type="text" placeholder="Search for Products, Brands..." className="input input-bordered w-72 h-10 outline-none rounded-xl" />
                        </div>
                    </div>
                </div>

                <div className="navbar-center flex-grow">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>New Arrivals</a></li>
                    <li><a>Orders</a></li>
                    <li><a>Contact</a></li>
                    </ul>
                </div>
                
                <div className='navbar-end flex items-center'>
                    <div className='mx-2 flex items-center mr-12 px-2 py-1 rounded-md hover:ring-1 hover:ring-gray-400'>
                        <FontAwesomeIcon className='text-2xl' icon={faCircleUser} />                 
                        <h1 className='ml-[-5px]'>
                            <DropdownMenu />
                        </h1>
                    </div>
                    <div className='mx-2 flex items-center cursor-pointer'>
                        <FontAwesomeIcon className='text-2xl' icon={faCartShopping} />
                        <h1 className='m-2'>Cart</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Navbar
