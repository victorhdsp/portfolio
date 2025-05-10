"use client";

import ISkill from "@/assets/types/skills";
import OrganismButton from "@/components/organisms/button";
import { DrawerFooter } from "@/components/ui/drawer";
import css from "./style.module.scss"
import { useRouter } from "next/navigation";

interface Props {
  skill: ISkill;
}

export default function SkillFinderContentValue (props: Props) {
  const router = useRouter();

  const handleProject = (url: string) => {
    router.push(url);
  };

  return (<>
    <div className={css.data}>
      <h3>{props.skill.name}</h3>
      <p>{props.skill.description}</p>
    </div>
    <DrawerFooter className={css.footer}>
      <h3>Exemplos de projetos:</h3>
      {props.skill.projects.slice(0, 3)
        .map((project) => (
          <OrganismButton
            key={project.id}
            icon={<span>O</span>}
            cta={project.name}
            onClick={() => handleProject(project.url)}
            className={`${css.skill_button} afacad`}
            variant="ghost"
          />
        ))}
    </DrawerFooter>
  </>);
}