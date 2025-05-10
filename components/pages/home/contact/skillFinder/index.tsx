import OrganismInput from "@/components/organisms/input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useEffect, useState } from "react";
import SkillFinderContentDefaultValue from "./contentDefaultValue";
import SkillFinderContentValue from "./contentValue";
import ISkill from "@/assets/types/skills";
import skills from "@/assets/data/skills";
import css from "./style.module.scss";
import OrganismDrawer from "@/components/organisms/drawer";

interface Props {
  open: boolean;
}

export default function PageHomeContactSkillFinder(props: Props) {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState<ISkill | null>(null);

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    if (search.length > 0) {
      const skillFound = Object.values(skills).find((skill) =>
        skill.name.toLowerCase().includes(search.toLowerCase())
      );
      if (skillFound) {
        setSkill(skillFound);
      }
    }
  }, [search]);

  return (
    <Drawer direction="right" open={props.open}>
      <OrganismDrawer>
          <DrawerHeader className={css.header}>
            <DrawerTitle>
              <h2>Buscador de skills</h2>
            </DrawerTitle>
            <OrganismInput
              placeholder="Pesquise por uma habilidade"
              onChange={handleSearchInput}
              icon={<span>O</span>}
            />
          </DrawerHeader>
          {skill ? (
            <SkillFinderContentValue
              skill={skill}
            />
          ) : (
            <SkillFinderContentDefaultValue
              setSearch={setSearch}
            />
          )}
      </OrganismDrawer>
    </Drawer>
  );
}