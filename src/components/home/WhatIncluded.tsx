"use client";

import React from "react";
import AnimateOnView from "../animation/AnimateOnView";
import ContentStructure from "../common/ContentStructure";
import Image from "next/image";
import Images from "../common/Images";
import Text from "../common/Text";
import ImgCard from "../common/ImgCard";
import { ImgCardProps } from "@/types/common/ImageType";

const images: ImgCardProps[] = [
  {
    img: "/images/included_1.png",
    leftText: "20+",
    rightText: "Pages",
    leftColor: "text-brand",
    rightColor: "text-white",
  },
  {
    img: "/images/included_2.png",
    leftText: "40+",
    rightText: "Sections",
    leftColor: "text-brand",
    rightColor: "text-white",
  },
  {
    img: "/images/included_3.png",
    leftText: "25+",
    rightText: "Styles & Symbols",
    leftColor: "text-brand",
    rightColor: "text-white",
  },
];

const WhatIncluded = () => {
  return (
    <section className="pt-8">
      <AnimateOnView>
        <ContentStructure
          fontSizeTop="extrahuge"
          fontWeightTop="semibold"
          title="What is included in Finantech X"
          showSubText={true}
          subtitle={
            <div className="text-center max-w-lg mx-auto pb-8">
              <span className="text-white font-semibold text-center">
                Finantech X Webflow
              </span>{" "}
              <span className="text-greytext text-center">
                Template includes over
              </span>{" "}
              <span className="text-white font-semibold text-center">
                20 pages
              </span>{" "}
              <span className="text-greytext text-center">
                in total, with more than
              </span>{" "}
              <span className="text-white font-semibold text-center">
                40 sections.
              </span>
            </div>
          }
        />
      </AnimateOnView>

      <ImgCard imageObj={images} />
    </section>
  );
};

export default WhatIncluded;
