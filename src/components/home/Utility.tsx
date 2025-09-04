"use client";

import { ImgCardProps } from "@/types/common/ImageType";
import React from "react";
import TitleAndImageSectionCard from "../common/TitleAndImageSectionCard";

const Utility = () => {
  const images: ImgCardProps[] = [
    {
      img: "/images/utility_img_1.png",
      leftText: "Coming Soon",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/utility_img_2.png",
      leftText: "Sign Up",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/utility_img_3.png",
      leftText: "Sign In",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/utility_img_4.png",
      leftText: "Request a Demo",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/utility_img_5.png",
      leftText: "404 Not Found",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/utility_img_6.png",
      leftText: "Password Protected",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
  ];
  return (
    <TitleAndImageSectionCard
      images={images}
      title="Utility pages"
      subtitle="Take a look at the utility pages included in the Finantech X Template."
      btnText="Buy template"
      bgColor="bg-background"
      extraStylesBottom="px-5"
    />
  );
};

export default Utility;
