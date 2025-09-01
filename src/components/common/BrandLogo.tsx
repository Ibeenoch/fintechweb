'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlantBtn from '../animation/SlantBtn'

const BrandLogo = () => {
  return (
      <Link href={'/'} aria-label='home'>
        <SlantBtn
       whileHover={{ y: -5, scale: 1.04, rotate: 3 }}
        >
            <Image 
                src={'/icons/finantech-x-webflow-template.svg'} 
                alt='header logo - cryptron'
                width={241}
                height={42}
                priority
                className='h-auto w-[150px] sm:w-[200px]'
            />
        </SlantBtn>
    </Link>
  )
}

export default BrandLogo
