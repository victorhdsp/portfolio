"use client";

import Image from "next/image";
import css from "./experience.module.scss";
import { resolveDate, ExperienceProps } from "./lib";
import { motion } from "framer-motion"

function ExperienceDesktop({information, image}: ExperienceProps) {
    const date = resolveDate(information.date, false)
    
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 100}}
            className={css["root"]}
        >
            <div className={css["header"]}>
                <Image
                    src={ image.src }
                    alt={ information.title }
                    width={ image.width }
                    height={ image.height }
                />
            </div>
            <div className={css["information"]}>
                <h3>{ information.title }</h3>
                <h4>{ date }</h4>
                {information.descriptions.map((description) => (
                    <p key={description}>{ description }</p>
                ))}
            </div>
        </motion.div>
    )
}

export default ExperienceDesktop;