'use client'
import React from 'react';
import { motion, TargetAndTransition, VariantLabels } from 'framer-motion';

interface MotionSlateWrapper {
  children: React.ReactNode;
  whileHover?: VariantLabels | TargetAndTransition;
  transition?: object;
}

export default function SlantBtn({
  children,
  whileHover = { y: -5, scale: 1.04, rotate: -3 },
  transition = { type: "spring", stiffness: 300 },
} : MotionSlateWrapper) {
  return (
    <motion.div
    whileHover={whileHover}
    transition={transition}
    >
      {children}
    </motion.div>
  )
}
