import IProject from "../types/projects";
import skills from "./skills";

const projects: IProjects = {
  test: {
    id: "test",
    name: "Test",
    description: "Test",
    url: "test",
    skills: [
      skills.test
    ]
  }
}

export default projects;
export type IProjects = Record<string, IProject>;