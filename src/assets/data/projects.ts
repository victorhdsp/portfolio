interface Project {
  title: string
  resume: string
  description: string[]
  url: string
  alt: string
}

interface Projects {
  [key: string]: Project
}

const projects:Projects = {
  vevalo: {
    title: 'Vevalo',
    resume: 'SaaS de precificação',
    description: [
      'Faz um calculo para ajudar na precificação de serviços, ele usa o custo da empresa o numero de funcionários, e as horas trabalhadas para gerar o valor da sua hora, e com o valor da sua hora, o tempo estimado do serviço e a margem de lucro, ele resulta no valor do serviço com a possibilidade de colocar serviços adicionais.'
    ],
    url: 'https://vevalo.com',
    alt: 'Javascript, React, Next.js, Zustand, Node.js, Firebase, Vercel, TailwindCSS, Figma, Sass, Scss, Front-end, Backend, SaaS'
  },
  pixelite: {
    title: 'Pixelite',
    resume: 'Conversor de imagens',
    description: [
      'Conversor de imagens, com a possibilidade de redimensionar, cortar, comprimir e converter para diversos formatos.'
    ],
    url: 'https://www.npmjs.com/package/pixelite',
    alt: 'Javascript, Node.js, Sharp, Backend, Plugin'
  }
}

export default projects