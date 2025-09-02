"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // map vertical scroll (0 -> 1) into horizontal  translation ( 0 -> -200px)
  const xTop = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <div
      ref={ref}
      className="h-[150vh] md:h-[200vh] flex flex-col z-0 bg-greybg gap-6 items-center justify-center overflow-hidden"
    >
      {/* top  */}
      <motion.div style={{ x: xTop }} className="flex spaces-x-6 gap-4 ">
        {imagesTwo.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={img}
            width={600}
            height={550}
            sizes="(max-width: 479px) 178px, (max-width: 767px) 207px, (max-width: 991px) 258px, (max-width: 1919px) 398px, 558px"
            className=" object-contain bg-background rounded"
          />
        ))}
      </motion.div>

      <motion.div style={{ x }} className="flex spaces-x-6 gap-4">
        {imagesOne.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={img}
            width={600}
            height={550}
            sizes="(max-width: 479px) 178px, (max-width: 767px) 207px, (max-width: 991px) 258px, (max-width: 1919px) 398px, 558px"
            className=" object-contain bg-background rounded"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScrolling;
