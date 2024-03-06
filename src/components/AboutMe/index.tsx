import css from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';

import aboutme from '@/assets/data/aboutme'
import Profile from './Profile';
import Locale from './Locale';
import Email from './Email';
import Telphone from './Telphone';

export default function AboutMe() {
  return (
    <section className={css["about-me"]}>
      <div className={css["header"]}>
        <Image src='/images/home/victorhdsp.png' alt='Victor Hugo de Souza Pereira' width={420} height={420} />
        <span className={css["information"]}>
          <h1>{ aboutme.name }</h1>
          <Profile />
          <Locale />
        </span>
      </div>

      <div className={css["resume"]}>
        <h2>Resumo</h2>
        <div className={css["text"]}>
          { aboutme.curriculum.resume.map(text=>(<p key={text}>{text}</p>)) }
        </div>
        <button>Leia mais</button>
      </div>

      <div className={css["contacts"]}>
        <Email />
        <Telphone />
      </div>
    </section>
  );
}