import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#f6edf0]'>
      <div className='grid grid-cols-1 sm:grid-cols-4 px-5 py-12 gap-4'>
        <div className='flex items-center text-2xl font-bold'>
          Bloom Basket
        </div>
        <div>
          <ul>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Shop All</li>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Skin Care</li>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Hair Care</li>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Bath & Body</li>
          </ul>
        </div>
        <div>
          <ul>
            {/* <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Refund Policy</li> */}
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Terms & Conditions</li>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Privacy Policy</li>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>FAQ</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>About</li>
            <li className='cursor-pointer transition duration-500 hover:text-red-300 pb-1'>Contact</li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-[1px] border-solid border-[#d4a5b559] px-5 py-12'>
        <div className='text-gray-500 text-[17px]'>Copyright © 2024 Bloom Basket | Powered by Bloom Basket</div>
        <ul className='flex sm:justify-end gap-4 text-xl'>
          <li className='cursor-pointer transition duration-500 hover:text-red-300'><FaFacebookSquare/></li>
          <li className='cursor-pointer transition duration-500 hover:text-red-300'><FaInstagramSquare /></li>
          <li className='cursor-pointer transition duration-500 hover:text-red-300'><FaTwitterSquare/></li>
          <li className='cursor-pointer transition duration-500 hover:text-red-300'><FaLinkedin/></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer