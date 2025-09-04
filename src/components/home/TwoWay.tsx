"use client";
import React from "react";
import Text from "../common/Text";
import ContentStructure from "../common/ContentStructure";
import Images from "../common/Images";
import { ContentStructureProp } from "@/types/common/ImageType";
import SectionAndImage from "../common/SectionAndImage";

const TwoWay = ({}) => {
  const dataGroups: ContentStructureProp[] = [
    {
      title: "3 Headers and Footers",
      fontSizeTop: "extraLarge",
      showSubText: true,
      subtitle:
        "With a total of 3 different headers and footers, you can easily customize the Finantech X Webflow Template to fit your company needs and requirements.",
      showBtn: true,
      numOfBtns: 1,
      btnTypeLeft: "default",
      leftBtnText: "Buy template",
      alignContent: "left",
      extraStylesTop: "tracking-tighter text-center sm:text-left",
      space: "pt-4 max-w-xl tracking-tight text-center sm:text-left",
      img: "/images/two_way_1.png",
      fontWeightBtn: "semibold",
    },
    {
      title: "3 Notification Bars",
      fontSizeTop: "extraLarge",
      showSubText: true,
      subtitle:
        "If you are looking to get more sales, use one of our 3 notification bars included in the Finantech X Webflow Template, and start promoting your products or services.",
      showBtn: true,
      numOfBtns: 1,
      btnTypeLeft: "default",
      leftBtnText: "Buy template",
      extraStylesTop: "tracking-tighter text-center sm:text-left",
      alignContent: "left",
      space: "pt-4 max-w-xl tracking-tight text-center sm:text-left",
      img: "/images/two_way_2.png",
      reversePosition: true,
      fontWeightBtn: "semibold",
    },

    {
      title: "Custom Icon Set",
      fontSizeTop: "extraLarge",
      showSubText: true,
      subtitle: `The Finantech X Webflow Template includes 3 sets of custom icons (rounded, square and filled), so you can easily use more icon fonts in your template.

No matter if you are looking to add another social media icon in the footer, or change the cart icon in the header, we got you covered.`,
      showBtn: true,
      numOfBtns: 2,
      btnTypeLeft: "default",
      leftBtnText: "Buy template",
      btnTypeRight: "borderType",
      rightBtnText: "View icon font",
      alignContent: "left",
      extraStylesTop: "tracking-tighter text-center sm:text-left",
      space: "pt-4 max-w-xl tracking-tight text-center sm:text-left",
      img: "/images/two_way_3.png",
      fontWeightBtn: "semibold",
    },
    {
      title: "Social Media Assets",
      subtitle:
        "Our Finantech X Webflow Template Figma file includes a collection of social media covers that match with the Webflow Template design (for Facebook, Twitter and LinkedIn), so you can easily edit, customize, and use them for your own social media profiles.",
      fontSizeTop: "extraLarge",
      showSubText: true,
      showBtn: true,
      numOfBtns: 1,
      btnTypeLeft: "default",
      leftBtnText: "Buy template",
      alignContent: "left",
      extraStylesTop: "tracking-tighter text-center sm:text-left",
      space: "pt-4 max-w-xl tracking-tight text-center sm:text-left",
      img: "/images/two_way_1.png",
      fontWeightBtn: "semibold",
    },
    {
      title: "Email Signature",
      fontSizeTop: "extraLarge",
      showSubText: true,
      subtitle:
        "Our Finantech X Webflow Template Figma file includes 2 custom email signature templates that match with the Webflow template, and you can use them to impress your customers with an amazing email signature.",
      showBtn: true,
      numOfBtns: 1,
      btnTypeLeft: "default",
      leftBtnText: "Buy template",
      alignContent: "left",
      extraStylesTop: "tracking-tighter text-center sm:text-left",
      space: "pt-4 max-w-xl tracking-tight text-center sm:text-left",
      img: "/images/two_way_5.png",
      fontWeightBtn: "semibold",
    },
  ];
  return (
    <section
      aria-labelledby="two-way-section"
      className="pt-20 bg-lighterblack"
    >
      <Text
        text="The Finantech X Webflow Template also comes with more surprises..."
        fontSize="extrahuge"
        fontWeight="semibold"
        extraStyles="max-w-5xl px-5 text-center mx-auto"
      />

      {dataGroups.map((data, i) => (
        <SectionAndImage
          key={i}
          img={data.img}
          title={data.title}
          alignContent={data.alignContent}
          btnTypeLeft={data.btnTypeLeft}
          btnTypeRight={data.btnTypeRight}
          extraStylesTop={data.extraStylesTop}
          fontSizeBottom={data.fontSizeBottom}
          fontSizeBtn={data.fontSizeBtn}
          fontSizeTop={data.fontSizeTop}
          fontWeightBottom={data.fontWeightBottom}
          fontWeightBtn={data.fontWeightBtn}
          fontWeightTop={data.fontWeightTop}
          reversePosition={data.reversePosition}
          imgExtraStyle={data.imgExtraStyle}
          leftBtnText={data.leftBtnText}
          numOfBtns={data.numOfBtns}
          rightBtnText={data.rightBtnText}
          showBtn={data.showBtn}
          showSubText={data.showSubText}
          space={data.space}
          subtitle={data.subtitle}
          topSpacing={data.topSpacing}
        />
      ))}
    </section>
  );
};

export default TwoWay;
