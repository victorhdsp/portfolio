"use client";

import { IProjects } from "@/assets/data/projects";
import IProject from "@/assets/types/projects";
import PageProjectMenuButtonStar from "./buttonStar";

interface IProps {
  projects: IProjects;
  setProject: (project: IProject) => void;
}

export default function PageProjectMenu(props: IProps) {
  return (
    <menu>
      {Object.values(props.projects).map((project) => (
        <li key={project.id}>
          <PageProjectMenuButtonStar
            project={project}
            onClick={() => props.setProject(project)}
          />
        </li>
      ))}
    </menu>
  );
}