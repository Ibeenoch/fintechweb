'use client'
import React from 'react';
import { motion } from 'framer-motion';
import SlantBtn from './animation/SlantBtn';

interface ButtonProps {
    text: string;
    textColor?: string;
    showBorder?: string;
    borderColor?: string;
    backgroundColor?: string;
    fontWeight?: string;
    fullWidth?: boolean;
    route?: string;
}

export default function Button({ 
    text, 
    textColor,
    showBorder,
    borderColor,
    backgroundColor,
    fontWeight = 'font-semibold',
    fullWidth = false,
    route,
} : ButtonProps ) {
  return (
    <SlantBtn> 
      <a 
      href={route ? `/${route}` : "#"}
      role='button' className={`rounded-4xl bg-brand px-[30px] py-[12px] md:py-[18px] text-sm sm:text-md inline-block 
      ${fontWeight ?? ''} 
      ${textColor ?? ''} 
      ${showBorder ?? ''} 
      ${borderColor ?? ''} 
      ${backgroundColor ?? ''} 
      ${fullWidth ? 'w-full text-center' : fullWidth}
      `} 
      >
      {text} 
      </a>
    </SlantBtn>
  )
}
