"use client";

import Image from "next/image";
import css from "./experience.module.scss";
import { ExperienceProps, resolveDate } from "./lib";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"  
import { Button } from "@/components/ui/button";
import ExperienceDesktop from "./desktop";
import { motion } from "framer-motion";

function ExperienceMobile({information, image}: ExperienceProps) {
    const date = resolveDate(information.date, true)

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
                <div className={css["information"]}>
                    <h3>{ information.title }</h3>
                    <h4>{ date }</h4>
                    <p>{ information.resume }</p>
                </div>
            </div>
            <div className={css["action"]}>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="w-full"
                            size="lg"
                            variant="secondary"
                        >
                            Ver mais
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={css["dialog"]}>
                        <ExperienceDesktop
                            information={information}
                            image={image}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </motion.div>
    )
}

export default ExperienceMobile;