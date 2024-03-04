import Visualizer from "@/components/Pages/Home/Projects/Visualizer"

export default function Vevalo() {
  return (
    <Visualizer.Root>
      <Visualizer.Text
        tags={["NodeJS", "Javascript"]}
        description={[
          // `Quando se desenvolve um site, é comum que as imagens sejam em PNG ou JPG,
          // porem esses formatos são pesados e podem prejudicar a performance do site.`,

          `O Pixelite é uma ferramenta que converte imagens de PNG e JPG um formato
          mais leve, agilizando o processo de desenvolvimento e melhorando a performance 
          do site sem perder a qualidade da imagem.`
        ]}
        />
      <Visualizer.Image 
        name="Pixelite"
        resume="Converte imagens de PNG e JPG para o formato WEB."
        src="/images/home/pixelite.png" 
        alt="Pixelite" 
        link="https://www.npmjs.com/package/pixelite"
      />
    </Visualizer.Root>
  )
} 