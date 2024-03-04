import css from "../Visualizer/styles.module.scss";
import Visualizer from "@/components/Pages/Home/Projects/Visualizer"

export default function Vevalo() {
  return (
    <Visualizer.Root>
      <Visualizer.Text
        description={[
        // `Vevalo é um aplicativo de precificação com foco em pequenas empresas,
        // uma startup chamada "Preço Certo" fez uma pesquisa que mostrou que 89%
        // dos empresarios no Brasil não se sentem confiança na hora da precificação.`,
        
        // `Essa startup fez a pesquisa para lançar um aplicativo de precificação,
        // porem o foco é em venda de produtos e eu senti dificuldades para 
        // precificar serviços, então decidi fazer meu próprio SaaS.`

        `Vevalo é um SaaS que ajuda pequenas empresas a fazer a precificação de serviços.`,
        
        `A ideia surgiu depois de perceber que tenho uma dificuldade de precificar meus serviços.`
        ]}
        tags={["React", "NextJS", "Zustand", "TailwindCSS", "Typescript"]}
        />
      <Visualizer.Image 
        name="Vevalo"
        resume="Ajuda pequenas empresas a fazer a precificação de serviços."
        src="/images/home/vevalo.png" 
        alt="Vevalo" 
        link="https://vevalo.com.br/"
      />
    </Visualizer.Root>
  )
}