'use client'
import React, { useContext } from 'react'
import { UseMenuContext } from './MenuContext'
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectGeneral } from '@/lib/features/general/generalSlice';
import Button from '../common/Button';

export default function MobileSideBar() {
    // const { isOpen, setIsOpen } = UseMenuContext();  
    const dispatch = useAppDispatch()
    const { isOpen } = useAppSelector(selectGeneral)
    const links = [
        'Home', 'About', 'Blog', 'Contact', 'Cart'
    ];
// true reveal on close X, false hide on Open =
console.log('isitopen ', isOpen);
  return (
  <div className={`sm:hidden fixed w-full -z-10 top-0  left-0`}>
      <ul className={`absolute bg-background pt-14 ${isOpen ? 'animated-nav-slider' : 'animated-nav-slider-up'} w-full flex flex-col p-6`}>
      {
       links.map((link, i) => (
        <li key={i} className='mb-3 pt-6'>
          <Link className={` hover:text-[#b0f127] sm:block md:text-[19px] text-white font-medium`} href={link.toLowerCase() === 'home' ? '/' : `/${link}`} >{link}</Link>
        </li>
       ))   
      }
      <div className='mt-5 pb-8'>
         <Button text='Download app' textColor='text-black' fullWidth={true} animationType='slant'/>
      </div>
      </ul>
    </div>
  )
}
