"use client";
import React from "react";
import Images from "./Images";
import ContentStructure from "./ContentStructure";
import { ContentStructureProp } from "@/types/common/ImageType";

const SectionAndImage: React.FC<ContentStructureProp> = ({
  alignContent = "center",
  showBtn = false,
  showSubText = true,
  reversePosition = false,
  numOfBtns = 1,
  btnTypeLeft,
  btnTypeRight,
  rightBtnText,
  leftBtnText,
  title = "",
  subtitle = "",
  space = "pt-8",
  topSpacing = "mt-14 sm:mt-20",
  fontWeightBottom,
  fontWeightTop,
  fontWeightBtn,
  fontSizeBottom,
  extraStylesTop,
  fontSizeTop,
  fontSizeBtn,
  img = "",
  imgExtraStyle = "rounded-3xl border border-greytext/40",
}) => {
  return (
    <section aria-labelledby="more preview group" className={`${topSpacing}`}>
      {reversePosition ? (
        <section
          aria-labelledby="more preview side by side"
          className="grid grid-cols-1 md:grid-cols-[48%_48%] gap-4 lg:grid-cols-2 px-4 py-10"
        >
          <Images img={img} extraStyles={imgExtraStyle} />
          <ContentStructure
            title={title}
            fontSizeTop={fontSizeTop}
            showSubText={showSubText}
            leftBtnFullWidth={true}
            rightBtnFullWidth={true}
            subtitle={subtitle}
            showBtn={showBtn}
            numOfBtns={numOfBtns}
            btnTypeRight={btnTypeRight}
            rightBtnText={rightBtnText}
            btnTypeLeft={btnTypeLeft}
            leftBtnText={leftBtnText}
            extraStylesTop={extraStylesTop}
            alignContent={alignContent}
            space={space}
            fontSizeBottom={fontSizeBottom}
            fontSizeBtn={fontSizeBtn}
            fontWeightBottom={fontWeightBottom}
            fontWeightBtn={fontWeightBtn}
            fontWeightTop={fontWeightTop}
          />
        </section>
      ) : (
        <section
          aria-labelledby="more preview side by side"
          className="grid grid-cols-1 md:grid-cols-[48%_48%] gap-4 lg:grid-cols-2 px-4 py-10"
        >
          <ContentStructure
            title={title}
            fontSizeTop={fontSizeTop}
            showSubText={showSubText}
            leftBtnFullWidth={true}
            rightBtnFullWidth={true}
            subtitle={subtitle}
            showBtn={showBtn}
            numOfBtns={numOfBtns}
            btnTypeRight={btnTypeRight}
            rightBtnText={rightBtnText}
            btnTypeLeft={btnTypeLeft}
            leftBtnText={leftBtnText}
            extraStylesTop={extraStylesTop}
            alignContent={alignContent}
            space={space}
            fontSizeBottom={fontSizeBottom}
            fontSizeBtn={fontSizeBtn}
            fontWeightBottom={fontWeightBottom}
            fontWeightBtn={fontWeightBtn}
            fontWeightTop={fontWeightTop}
          />
          <Images img={img} extraStyles={imgExtraStyle} />
        </section>
      )}
    </section>
  );
};

export default SectionAndImage;
