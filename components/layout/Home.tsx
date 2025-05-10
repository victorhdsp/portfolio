"use client";

import Image from 'next/image';
import css from './layout.module.scss';
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

interface HomeLayoutProps {
    children: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

export default function HomeLayout(props: HomeLayoutProps) {
  const container = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.addLabel("start")
      .from(background.current, {
        duration: 1,
        y: "25%",
        ease: "power2.inOut",
        transformOrigin: "center center",
      }, "start")
      .to(background.current, {
        duration: 1,
        y: "-25%",
        ease: "power2.out",
        transformOrigin: "center center",
      }, "end");
  }, { scope: container });

	return (
        <div className={css.root} ref={container}>
            {props.children}
            <div className={css.background} ref={background}>
              <Image
                src="/src/image/background.png"
                alt="Hero"
                width={1920}
                height={1080}
              />
            </div>
        </div>
	);
}
