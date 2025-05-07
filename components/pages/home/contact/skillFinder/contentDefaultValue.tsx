import OrganismButton from "@/components/organisms/button";

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
    <div className="content">
      <h3>Mais procuradas</h3>
      {skillList.map((skill) => (
        <OrganismButton
          key={skill}
          variant="ghost"
          icon={<span>O</span>}
          cta={skill}
          onClick={() => handleSearch(skill)}
        />
      ))}
    </div>
  );
}