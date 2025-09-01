'use client'
import Link from 'next/link'
import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import MenuProvider from './MenuContext'
import MobileSideBar from './MobileSideBar'


export default function MobileNavBar() {
  return (
    <div className='flex sm:hidden gap-12 items-center'>
         {/* show on mobile  */}
         <ul className=''>
            <li className='flex items-center sm:hidden '>
                <Link className={` hover:text-[#b0f127] text-white font-medium`} href={`/cart`} >Cart</Link>
                <div className='text-brand text-lg font-medium'>(0)</div>
            </li>
         </ul>
            <HamburgerMenu />
    </div>
  )
}
