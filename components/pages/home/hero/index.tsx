import OrganismCard from "@/components/organisms/card";
import OrganismContainer from "@/components/organisms/container";

export default function PageHomeHero() {
  return (
    <OrganismContainer className="hero">
      <OrganismCard>
        <h1>Victor</h1>
        <p className="large">Desenvolvedor de software</p>
      </OrganismCard>
    </OrganismContainer>
  );
}
