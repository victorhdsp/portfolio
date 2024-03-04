'use client';

import { motion } from 'framer-motion'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

export default function Transition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if(typeof window !== 'undefined') {
    //Register
    gsap.registerPlugin(ScrollTrigger);

    //Lenis Instance
    const lenis = new Lenis()

    lenis.on('scroll', () => {})

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
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
