import OrganismButton from "@/components/organisms/button";
import OrganismCard from "@/components/organisms/card";
import OrganismContainer from "@/components/organisms/container";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import PageHomeProjectsDrawerContent from "./drawer";

export default function PageHomeProjects() {

  return (
    <OrganismContainer className="projects">
      <OrganismCard className="max-w-xl mx-auto">
        <h2>Projetos</h2>
        <p>E minha paixão dita as coisas que construo no meu dia a dia, meus projetos são construidos para resolver problemas reais, serem simples de usar e de fácil acesso.</p>
        <Drawer direction="right" open={true}>
          <DrawerTrigger asChild>
            <OrganismButton
              cta="Ver projetos"
              icon={<span>O</span>}
            />
          </DrawerTrigger>
          <PageHomeProjectsDrawerContent />
        </Drawer>
      </OrganismCard>
    </OrganismContainer>
  );
}