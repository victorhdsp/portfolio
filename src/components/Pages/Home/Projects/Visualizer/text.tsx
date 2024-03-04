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
    const boxCurrent = box.current
    if (boxCurrent) {
      const root = boxCurrent.offsetParent

      if (window.innerWidth > 768) {
        const boxSize = boxCurrent.getBoundingClientRect().height
        const rootSize = root?.getBoundingClientRect().height || 0

        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            onUpdate: ({progress}) => {
              boxCurrent.style.transform = `translateY(${(progress * (rootSize - boxSize))}px)`
            },
            onToggle: (self) => {
              root?.classList.toggle(css['active'], self.isActive)
            },
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