"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Images from "../common/Images";

interface HorizontalScrollingProps {
  imagesOne: string[];
  imagesTwo: string[];
}

const HorizontalScrolling: React.FC<HorizontalScrollingProps> = ({
  imagesOne,
  imagesTwo,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // map vertical scroll (0 -> 1) into horizontal  translation ( 0 -> -200px)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  // map vertical scroll (0 -> 1) into horizontal  translation ( 0 -> -200px)
  const xTop = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  return (
    <div ref={ref} className="relative h-[500vh] bg-greybg py-14">
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-12 overflow-hidden">
        {/* top  */}
        <motion.div style={{ x: xTop }} className="flex spaces-x-6 gap-4 ">
          {imagesTwo.map((img, i) => (
            <Images key={i} img={img} />
          ))}
        </motion.div>

        <motion.div style={{ x }} className="flex spaces-x-6 gap-4">
          {imagesOne.map((img, i) => (
            <Images key={i} img={img} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrolling;
