/* eslint-disable react/no-unescaped-entities */
import css from "./styles.module.scss";

import Image from "@/components/Personal/Image"

export default function Curriculum() {
  return (
    <main className={css["curriculum"]}>
      <div className="container">
        <div className={css["resume"]}>
          <h1>Victor Hugo de Souza Pereira</h1>

          <div className={css["text"]}>
            <p>Olá, fico feliz que você esteja no meu perfil 😁</p>
            <p>Meu nome é Victor Hugo, apesar de me chamarem geralmente de vitinho ou de lkt por motivos de games, e já que falei de jogos, vou entrar no assunto dos meus hobbies.</p>
            <p>Se tem 4 coisas que simplesmente adoro fazer, são "andar de skate", "jogar capoeira", "construir coisas" e "jogos competitivos".</p>
            <p>Atualmente estou cursando "Analise e desenvolvimento de sistemas" na Estácio e assim que terminar devo buscar uma Pós-graduação relacionada a produtos provavelmente, visto que tenho me divertido bastante tentando rodar meus projetos pessoais.</p>
            <p>Minha maior experiência na área é a atual como "Desenvolvedor Web" na Agência Gatilho, que estou trabalhando desde janeiro de 2022, mas fora a agência eu sou uma pessoa relativamente ativa, me mantenho pegando projetos freelances apesar de menos agora por falta de tempo e outras prioridades.</p>
            <p>Além disso, como citei acima, tenho alguns projetos pessoais em produção, são eles: </p>
            <ul>
              <li>Pixelite que é um módulo de NPM (em JavaScript) que converte imagens de PNG para WEBP e AVIF durante o processo de build do framework que eu estiver usando (atualmente Vue ou React), isso me poupa algum tempo já que esse era um processo manual.</li>
              <li>Vevalo que é um "aplicativo" de precificação (em React/Next e Tailwind), como eu comentei em outro momento eventualmente eu pego projetos freelances e eu reparei que tenho uma certa dificuldade em precificar meu trabalho, imaginei que talvez outras pessoas também tivessem e então construí esse "site" para ajudar com esse problema.</li>
            </ul>
            <p>Fora as experiências na área de desenvolvimento, eu já trabalhei com algumas áreas, fui vendedor, atendente de hostel, trabalhei com faxina, carga e descarga, mas a minha principal "outra função" é que trabalhei quase 5 anos foi "Maquete Eletrônica (modelagem 3d)", durante minha adolescência minha mãe começou a fazer faculdade de arquitetura, ela tinha uma certa dificuldade com computador na época e como ela trabalhava e fazia faculdade era tudo meio corrido, então eu resolvi aprender a fazer para ajudar, porem acabei descobrindo que outros alunos da faculdade dela também tinham esse problema.</p>
            <p>Bom, esse é o final do sobre mim, agradeço por ler até aqui. Caso queira me conhecer um pouco mais, você pode entrar em contato pelo LinkedIn ou pelo e-mail abaixo:</p>
            <p>✉️ victorhugods.pereira@gmail.com</p>
          </div>
        </div>

        <div className={css["experiences"]}>
          <h2>Experiências</h2>

          <div className={css["experience"]}>
            <h3>Desenvolvedor da web</h3>
            <p className="large">Gatilho | branding · experiência · marketing digital · Tempo integral</p>
            <p><b>jan de 2022 - fev de 2024</b></p>
            <div className={css["text"]}>
              <p>Contextualizando a Gatilho é uma empresa de marketing digital então a maior parte do trabalho são muitos projetos pequenos como hotsites e landing pages e esses sites são colocados em hospedagens estáticas.</p>
              <p>Liderei o projeto para o uso do Wordpress Headless para os blogs em sites estáticos usando o NuxtJS e Github Actions, assim agilizando o desenvolvimento, evitando os problemas de segurança do Wordpress e sem atrapalhar o time de redação que já estava acostumado ao wordpress.</p>
              <p>Criei um modulo para automatizar a compressão e conversão das imagens dos projetos, melhorando a performace das paginas sem a necessidade de fazer o trabalho manualmente ou utilizar ferramentas pagas.</p>
              <p>Documentei o funcionamento dos processos, ferramentas e regras que usamos na gatilho utilizando o Notion para facilitar a adaptação de novos membros ou para os casos onde o cliente internaliza o desenvolvimento.</p>
            </div>
          </div>
        </div>

        <div className={css["educations"]}>
          <h2>Educação</h2>

          <div className={css["education"]}>
            <h3>Estácio</h3>
            <p><b>nov de 2021 - nov de 2024</b></p>
            <p>Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas</p>
          </div>
        </div>

        <div className={css["projects"]}>
          <h2>Projetos</h2>

          <div className={css["project"]}>
            <h3>Pixelite</h3>
            <p><b>jun de 2023 - jun de 2023</b></p>
            <p>Comprime as imagens de um diretório especificado, cria um backup fora do diretório com as imagens originais e substitui as imagens do diretório especificado pelas imagens comprimidas, adicionando também uma versão WEBP da imagem.</p>
          </div>

          <div className={css["project"]}>
            <h3>Vevalo</h3>
            <p><b>ago de 2023 - até o momento</b></p>
            <p>Faz um calculo para ajudar na precificação de serviços, ele usa o custo da empresa o numero de funcionários, e as horas trabalhadas para gerar o valor da sua hora, e com o valor da sua hora, o tempo estimado do serviço e a margem de lucro, ele resulta no valor do serviço com a possibilidade de colocar serviços adicionais.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
