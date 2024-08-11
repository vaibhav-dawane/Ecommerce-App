import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCircleUser, faGift, faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 "
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Login
          <svg
            className={`ml-2 h-5 w-5 ition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-[-40px] mt-2 w-64 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div className='flex justify-around py-2 text-[16px] text-gray-700 hover:bg-gray-100 cursor-pointer'>
                <p className='font-medium'>New Customer?</p>
                <p className='font-semibold text-blue-600 hover:underline'>Sign Up</p>
            </div>
            <hr />
            <div className='px-4 space-y-2 py-2 text-sm text-gray-700  cursor-pointer'>
                <div className='flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-md'>
                    <FontAwesomeIcon className='text-sm' icon={faCircleUser} />
                    <p>Profile</p>
                </div>
                <div className='flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-md'>
                <FontAwesomeIcon icon={faBox} />
                    <p>Orders</p>
                </div>
                <div className='flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-md'>
                    <FontAwesomeIcon icon={faHeart} />
                    <p>Wishlist</p>
                </div>
                <div className='flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-md'>
                <FontAwesomeIcon icon={faGift} />
                    <p>Rewards</p>
                </div>
            </div>
            
            <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
