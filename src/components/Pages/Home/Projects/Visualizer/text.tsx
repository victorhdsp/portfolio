'use client';

import { useEffect, useRef } from 'react';
import css from './styles.module.scss'

import { gsap } from "gsap";

interface Props {
  tags: string[]
  description: string[]
}

export default function Text(props:Props) {
  const box = useRef<null|HTMLDivElement>(null);

  useEffect(() => {
    if (box.current) {
      const root = box.current.offsetParent
      
      if (window.innerWidth > 768) {
        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "10% bottom",
            end: "bottom 70%",
            onToggle: (self) => {
              root?.classList.toggle(css['active'], self.isActive)
            },
          },
        });
    
        gsap.timeline({
          scrollTrigger: {
            scrub: 1,
            pin: true,
            trigger: box.current,
            start: "top 50%",
            end: "bottom 50%"
          },
        });
      } else {
        root?.classList.add(css['active'])
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