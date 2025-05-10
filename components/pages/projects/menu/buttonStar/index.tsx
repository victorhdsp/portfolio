"use client";

import IProject from "@/assets/types/projects";
import OrganismButton from "@/components/organisms/button";
import css from "./style.module.scss";

interface IProps {
  project: IProject;
  onClick: () => void;
}

function buttonStarIcon () {
  return (<span>O</span>);
}

export default function PageProjectMenuButtonStar(props: IProps) {
  return (
    <OrganismButton
      cta={props.project.name}
      icon={buttonStarIcon()}
      onClick={props.onClick}
      variant="ghost"
      className={css.omit_text}
    />
  );
}