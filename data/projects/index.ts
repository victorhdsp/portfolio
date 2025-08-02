import { ViewProjectDto } from "../../sources/pages/freelancing/projects/type"
import supplierCollectorResume from "./supplier_collector/resume"

type Projects = ViewProjectDto[]

export const projectsDatabase: Projects = [
    supplierCollectorResume,
    {
        title: "Difrisul",
        subtitle: "Distribuição de Alimentos",
        image: "/img/projects/difrisul.png",
        description: "Plataforma para distribuidora de alimentos para food service e varejo.",
        tags: ["Web", "Vue.js", "Nuxt.js"],
        link: "https://difrisul.com.br"
    },
    {
        title: "SolidPay",
        subtitle: "Soluções Financeiras",
        image: "/img/projects/solidpay.png",
        description: "Hub de soluções financeiras para empresas e startups.",
        tags: ["Web", "Vue.js"],
        link: "https://solidpay.com.br"
    },
    {
        title: "IXC soft",
        subtitle: "Software de Gestão Empresarial",
        image: "/img/projects/ixcsoft.png",
        description: "Empresa especialista em soluções avançadas de tecnologia para a gestão e otimização de resultados de empresas.",
        tags: ["Web", "Vue.js", "Nuxt.js"],
        link: "https://ixcsoft.com.br"
    },
    {
        title: "Zagonel",
        subtitle: "Duchas, torneiras e iluminação",
        image: "/img/projects/zagonel.png",
        description: "Empresa brasileira fundada em 1989, em Pinhalzinho, Santa Catarina, que atua nos segmentos de duchas, torneiras elétricas, iluminação profissional e pública.",
        tags: ["Web", "Vue.js", "Nuxt.js", "Backend", "PHP", "Firebase"],
        link: "https://zagonel.com.br"
    },
    {
        title: "Capton",
        subtitle: "Gestão de Captação de Recursos",
        image: "/img/projects/capton.png",
        description: "Plataforma de gestão de captação de recursos para organizações sociais.",
        tags: ["Web", "Vue.js", "Nuxt.js", "GSAP"],
        link: "https://capton.com.br"
    }
]