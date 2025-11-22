import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>
      {/* لوگو */}
      <img src={assets.logo} className='w-32 h-12' alt='Logo' />

      {/* منوی اصلی برای سایز بزرگ */}
      <ul className='hidden sm:flex gap-4 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* آیکون‌ها و منوی موبایل */}
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='Profile' />
          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt='Cart' className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>6</p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu'
        />
      </div>

      {/* منوی کناری برای موبایل */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden h-60 bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt='Back' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-t-1' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-t-1' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-t-1' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-t-1' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;