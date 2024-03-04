import Image from "@/components/Personal/Image"
import css from './styles.module.scss'

export default function Hero () {
    const technologies = [
      { name: 'Typescript', link: 'https://www.typescriptlang.org/' },
      { name: 'React', link: 'https://pt-br.react.dev/' },
      { name: 'Vue.js', link: 'https://vuejsbr-docs-next.netlify.app/' },
    ]

    const lastJob = {
      name: 'Agência Gatilho',
      link: 'https://agenciagatilho.com.br/'
    }

    const interests = [
      // { name: 'Jogos', link: 'https://www.google.com.br/' },
      { name: 'Modelagem 3D', link: 'https://www.behance.net/vi3drender' },
      // { name: 'Inteligência artificial', link: 'https://www.google.com.br/' },
    ]


    const Link = (props:{ item:{ name:string, link:string }}) => {
      return (<a href={props.item.link} target="_blank" rel="noopener noreferrer">{props.item.name}</a>)
    }

    return (
        <section className={css["hero"]}>
            <div className="container">
              <div className={css["text"]}>
                <h1>Olá, meu nome é <i>Victor</i></h1>
                <p className='large'>Sou um desenvolvedor web com um certo gosto por resolver problemas que mora no Rio de janeiro.</p>
                <div className={css["features"]}>
                    <p>
                      Minhas principais tecnologias são <Link item={technologies[0]}/>, <Link item={technologies[1]}/> e <Link item={technologies[2]}/>.
                    </p>
                    <p>
                      Ultima experiência como Desenvolvedor Web na <Link item={lastJob} />.
                    </p>
                    <p>
                      Hobbies e interesses: <Link item={interests[0]} />.
                    </p>
                </div>
              </div>
              <div className={css["image"]}>
                {/* <Image src="/images/home/victorhdsp.png" alt="Victor Hugo" width={413} height={300} /> */}
              </div>
            </div>
        </section>
    )
}