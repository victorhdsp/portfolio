"use client";

import Image from 'next/image';
import css from './style.module.scss';
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { scrollAnimate } from './animation';

gsap.registerPlugin(ScrollTrigger);

interface HomeLayoutBackgroundProps {
    container: React.RefObject<HTMLDivElement>;
}

export default function HomeLayoutBackground({container}: HomeLayoutBackgroundProps) {
  const background = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (container.current && background.current)
      scrollAnimate(container.current, background.current);
  }, { scope: container });

	return (
    <div className={css.background} ref={background}>
      <Image
        src="/src/image/background.png"
        alt="Hero"
        width={1920}
        height={1080}
        className={css.clouds}
      />
    </div>
	);
}
