"use client";

import css from "./workExperience.module.scss";
import ExperienceGatilho from "./experiences/gatilho";
import ExperienceVhDesign from "./experiences/vhDesign";
import ExperienceVi3dRender from "./experiences/vi3dRender";
import { motion } from "framer-motion"

interface WorkExperienceProps {

}

function HomeWorkExperience(props: WorkExperienceProps) {
    return (
        <section className={css["work_experience"]}>
            <motion.h2
                initial={{opacity: 0}}
                whileInView={{opacity: 100}}
            >
                Minha experiência profissional
            </motion.h2>
            <div className={css["experiences"]}>
                <ExperienceGatilho />
                <ExperienceVhDesign />
                <ExperienceVi3dRender />
            </div>
        </section>
    )
}

export default HomeWorkExperience;