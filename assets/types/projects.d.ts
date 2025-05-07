import ISkill from "./skills";

export default interface IProject {
  id: string;
  name: string;
  description: string;
  url: string;
  skills: ISkill[];
}