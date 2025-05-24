"use client";

import Image from "next/image";
import css from "./project.module.scss";

import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
    {
        title: "Difrisul",
        description: "Distribuidora de alimentos, esse é um site institucional, onde o cliente pode conhecer mais sobre a empresa e seus produtos.",
        image: "/img/projects/difrisul.png",
        url: "https://difrisul.com.br",
    },
    {
        title: "SolidPay",
        description: "Um hub de soluções financeiras voltadas a empresas, esse site é uma landing page, onde o cliente pode conhecer mais sobre os produtos da solidus.",
        image: "/img/projects/solidpay.png",
        url: "https://solidpay.com.br",
    },
    {
        title: "Capton",
        description: "Empresa impulsionadora de negócios, esse site é uma landing page, que fala sobre a métodologia, os sócios e benefícios.",
        image: "/img/projects/capton.png",
        url: "https://capton.com.br",
    },
    {
        title: "IXCsoft",
        description: "Uma empresa de tecnologia, esse site é um portfólio, onde o cliente pode conhecer mais sobre a empresa e seus produtos.",
        image: "/img/projects/ixcsoft.png",
        url: "https://ixcsoft.com.br",
    },
    {
        title: "Zagonel",
        description: "Uma empresa que vende produtos de iluminação e hidraulicos, esse site é um portfólio, onde o cliente pode conhecer mais sobre a empresa e seus produtos.",
        image: "/img/projects/zagonel.png",
        url: "https://zagonel.com.br",
    },
]

function HomeProjects() {
    return (
        <section className={css["root"]}>
            <motion.div
                className={css["inner"]}
                initial={{opacity: 0}}
                whileInView={{opacity: 100}}
            >
                <h2>Projetos</h2>
                <Carousel opts={{ loop: true }}>
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem
                                key={index}
                                className={css["item"]}
                            >
                                <a
                                    className={css["project"]}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className={css["image"]}
                                    />
                                    <h3>{project.title}</h3>
                                    {/* {<p>{project.description}</p>} */}
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={`${css["arrows"]} ${css["previos"]}`} />
                    <CarouselNext className={`${css["arrows"]} ${css["next"]}`} />
                </Carousel>
            </motion.div>
        </section>
    )
}

export default HomeProjects;