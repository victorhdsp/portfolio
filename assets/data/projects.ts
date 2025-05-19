import IProject from "../types/projects";
import skills from "./skills";

const projects: IProjects = {
}

export function createProject(name: string, description: string, url: string) {
  const id = name.toLowerCase().replace(/\s/g, "-");
  projects[id] = {
    id,
    name,
    description,
    url
  }
  return projects[id];
}

export default projects;
export type IProjects = Record<string, IProject>;