import IProject from "../types/projects";
import ISkill from "../types/skills";
import projects from "./projects";

const skills: ISkills = {
}

export function createSkill(name: string, description: string, projects: IProject[]) {
  const id = name.toLowerCase().replace(/\s/g, "-");
  skills[id] = {
    id,
    name,
    description,
    projects
  };

  return skills[id];
}

export default skills;
export type ISkills = Record<string, ISkill>;