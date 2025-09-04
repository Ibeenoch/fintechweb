"use client";

import React from "react";
import ContentStructure from "../common/ContentStructure";
import ImgCard from "../common/ImgCard";
import { ImgCardProps } from "@/types/common/ImageType";
import AnimateOnView from "../animation/AnimateOnView";
import Button from "../common/Button";
import TitleAndImageSectionCard from "../common/TitleAndImageSectionCard";

const MainPages = () => {
  const images: ImgCardProps[] = [
    {
      img: "/images/main_1.png",
      leftText: "Home Page",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_2.png",
      leftText: "About",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_3.png",
      leftText: "Blog",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_4.png",
      leftText: "Blog Post",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_5.png",
      leftText: "Features",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_6.png",
      leftText: "Integrations",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_7.png",
      leftText: "Integration Single",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_8.png",
      leftText: "Careers",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_9.png",
      leftText: "Career Single",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_10.png",
      leftText: "Pricing",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_11.png",
      leftText: "Pricing Single",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
    {
      img: "/images/main_12.png",
      leftText: "Contact",
      rightText: "",
      leftColor: "text-greytext",
      rightColor: "text-white",
    },
  ];
  return (
    <TitleAndImageSectionCard
      images={images}
      title="Main pages"
      subtitle="Take a look at the main pages included in the Finantech X Template."
      btnText="Buy template"
    />
  );
};

export default MainPages;
