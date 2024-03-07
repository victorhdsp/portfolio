import css from './styles.module.scss'

import aboutme from '@/assets/data/aboutme'

import IconsCarousel from '@/components/Default/IconsCarousel';
import Technology from './Technology';
import SoftSkill from './Softskill';
import Icon from '@/components/Default/Icon';
import MoreProfessional from './MoreProfessional';
import MoreEducational from './MoreEducational';


export default function Experiences() {
  const hardskills = aboutme.curriculum.hardskills
  const softskills = aboutme.curriculum.softskills

  return (
    <section className={css["experiences"]}>
      <div className={css["professional"]}>
        <div className={css["title"]}>
          <h2>Experiências</h2>
          <MoreProfessional />
        </div>
        <div className={css["item"]}>
          <span><b>Agência Gatilho</b> - <p>01/22 | 02/24</p></span>
          <h3>Desenvolvedor WEB</h3>
          <ul>
            <li>Planejamento, desenvolvimento e testes de paginas WEB.</li>
            <li>Reuniões para solução de problemas com a equipe interna e equipes externas.</li>
          </ul>
        </div>
      </div>

      <div className={css["educational"]}>
        <div className={css["title"]}>
          <h2>Educação</h2>
          <MoreEducational />
        </div>
        <div className={css["item"]}>
          <span><b>Estácio de Sá</b> - <p>01/22 | 12/24</p></span>
          <h3>Analise e desenvolvimento de sistemas</h3>
          {/* <ul>
            <li>Planejamento de banco de dados.</li>
            <li>Java</li>
          </ul> */}
        </div>
        <div className={css["item"]}>
          <span><b>Escola Conquer</b> - <p>01/22 | 12/24</p></span>
          <h3>Comunicação e Oratória</h3>
          {/* <ul>
            <li>Comunicação.</li>
            <li>Oratória</li>
          </ul> */}
        </div>
      </div>

      <div className={css["hard-skill"]}>
        <div className={css["title"]}>
          <h2>Hard skills</h2>
          <Icon src="/svg/icon/search.svg" alt="Pesquisar HardSkill" size='medium' />
        </div>
        <IconsCarousel>
          {
            Object.keys(hardskills).map((index) => {
              const skill = hardskills[index]
              return (
                <Technology key={index} src={`/svg/tech/${index}.svg`} skill={skill} />
              )
            })
          }
        </IconsCarousel>
      </div>

      <div className={css["soft-skill"]}>
        <div className={css["title"]}>
          <h2>Soft skills</h2>
          <Icon src="/svg/icon/search.svg" alt="Pesquisar SoftSkill" size='medium' />
        </div>
        <IconsCarousel>
          {
            Object.keys(softskills).map((index) => {
              const skill = softskills[index]
              return (
                <SoftSkill key={index} src={`/svg/softskills/${index}.svg`} skill={skill} />
              )
            })
          }
        </IconsCarousel>
      </div>
    </section>
  );
}