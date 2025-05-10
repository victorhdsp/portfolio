"use client";

import projects from "@/assets/data/projects";
import IProject from "@/assets/types/projects";
import OrganismButton from "@/components/organisms/button";
import OrganismCard from "@/components/organisms/card";
import OrganismContainer from "@/components/organisms/container";
import { useState } from "react";
import PageProjectMenu from "./menu";

export default function PageProject() {
  const [project, setProject] = useState<IProject>(Object.values(projects)[0]);

  const handleOpenProject = (url: string) => {
    window.open(url, "_blank");
  }

  return (
    <OrganismContainer className="contact">
      <PageProjectMenu
        projects={projects}
        setProject={setProject}
      />
      <OrganismCard>
        <h2 className="large">
          {project.name}
        </h2>
        <p>
          {project.description}
        </p>
        <OrganismButton
          cta="Ver projeto"
          icon={<span>O</span>}
          onClick={() => handleOpenProject(project.url)}
        />
      </OrganismCard>
    </OrganismContainer>
  );
}