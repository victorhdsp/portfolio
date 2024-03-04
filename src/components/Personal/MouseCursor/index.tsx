'use client';

import { use, useEffect, useRef } from "react"
import css from "./styles.module.scss"

export default function MouseCursor() {
  const cursor = useRef<null|HTMLSpanElement>(null)

  useEffect(() => {
    const cursorCurrent = cursor.current

    if (cursorCurrent) {
      document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e
        cursorCurrent.style.left = `${clientX}px`
        cursorCurrent.style.top = `${clientY}px`

        if (
          e.target instanceof HTMLAnchorElement ||
          e.target instanceof HTMLButtonElement ||
          e.target instanceof HTMLInputElement
        ) {
          cursorCurrent.classList.add(css["mouse-cursor--hover"])
        } else {
          cursorCurrent.classList.remove(css["mouse-cursor--hover"])
        }
      })
    }
   
  }, [])

  return (
    <span ref={cursor} className={css["mouse-cursor"]} />
  )
}