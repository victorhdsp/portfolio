import css from './styles.module.scss'
import Image from "@/components/Personal/Image"

export default function Resume() {
  return (
    <section className={css["resume"]}>
      <div className={css["image"]}>
        <Image src="/images/aboutus/victorhdsp.png" alt="Victor Hugo" width={413} height={300} />
      </div>

      <div className={css["presentation"]}>
        <h2>Olá, fico feliz que você esteja no meu perfil 😁</h2>
        <p className='large'>Meu nome é Victor Hugo, apesar de me chamarem geralmente de vitinho ou de lkt por motivos de games.</p>
        <div className={css["technologies"]}>
          <h3>Tecnologias</h3>
          <span className={css["tags"]}>
            <p>Typescript</p>
            <p>React</p> 
            <p>Next.js</p>
            <p>Vue</p>
            <p>Typescript</p>
            <p>NodeJS</p>
          </span>
        </div>
      </div>

      <div className={css["description"]}>
        <p className='large'>{`
          Já que falei de jogos, vou começar pelo assunto dos meus hobbies.

          Se tem 4 coisas que simplesmente adoro fazer, são "andar de skate", "jogar capoeira", "construir coisas" e "jogos competitivos".
          
          Atualmente estou cursando "Analise e desenvolvimento de sistemas" na Estácio e assim que terminar devo buscar uma Pós-graduação relacionada a produtos provavelmente, visto que tenho me divertido bastante tentando rodar meus projetos pessoais.

          Minha maior experiência na área é a atual como "Desenvolvedor Web" na Agência Gatilho, que estou trabalhando desde janeiro de 2022, mas fora a agência eu sou uma pessoa relativamente ativa, me mantenho pegando projetos freelances apesar de menos agora por falta de tempo e outras prioridades.
        `}</p>
      </div>
    </section>
  )
}