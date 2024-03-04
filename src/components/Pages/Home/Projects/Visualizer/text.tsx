'use client';

import { useEffect, useRef } from 'react';
import css from './styles.module.scss'

import { gsap } from "gsap";

interface Props {
  tags: string[]
  description: string[]
}

export default function Text(props:Props) {
  const box = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      if (box.current) {
        const root = box.current.offsetParent
        
        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "10% bottom",
            end: "bottom 70%",
            onToggle: (self) => {
              root.classList.toggle(css['active'], self.isActive)
            },
          },
        });
      }
  
      if (box.current) {
        gsap.timeline({
          scrollTrigger: {
            scrub: 1,
            pin: true,
            trigger: box.current,
            start: "top 50%",
            end: "bottom 50%"
          },
        });
      }
    } else {
      if (box.current) {
        const root = box.current.offsetParent
        root.classList.add(css['active'])
      }
    }
  }, [])

  return (
    <div ref={box} className={css["information"]}>
      <div className={css["item"]}>
        {
          props.description.map((partial) => (
            <p key={partial}>{partial}</p>
          ))
        }
        <div className={css["technologies"]}>
          <p className='large'>Tecnologias</p>

          <span className={css["tags"]}>
            {
              props.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </span>
        </div>
      </div>
    </div>
  )
}