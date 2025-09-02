"use client";

import React from "react";
import ContentStructure from "../common/ContentStructure";
import AnimateOnView from "../animation/AnimateOnView";

const HeroSection = () => {
  return (
    <AnimateOnView>
      <ContentStructure
        title="Finantech X Webflow Template"
        showSubText={true}
        subtitle="Presenting Finantech X, the ultimate Crypto Webflow Template"
        leftBtnText="Buy template"
        rightBtnText="Explore pages"
        numOfBtns={2}
        showBtn={true}
        btnTypeLeft="default"
        btnTypeRight="borderType"
      />
    </AnimateOnView>
  );
};

export default HeroSection;
