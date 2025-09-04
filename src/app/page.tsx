import HorizontalScrolling from "@/components/animation/HorizontalScrolling";
import FigmaSection from "@/components/home/FigmaSection";
import HeroSection from "@/components/home/HeroSection";
import HorizontalAnimatedScroll from "@/components/home/HorizontalAnimatedScroll";
import MainPages from "@/components/home/MainPages";
import TwoWay from "@/components/home/TwoWay";
import Utility from "@/components/home/Utility";
import WhatIncluded from "@/components/home/WhatIncluded";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-30  min-h-screen">
      <HeroSection />
      <HorizontalAnimatedScroll />
      <WhatIncluded />
      <FigmaSection />
      <MainPages />
      <Utility />
      <TwoWay />
    </main>
  );
}
