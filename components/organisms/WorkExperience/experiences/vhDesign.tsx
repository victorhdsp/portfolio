"use client";

import Experience from "./item";

function ExperienceVhDesign() {
    const image = {
        src: "/img/logo-vh-design.svg",
        width: 126,
        height: 210
    }

    const information = {
        title: "VH Design",
        date: "02/2021 até 01/2022",
        descriptions: [
            "Foi minha primeira experiência profissional na área como freelancer, assim que comecei a começar a desenvolver alguma coisa, comecei a tentar projetos como freelancer, nessa experiência eu fiz basicamente “Landing Pages” e sites de “Portfólio”.",
            "Na VH eu fazia de tudo, dos textos até o desenvolvimento, esse foi um momento importante na minha carreira, porque meio que me deu a direção que gostaria de seguir."
        ],
        resume: "Foi um momento importante na minha carreira, porque meio que me deu a direção que gostaria de seguir."
    }

    return (
        <Experience 
            information={information}
            image={image}
        />
    )
}

export default ExperienceVhDesign;