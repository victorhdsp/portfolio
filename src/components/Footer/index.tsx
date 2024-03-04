'use client';

import css from "./styles.module.scss"

import Link from "next/link"

export default function Footer () {
  return (
    <footer className={css["footer"]}>
      <div className="container">
        <p>By Victor</p>
      </div>
    </footer>
  )
}