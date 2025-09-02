import React from 'react'

interface TextProps {
    textColor?: 'text-black' | 'text-white' | 'text-brand' | 'text-greytext';
    fontWeight?: 'slim' | 'thin' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    fontSize?: 'extra-small' | 'small' | 'normal' | 'medium' | 'large' | 'extraLarge' | 'huge' | 'extrahuge';
    spacing?: 'very loose' | 'loose' | 'normal' | 'tight' | 'very tight';
    extraStyles?: string;
    text: string;
}

export default function Text({
  fontSize = 'medium',
  fontWeight = 'medium',
  spacing = 'tight',
  textColor = 'text-white',
  extraStyles,
  text
} : TextProps) {
  let weight = fontWeight === 'slim' ? `font-extralight` : 
  fontWeight === 'thin' ? `font-light` :
  fontWeight === 'normal' ? `font-normal` :
  fontWeight === 'medium' ? `font-medium` :
  fontWeight === 'semibold' ? `font-semibold` :
  fontWeight === 'bold' ? `font-bold` :
  fontWeight === 'extrabold' ? `font-extrabold` : ``;

  let classNames = `${weight} ${fontSize} ${spacing} ${textColor} ${extraStyles}`
  return (

    <div>
      {
        fontSize === 'extrahuge' ? (
          <h1 className={`text-[38px] sm:text-[54px] ${classNames} `}>{text}</h1>
        ) : fontSize === 'huge' ? (
          <h2 className={`text-[30px] sm:text-[48px] ${classNames} `}>{text}</h2>
        ) : fontSize === 'extraLarge' ? (
          <h3 className={`text-[24px] sm:text-[30px] ${classNames} `}>{text} </h3>
        ) : fontSize === 'large' ? (
          <h4  className={`text-[20px] sm:text-[26px] ${classNames} `}>{text}</h4>
        ) :  fontSize === 'medium' ? (
          <h5  className={`text-[16px] sm:text-[18px] ${classNames} `}>{text}</h5>
        ) :  fontSize === 'normal' ? (
          <p  className={`text-[14px] sm:text-[16px] ${classNames} `}>{text}</p>
        ) :  fontSize === 'small' ? (
          <p  className={`text-[12px] sm:text-[14px] ${classNames} `}>{text}</p>
        ) :  fontSize === 'extra-small' ? (
          <p  className={`text-[9px] sm:text-[12px] ${classNames} `}>{text}</p>
        ) : 
        (<></>)
      }
    </div>
  )
}
