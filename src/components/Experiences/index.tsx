import Image from 'next/image';
import css from './styles.module.scss'
import Link from 'next/link';

export default function Experiences() {
  return (
    <section className={css["experiences"]}>
      <div className={css["professional"]}>
        <div className={css["title"]}>
          <h2>Experiências</h2>
          <Image src="/svg/icon/more.svg" alt="Mais experiências profissionais" width={24} height={24} />
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
          <Image src="/svg/icon/more.svg" alt="Mais cursos ou certificados" width={24} height={24} />
        </div>
        <div className={css["item"]}>
          <span><b>Estácio de Sá</b> - <p>01/22 | 12/24</p></span>
          <h3>Analise e desenvolvimento de sistemas</h3>
          <ul>
            <li>Planejamento de banco de dados.</li>
            <li>Java</li>
          </ul>
        </div>
        <div className={css["item"]}>
          <span><b>Escola Conquer</b> - <p>01/22 | 12/24</p></span>
          <h3>Comunicação e Oratória</h3>
          <ul>
            <li>Comunicação.</li>
            <li>Oratória</li>
          </ul>
        </div>
      </div>

      <div className={css["hard-skill"]}>
        <div className={css["title"]}>
          <h2>Hard skills</h2>
          <Image src="/svg/icon/search.svg" alt="Pesquisar HardSkill" width={24} height={24} />
        </div>
        <div className={css["carousel"]}>
          <span className="item">
            <Image src="/svg/tech/js.svg" alt="Javascript" width={36} height={36} />
          </span>
        </div>
      </div>

      <div className={css["soft-skill"]}>
        <div className={css["title"]}>
          <h2>Soft skills</h2>
          <Image src="/svg/icon/search.svg" alt="Pesquisar SoftSkill" width={24} height={24} />
        </div>
        <div className={css["carousel"]}>
          <span className={css["item"]}>
            <Image src="/svg/icon/messages.svg" alt="Comunicação" width={24} height={24} />
            <p>Comunicação</p>
          </span>
          <Image src="/svg/icon/lamp.svg" alt="Criatividade" width={24} height={24} />
          <Image src="/svg/icon/happy-emoji.svg" alt="Inteligência emocional" width={24} height={24} />
          <Image src="/svg/icon/note.svg" alt="Organização" width={24} height={24} />
          <Image src="/svg/icon/message-question.svg" alt="Curiosidade" width={24} height={24} />
          <Image src="/svg/icon/security.svg" alt="Responsabilidade" width={24} height={24} />
        </div>
      </div>
    </section>
  );
}