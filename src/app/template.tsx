'use client';

import { motion } from 'framer-motion'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { store } from './store'
import { Provider } from 'react-redux'

import Toast from "@/components/Default/Toast";

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
      <Provider store={store}>
        {children}
        <Toast />
      </Provider>
    </motion.div>
  );
}
