"use client";

import css from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className={css["root"]}>
            <div className={css["inner"]}>
                <p>Desenvolvidor por mim s2</p>

                <div className={css["social"]}>
                    <a href="https://www.linkedin.com/in/victorhdsp/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>Linkedin</p>
                    </a>
                    <a href="https://www.instagram.com/lkt226" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                        <p>Instagram</p>
                    </a>
                    <a href="https://github.com/victorhdsp" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;