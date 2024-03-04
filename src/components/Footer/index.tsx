'use client';

import css from "./styles.module.scss"

import Link from "next/link"

export default function Footer () {
  return (
    <footer className={css["footer"]}>
      <div className="container">
        <div className={css["text"]}>
          <h3>Obrigado por ver até aqui</h3>
          <p>Este site funciona melhor no computador</p>
          <p>Feito por Victor Hugo 😁</p>
          <a href="mailto:victorhugods.pereira@gmail.com">
            ✉️ victorhugods.pereira@gmail.com
          </a>
        </div>
        <div className={css["social"]}>
          <a href="https://www.linkedin.com/in/victorhdsp/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a href="https://github.com/lkt226" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}