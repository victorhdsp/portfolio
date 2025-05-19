"use client";

import css from './layout.module.scss';
import gsap, { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import HomeLayoutBackground from './background';
import HomeLayoutFloating from './floating';

interface HomeLayoutProps {
    children: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

export default function HomeLayout(props: HomeLayoutProps) {
  const container = useRef<HTMLDivElement>(null);

	return (
        <div className={css.root} ref={container}>
            {props.children}
            <HomeLayoutBackground container={container} />
            <HomeLayoutFloating container={container} />
        </div>
	);
}
