"use client";
import Image from "next/image";
import React from "react";

interface ImagesProps {
  img: string;
  extraStyles?: string;
}
const Images: React.FC<ImagesProps> = ({ img, extraStyles }) => {
  return (
    <Image
      src={img}
      alt={img}
      width={600}
      height={550}
      sizes="(max-width: 479px) 178px, (max-width: 767px) 207px, (max-width: 991px) 58px, (max-width: 1919px) 398px, 558px"
      className={`object-contain bg-background rounded ${extraStyles}`}
    />
  );
};

export default Images;
