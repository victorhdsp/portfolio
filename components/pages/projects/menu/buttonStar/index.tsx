"use client";

import IProject from "@/assets/types/projects";
import OrganismButton from "@/components/organisms/button";

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
      className=""
      cta={props.project.name}
      icon={buttonStarIcon()}
      onClick={props.onClick}
    />
  );
}