'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {

  const pathname = usePathname();
  const menuItems = [
    {id: 1, name: 'Home', link: '/'},
    {id: 2, name: 'About', link: '/about'},
    {id: 3, name: 'Contact', link: '/contact'},
  ]

  const [isSidemenuOpen, setSidemenuOpen] = useState(false);

  const toggleSidemenu = () => {
    setSidemenuOpen(!isSidemenuOpen);
  };

  return (
    <>
      <div className='flex items-center px-4 py-6 md:p-6 bg-white text-xl'>
        <div className='flex-1 flex items-center gap-2 font-bold'>
          <FaBars className='md:hidden transition duration-300 hover:text-red-300' onClick={toggleSidemenu}/>
          <h3>BloomBasket</h3>
        </div>
        <div className='hidden md:flex text-center'>
          <ul className='flex gap-8'>
            {menuItems.map(item => (
              <li key={item.id} className='cursor-pointer transition duration-300 hover:text-red-300'>
                <Link href={item.link} className={`${pathname === item.link ? 'text-red-500':''}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1 flex justify-end'>
          <ul className='flex gap-4'>
            <li className='flex items-center cursor-pointer transition duration-300 hover:text-red-300'>
              <Link href={'/user'} className={`${pathname === '/user' ? 'text-red-500':''}`}><FaUser /></Link>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-base'>&#x20B9;{0.00.toFixed(2)}</span>
              <Link href={'/cart'} className={`cursor-pointer transition duration-300 hover:text-red-300 ${pathname === '/cart' ? 'text-red-500':''}`}><FaBagShopping /></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`md:hidden flex flex-row fixed top-0 left-0 right-0 bottom-0 bg-transparent backdrop-blur-sm transform transition-transform duration-500 delay-150 ease-in-out z-50 ${isSidemenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='basis-3/4 h-full bg-white p-4'>
          <h3 className='text-xl font-bold'>BloomBasket</h3>
          <div className='flex flex-col my-4 gap-2 text-lg'>
            <Link href={'/'} onClick={toggleSidemenu} className={pathname === '/' ? 'text-red-500':''}>Home</Link>
            <Link href={'/cart'} onClick={toggleSidemenu} className={pathname === '/cart' ? 'text-red-500':''}>Cart</Link>
            <Link href={'/about'} onClick={toggleSidemenu} className={pathname === '/about' ? 'text-red-500':''}>About</Link>
            <Link href={'/contact'} onClick={toggleSidemenu} className={pathname === '/contact' ? 'text-red-500':''}>Contact</Link>
          </div>
        </div>
        <div className='basis-1/4 h-full bg-black opacity-50' onClick={toggleSidemenu}>Close</div>  
      </div>
    </>
  )
}

export default Header