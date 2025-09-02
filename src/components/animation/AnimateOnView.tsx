"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
  scrollVertical?: boolean;
  scrollHorizontal?: boolean;
}
const AnimateOnView = ({
  children,
  scrollHorizontal = false,
  scrollVertical = true,
}: AnimatedProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: scrollVertical ? 50 : 0,
        x: scrollHorizontal ? 50 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      viewport={{ once: false, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
