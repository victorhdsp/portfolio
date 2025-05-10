import IProject from "./projects";

export default interface ISkill {
  id: string;
  name: string;
  description: string;
  projects: IProject[];
}