import OrganismCard from "@/components/organisms/card";
import OrganismContainer from "@/components/organisms/container";

export default function PageHomeMotivation() {
  return (
    <OrganismContainer className="motivation">
      <OrganismCard className="max-w-xl mx-auto">
        <h2>Motivação</h2>
        <p>Sou uma pessoa apaixonada por construir e criar coisas novas, mas porque? Eu adoro o processo de quando se ver de frente com um problema enorme até então sem solução e arrumar um jeito de resolver.</p>
      </OrganismCard>
    </OrganismContainer>
  );
}
