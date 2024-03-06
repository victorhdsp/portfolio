'use client';

import css from './page.module.scss'

import AboutMe from "@/components/AboutMe";
import CurrentProject from '@/components/CurrentProject';
import Camera from '@/components/Default/Camera';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import { useRef } from 'react';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  
  return (
    <main ref={container} className={css["home"]}>
      <Camera container={container} />
      <AboutMe />
      <Experiences />
      <Projects />
      <CurrentProject />
    </main>
  );
}
