import OrganismButton from "@/components/organisms/button";
import OrganismCard from "@/components/organisms/card";
import OrganismContainer from "@/components/organisms/container";

export default function PageHomeContact() {
  return (
    <OrganismContainer className="contact">
      <OrganismCard>
        <h2 className="large">Resumo</h2>
        <p>Sou um desenvolvedor de software, gosto de criar coisas novas e trabalhar em projetos complexos, tenho facilidade em aprender e me adaptar.<br/>Sou uma pessoa multidiciplinar e faço bom uso disso identificando problemas e trazendo soluções diferentes para as discussões.</p>
        <OrganismButton
          cta="Baixar currículo"
          icon={<span>O</span>}
        />
      </OrganismCard>
      <Drawer open={open} onOpenChange={setOpen}>
      </Drawer>
    </OrganismContainer>
  );
}