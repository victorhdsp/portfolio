interface Skill {
  name: string,
  level: 1 | 2 | 3 | 4 | 5,
  alt?: string
}

export interface HardSkills {
  [key: string]: Skill
}

const hardskills: HardSkills = {
  javascript: {
    name: "JavaScript",
    level: 1
  },
  typescript: {
    name: "TypeScript",
    level: 1
  },
  css: {
    name: "CSS",
    level: 1
  },
  webgl: {
    name: "WebGL",
    level: 1
  },
  git: {
    name: "Git",
    level: 1
  },
  html: {
    name: "HTML",
    level: 1
  },
  githubActions: {
    name: "GitHub Actions",
    level: 1
  },
  nextjs: {
    name: "Next.js",
    level: 1
  },
  sass: {
    name: "Sass",
    level: 1,
    alt: "Scss"
  },
  docker: {
    name: "Docker",
    level: 1
  },
  tailwindcss: {
    name: "Tailwind CSS",
    level: 1
  },
  reactjs: {
    name: "React.js",
    level: 1
  },
  firebase: {
    name: "Firebase",
    level: 1,
    alt: "Firestore, Authentication, Storage"
  },
  nodejs: {
    name: "Node.js",
    level: 1
  },
  api: {
    name: "API",
    level: 1,
    alt: "REST"
  },
  graphql: {
    name: "GraphQL",
    level: 1
  },
  nuxtjs: {
    name: "Nuxt.js",
    level: 1
  },
  vuejs: {
    name: "Vue.js",
    level: 1
  },
  mongodb: {
    name: "MongoDB",
    level: 1
  },
  pinia: {
    name: "Pinia",
    level: 1,
    alt: 'Gerenciador de estados'
  },
  nestjs: {
    name: "Nest.js",
    level: 1
  },
  redux: {
    name: "Redux",
    level: 1,
    alt: "Redux Toolkit, Gerenciador de estados"
  },
  sketchup: {
    name: "SketchUp",
    level: 1,
    alt: "Modelagem 1D"
  },
}

export default hardskills