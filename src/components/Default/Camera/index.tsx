'use client';

import css from './styles.module.scss';
import { useEffect, useRef } from "react";

interface Props {
  container: React.RefObject<HTMLDivElement>;
}

export default function Camera(props: Props) {
  const leftMoviment = useRef<HTMLSpanElement>(null);
  const rightMoviment = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const leftMovimentCurrent = leftMoviment.current;
    const rightMovimentCurrent = rightMoviment.current;
    const containerCurrent = props.container.current;

    if (leftMovimentCurrent && rightMovimentCurrent && containerCurrent) {
      const moviment = (position: string, direction: HTMLSpanElement) => {
        const timed = setTimeout(() => {
          containerCurrent.style.marginLeft = position;

          if (position === '0px') {
            leftMovimentCurrent.classList.add(css["inactive"]);
            rightMovimentCurrent.classList.remove(css["inactive"]);
          } else {
            leftMovimentCurrent.classList.remove(css["inactive"]);
            rightMovimentCurrent.classList.add(css["inactive"]);
          }
        }, 1000);
        
        direction.addEventListener("mouseleave", (e) => {
          clearTimeout(timed);
        });
      }
      
      rightMovimentCurrent.addEventListener("mouseenter", (e) => {
        const containerWidth = containerCurrent.offsetWidth;
        moviment(`calc(100vw - ${containerWidth}px)`, rightMovimentCurrent);
      });

      leftMovimentCurrent.addEventListener("mouseenter", (e) => {
        moviment('0px', leftMovimentCurrent);
      });
    }
  }, []);

  return (
    <>
      <span ref={leftMoviment} data-camera-left className={`${css["left-moviment"]} ${css["inactive"]}`} />
      <span ref={rightMoviment} data-camera-right className={css["right-moviment"]} />
    </>
  );
}