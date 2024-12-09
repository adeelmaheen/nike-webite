"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
import logo from "../../public/assests/logo.png"

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className='w-full border-b-2 bg-neutral-100 flex justify-between items-center p-2 sm:h-[40px] md:h-[30px] lg:h-[38px] xl:h-[48px] 2xl:h-[50px] '>
      <div className='w-full flex items-center justify-center bg-white h-[70px] p-2'>
        {/* All content */}
        <div className='sm:w-full md:w-[80%] flex items-center justify-between h-[50px]'>

          {/* Logo */}
          <div className='flex items-center justify-evenly px-4 py-4 lg:px-8 m-0'>
           <Image src={logo} alt='logo' width={80} height={32} className="w-auto h-8"/>
          </div>
          

          {/* Links - Animated sliding nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className='flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black'>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/">New & Featured</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/men">Men</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/women">Women</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/kids">Kids</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/sale">Sale</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/snkrs">SNKRS</Link>
              </li>
            </ul>
          </div>

          <div className='flex gap-x-4 items-center'>
            {/* Search bar - hidden on small screens */}
            <div className='hidden lg:flex w-full bg-gray-200 rounded-md items-center'>
              <input
                className='w-full p-1 rounded-md bg-gray-200 outline-none'
                type="search"
                placeholder='Search?'
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-2"
              />
            </div>

            {/* Icons */}
            <div className="flex gap-x-4 items-center">
              <FontAwesomeIcon icon={faHeart} className='text-2xl' />
              <FontAwesomeIcon icon={faShoppingCart} className='text-gray-700 mr-1 text-2xl' />
            </div>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>

        </div>
      </div>
       
    </main>
  );
}

export default Header;
