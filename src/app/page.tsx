import HorizontalScrolling from "@/components/animation/HorizontalScrolling";
import HeroSection from "@/components/home/HeroSection";
import HorizontalAnimatedScroll from "@/components/home/HorizontalAnimatedScroll";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-30  min-h-screen">
      <HeroSection />
      <HorizontalAnimatedScroll />
    </main>
  );
}
