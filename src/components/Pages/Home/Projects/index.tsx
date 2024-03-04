import css from "./styles.module.scss";

import Image from "@/components/Personal/Image"

import Vevalo from "./Vevalo";
import Pixelite from "./Pixelite";

export default function Projects() {
  return (
    <section className={css["projects"]}>
      <div className="container">
        <div className={css["text"]}>
          <h2>Projetos pessoais</h2>
        </div>
        <div className={css["content"]}>
          <Vevalo />
          <Pixelite />
        </div>
      </div>
    </section>
  )
}