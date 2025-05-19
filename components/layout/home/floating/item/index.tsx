"use client";

import Image from 'next/image';
import css from "./style.module.scss";
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { scrollAnimate } from './animation';

gsap.registerPlugin(ScrollTrigger);

interface HomeLayoutFloatingProps {
    container: React.RefObject<HTMLDivElement>;
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    y?: number | string;
    x?: number | string;
}

export default function HomeLayoutFloatingItem(props: HomeLayoutFloatingProps) {
  const item = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (props.container.current && item.current)
      scrollAnimate(
        props.container.current,
        item.current,
        `${props.y || ""}`,
        `${props.x || ""}`,
      );
  }, { scope: props.container });

	return (
    <div
      className={props.className}
      ref={item}
    >
      <div className={css.image}>
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>
    </div>
	);
}
