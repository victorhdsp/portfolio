"use client";

import Experience from "./item";

function ExperienceVi3dRender() {
    const image = {
        src: "/img/vi3d-logo.svg",
        width: 150,
        height: 144
    }

    const information = {
        title: "Vi3D Render",
        date: "Antes até 02/2021",
        descriptions: [
            "Essa era uma empresa minha, mas em outra área de atuação, antes de mudar para desenvolvimento, eu fazia imagens realistas de projetos de arquitetura com base na modelagem 3D.",
            "Estranhamente minha experiência com modelagem 3D, foi muito útil no entendimento de certos conceitos de programação como o funcionamento das “Classes” e “Componentes”."
        ],
        resume: "Antes de mudar para desenvolvimento, eu fazia imagens realistas de projetos de arquitetura."
    }

    return (
        <Experience 
            information={information}
            image={image}
        />
    )
}

export default ExperienceVi3dRender;