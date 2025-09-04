"use client";
import React from "react";
import AnimateOnView from "../animation/AnimateOnView";
import Button from "./Button";
import ContentStructure from "./ContentStructure";
import ImgCard from "./ImgCard";
import { ImgCardProps } from "@/types/common/ImageType";

interface ImageProp {
  images: ImgCardProps[];
  title: string;
  subtitle: string;
  btnText?: string;
  bgColor?: string;
  extraStylesTop?: string;
  extraStylesBottom?: string;
}

const TitleAndImageSectionCard: React.FC<ImageProp> = ({
  images,
  title,
  subtitle,
  btnText,
  bgColor = "bg-lighterblack",
  extraStylesBottom = "py-5",
  extraStylesTop,
}) => {
  return (
    <section
      aria-labelledby="main pages preview"
      className={`${bgColor} rounded-xl`}
    >
      <AnimateOnView>
        <ContentStructure
          title={title}
          fontSizeTop="huge"
          topSpacing="pt-20"
          fontWeightTop="medium"
          fontSizeBottom="normal"
          showSubText={true}
          space={extraStylesBottom}
          extraStylesTop={extraStylesTop}
          subtitle={subtitle}
          showBtn={false}
        />
      </AnimateOnView>

      <ImgCard imageObj={images} />

      <div className="pt-5 pb-10 mx-4  sm:flex justify-center">
        <Button
          text={btnText}
          fontWeight="semibold"
          fullWidth={true}
          animationType="slant"
          whileHover={{ y: -5, scale: 1.04, rotate: 3 }}
        />
      </div>
    </section>
  );
};

export default TitleAndImageSectionCard;
