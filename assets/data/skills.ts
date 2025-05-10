import ISkill from "../types/skills";
import projects from "./projects";

const skills: ISkills = {
  test: {
    id: "test",
    name: "Test",
    description: "Test",
    projects: [
      projects.test
    ]
  }
}

export default skills;
export type ISkills = Record<string, ISkill>;