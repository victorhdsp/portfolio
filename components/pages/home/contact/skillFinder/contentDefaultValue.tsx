import OrganismButton from "@/components/organisms/button";
import css from "./style.module.scss";

interface Props {
  setSearch: (value: string) => void;
}

const skillList = [
  "React.js",
  "Typescript",
  "Next.js",
]

export default function SkillFinderContentDefaultValue (props: Props) {
  const handleSearch = (value: string) => {
    props.setSearch(value);
  };

  return (
    <div className={css.data}>
      <h3>Mais procuradas</h3>
      {skillList.map((skill) => (
        <OrganismButton
          key={skill}
          icon={<span>O</span>}
          cta={skill}
          onClick={() => handleSearch(skill)}
          className={`${css.skill_button} afacad`}
          variant="ghost"
        />
      ))}
    </div>
  );
}