'use client';

import { use, useEffect, useRef } from "react"
import css from "./styles.module.scss"
import Image from "next/image";

export default function MouseCursor() {
  const cursor = useRef<null|HTMLSpanElement>(null)

  useEffect(() => {
    const cursorCurrent = cursor.current

    if (cursorCurrent) {
      document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e
        cursorCurrent.style.left = `${clientX}px`
        cursorCurrent.style.top = `${clientY}px`

        if (e.target) {
          const target = e.target as HTMLElement
          
          const hasHover = (attribute: string) => {
            if (target.getAttribute(attribute)) {
              cursorCurrent.classList.add(css[attribute.replace('data-', '')])
            } else {
              cursorCurrent.classList.remove(css[attribute.replace('data-', '')])
            }
          }

          const hasHoverTag = (tag: string, className:string) => {
            if (target.tagName === tag) {
              cursorCurrent.classList.add(css[className])
            } else {
              cursorCurrent.classList.remove(css[className])
            }
          }

          hasHover("data-camera-left")
          hasHover("data-camera-right")

          hasHoverTag("BUTTON", "pointer")
          hasHoverTag("A", "web")
        }
      })
    }
   
  }, [])

  return (
    <span ref={cursor} className={css["mouse-cursor"]}>
      <Image data-icon className={css["arrow-right"]} src="/svg/icon/arrow-right.svg" alt="Seta para direita" width={24} height={24} />
      <Image data-icon className={css["arrow-left"]} src="/svg/icon/arrow-left.svg" alt="Seta para esquerda" width={24} height={24} />
      <Image data-icon className={css["arrow-pointer"]} src="/svg/icon/mouse.svg" alt="Cursor de ação" width={24} height={24} />
      <Image data-icon className={css["arrow-web"]} src="/svg/icon/web.svg" alt="Cursor de acesso externo" width={24} height={24} />
    </span>
  )
}