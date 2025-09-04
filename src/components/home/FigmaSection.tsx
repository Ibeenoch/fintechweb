"use client";

import React from "react";
import Image from "next/image";
import ContentStructure from "../common/ContentStructure";
import AnimateOnView from "../animation/AnimateOnView";

const FigmaSection = () => {
  return (
    <section className="overflow-x-hidden">
      <AnimateOnView
        scrollHorizontalRight={true}
        scrollHorizontalLeft={false}
        scrollVertical={false}
      >
        <section className="flex flex-col sm:grid grid-cols-2 rounded-xl bg-lighterblack mx-4 sm:mx-8 rounded-xl border border-greytext/20 mb-12">
          <section
            aria-labelledby="figma design section"
            className="border-b sm:border-r border-greytext/20  p-8 "
          >
            <Image
              src="/icons/figma.svg"
              width={50}
              height={60}
              alt="figma icon"
              className="w-10 h-auto pb-5"
            />
            <ContentStructure
              topSpacing="mt-2"
              alignContent="left"
              space="pt-3"
              title="Figma file included"
              fontSizeTop="large"
              showSubText={true}
              showBtn={true}
              numOfBtns={1}
              btnTypeLeft="borderType"
              leftBtnText="Request Figma file"
              subtitle={
                <div className="">
                  <span className="text-graytext text-left">
                    Send us an email to
                  </span>{" "}
                  <span className="text-brand">
                    finantechx@brixtemplates.com
                  </span>{" "}
                  <span className="text-graytext">
                    with your purchase receipt, and we will send you the
                    editable Figma file for the Finantech X template.
                  </span>
                </div>
              }
            />
          </section>
          <section aria-labelledby="image design section" className="  ">
            <Image
              src="/images/included_4.png"
              width={500}
              height={500}
              alt="figma image"
              className="w-full h-auto"
            />
          </section>
        </section>
      </AnimateOnView>
    </section>
  );
};

export default FigmaSection;
