"use client";
import React from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import SlantBtn from "../animation/SlantBtn";

interface ButtonProps {
  text?: string;
  textColor?: string;
  showBorder?: boolean;
  borderProps?: string;
  backgroundColor?: string;
  fullWidth?: boolean;
  animationType?: "none" | "slant";
  route?: string;
  fontWeight?:
    | "slim"
    | "thin"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";
  fontSize?:
    | "extra-small"
    | "small"
    | "normal"
    | "medium"
    | "large"
    | "extraLarge"
    | "huge"
    | "extrahuge";
  whileHover?: VariantLabels | TargetAndTransition;
}

export default function Button({
  text,
  textColor,
  showBorder,
  borderProps = "border border-white",
  backgroundColor,
  fontWeight = "medium",
  fontSize = "medium",
  fullWidth = false,
  route,
  animationType = "slant",
  whileHover,
}: ButtonProps) {
  let weight =
    fontWeight === "slim"
      ? `font-extralight`
      : fontWeight === "thin"
      ? `font-light`
      : fontWeight === "normal"
      ? `font-normal`
      : fontWeight === "medium"
      ? `font-medium`
      : fontWeight === "semibold"
      ? `font-semibold`
      : fontWeight === "bold"
      ? `font-bold`
      : fontWeight === "extrabold"
      ? `font-extrabold`
      : ``;

  let classNames = `${weight} ${fontSize} ${textColor} `;

  let textContent =
    fontSize === "extrahuge" ? (
      <h1 className={`text-[38px] sm:text-[54px] ${classNames} `}>{text}</h1>
    ) : fontSize === "huge" ? (
      <h2 className={`text-[30px] sm:text-[48px] ${classNames} `}>{text}</h2>
    ) : fontSize === "extraLarge" ? (
      <h3 className={`text-[24px] sm:text-[30px] ${classNames} `}>{text} </h3>
    ) : fontSize === "large" ? (
      <h4 className={`text-[20px] sm:text-[26px] ${classNames} `}>{text}</h4>
    ) : fontSize === "medium" ? (
      <h5 className={`text-[16px] sm:text-[18px] ${classNames} `}>{text}</h5>
    ) : fontSize === "normal" ? (
      <p className={`text-[14px] sm:text-[17px] ${classNames} `}>{text}</p>
    ) : fontSize === "small" ? (
      <p className={`text-[12px] sm:text-[14px] ${classNames} `}>{text}</p>
    ) : fontSize === "extra-small" ? (
      <p className={`text-[9px] sm:text-[12px] ${classNames} `}>{text}</p>
    ) : (
      <></>
    );

  return (
    <>
      {animationType === "none" ? (
        <a
          href={route ? `/${route}` : "#"}
          role="button"
          className={`rounded-4xl group mb-4
          ${showBorder ? `border ${borderProps} hover:border-brand` : ``}
          ${
            backgroundColor ? backgroundColor : `bg-brand`
          } px-[30px] py-[12px] tracking-wide md:py-[18px] text-xs sm:text-md inline-block 
          ${fontWeight ?? ""} 
          ${textColor ?? ""} 
          ${fullWidth ? "w-full text-center" : ""}
          `}
        >
          {textContent}
        </a>
      ) : animationType === "slant" ? (
        <SlantBtn whileHover={whileHover}>
          <a
            href={route ? `/${route}` : "#"}
            role="button"
            className={` group mb-4
            ${showBorder ? `border ${borderProps} hover:border-brand` : ``}
            ${backgroundColor ? backgroundColor : `bg-brand`}
            rounded-4xl px-[30px] py-[12px] md:py-[18px] text-sm sm:text-md inline-block 
            ${fontWeight ?? ""} 
            ${textColor ?? ""} 
            ${fullWidth ? "w-full text-center" : ""}
          `}
          >
            {textContent}
          </a>
        </SlantBtn>
      ) : (
        <></>
      )}
    </>
  );
}
