"use client";
import React from "react";
import HorizontalScrolling from "../animation/HorizontalScrolling";

let imagesOne = [
  "/images/horizon-scroll-top-5.png",
  "/images/horizon-scroll-top-4.png",
  "/images/horizon-scroll-top-3.png",
  "/images/horizon-scroll-top-2.png",
  "/images/horizon-scroll-top-1.png",
];

let imagesTwo = [
  "/images/horizon-scroll-bottom-1.png",
  "/images/horizon-scroll-bottom-2.png",
  "/images/horizon-scroll-bottom-3.png",
  "/images/horizon-scroll-bottom-4.png",
  "/images/horizon-scroll-bottom-5.png",
];

const HorizontalAnimatedScroll = () => {
  return <HorizontalScrolling imagesOne={imagesOne} imagesTwo={imagesTwo} />;
};

export default HorizontalAnimatedScroll;
