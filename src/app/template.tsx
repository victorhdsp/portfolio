'use client';

import { motion } from 'framer-motion'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Transition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if(typeof window !== 'undefined') {
    //Register
    gsap.registerPlugin(ScrollTrigger);
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, pointerEvents: 'none'}}
      animate={{ opacity: 1, pointerEvents: 'auto'}}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
