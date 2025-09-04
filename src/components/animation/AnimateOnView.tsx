"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
  scrollVertical?: boolean;
  scrollHorizontalLeft?: boolean;
  scrollHorizontalRight?: boolean;
}
const AnimateOnView = ({
  children,
  scrollHorizontalRight = false,
  scrollHorizontalLeft = false,
  scrollVertical = true,
}: AnimatedProps) => {
  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{
        opacity: 0,
        y: scrollHorizontalRight
          ? 0
          : scrollHorizontalLeft
          ? 0
          : scrollVertical
          ? 100
          : 0,
        x: scrollVertical
          ? 0
          : scrollHorizontalRight
          ? 100
          : scrollHorizontalLeft
          ? -100
          : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
