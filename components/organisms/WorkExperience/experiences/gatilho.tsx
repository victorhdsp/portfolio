"use client";

import Experience from "./item";

function ExperienceGatilho() {
    const image = {
        src: "/img/logo-gatilho.svg",
        width: 146,
        height: 210
    }

    const information = {
        title: "Agência Gatilho",
        date: "01/2022 até 03/2024",
        descriptions: [
            "Minha experiência na Gatilho foi meio caótica mas muito boa, minhas atividades na Gatilho eram o desenvolvimento de “Landing Pages” como essa, desenvolvimento de “Sites institucionais”, gerenciamento dos servidores e integrações com API's.",
            "Na Gatilho eu era a única pessoa de T.I. na empresa então tudo relacionado era comigo, por exemplo no primeiro dia de empresa, cheguei com meu primeiro problema para resolver."
        ],
        resume: "Na Gatilho eu era a única pessoa de T.I. na empresa então tudo relacionado era comigo."
    }

    return (
        <Experience 
            information={information}
            image={image}
        />
    )
}

export default ExperienceGatilho;