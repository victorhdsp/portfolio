interface Skill {
  name: string,
  level: 1 | 2 | 3 | 4 | 5,
  alt?: string
}

export interface SoftSkills {
  [key: string]: Skill
}

const softskills:SoftSkills = {
  comunication: {
    name: "Comunicação",
    level: 1
  },
  criativity: {
    name: "Criatividade",
    level: 1
  },
  emotionalIntelligence: {
    name: "Inteligência emocional",
    level: 1
  },
  organization: {
    name: "Organização",
    level: 1
  },
  curiosity: {
    name: "Curiosidade",
    level: 1
  },
  responsibility: {
    name: "Responsabilidade",
    level: 1
  }
}

export default softskills