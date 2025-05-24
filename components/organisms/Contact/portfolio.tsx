"use client";

import css from "./contact.module.scss";
import Download from "@/components/atoms/download";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function HomeContact() {
    return (
        <section id="contato" className={css["root"]}>
            <div className={css["inner"]}>
                <div className={css["information"]}>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 100}}
                        className={css["title"]}
                    >
                        <h2>Contato</h2>
                        <p>Se você quiser saber mais você pode entrar em contato comigo por e-mail ou através das minhas redes sociais.</p>
                        <a href="https://wa.me/5521989306866?text=Ol%C3%A1%20gostaria%20de%20construir%20um%20projeto.">
                            <Button size="lg">
                                Entrar em contato
                            </Button>
                        </a>
                    </motion.div>
                    <div className={css["contacts"]}>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 100}}
                            className={css["contact"]}
                        >
                            <h4>E-mail</h4>
                            <h3>victorhugods.pereira@gmail.com</h3>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 100}}
                            className={css["contact"]}
                        >
                            <h4>Endereço</h4>
                            <h3>São Lourenço, Niterói,<br/> Rio de Janeiro, 24060-045</h3>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 100}}
                    className={css["box"]}
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.886568678228!2d-43.110076743603365!3d-22.884837394796023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998391a4cf7019%3A0x55e9ce5c1e45edb3!2sR.%20Dr.%20Genserico%20Ribeiro%20-%20S%C3%A3o%20Louren%C3%A7o%2C%20Niter%C3%B3i%20-%20RJ%2C%2024060-045!5e0!3m2!1spt-BR!2sbr!4v1723253737575!5m2!1spt-BR!2sbr" className={css["map"]} loading="lazy"></iframe>
                </motion.div>
            </div>
        </section>
    )
}

export default HomeContact;