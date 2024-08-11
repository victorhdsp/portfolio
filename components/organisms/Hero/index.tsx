"use client";

import Image from "next/image";
import css from "./hero.module.scss";

import logo from "@/public/logo.svg"
import Anchor from "@/components/atoms/anchor";
import { motion } from "framer-motion"

function HomeHero() {

    return (
        <section className={css["root"]}>
            <div className={css["inner"]}>
                <div className={css["information"]}>
                    <motion.header
                        initial={{opacity: 0}}
                        whileInView={{opacity: 100}}
                    >
                        <Image
                            src="/img/logo.svg"
                            alt="Logo do Victor Hugo Dev"
                            width={50}
                            height={60}
                        />
                    </motion.header>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 100}}
                        className={css["title"]}
                    >
                        <h1>Criando soluções para seus problemas</h1>
                        <p>Meu nome é Victor Hugo, sou um desenvolvedor fullstack, muito curioso e que buscar estar sempre atrás de coisa novas.</p>
                        <Anchor href="#contato">
                            Entre em contato
                        </Anchor>
                    </motion.div>
                </div>
                <motion.div className={css["image"]}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 100}}
                >
                    <Image
                        src="/img/hero.png"
                        alt="Foto do Desenvolvedor"
                        width={600}
                        height={810}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HomeHero;