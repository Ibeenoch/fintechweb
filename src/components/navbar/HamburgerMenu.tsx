'use client'
import { selectGeneral, setIsOpen } from '@/lib/features/general/generalSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useState } from 'react'

export default function HamburgerMenu() {
const dispatch = useAppDispatch();
const { isOpen } = useAppSelector(selectGeneral)

    const toggleMenu = () => {
      dispatch(setIsOpen())
    }

    return (
    <div className=''>
      <div 
      onClick={toggleMenu} 
      aria-expanded={isOpen} 
      aria-label={isOpen ? 'close menu' : 'open menu'} 
      className={`sm:hidden hamburger-menu ${ isOpen ?  'close' : 'open'}`}
      >
        <div className={`line line-one `}></div>
        <div className={`line line-two `}></div>
      </div>
    </div>
  )
}
