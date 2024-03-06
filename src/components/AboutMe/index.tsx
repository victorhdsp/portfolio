import css from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';

import aboutme from '@/assets/data/aboutme'

export default function AboutMe() {
  return (
    <section className={css["about-me"]}>
      <div className={css["header"]}>
        <Image src='/images/home/victorhdsp.png' alt='Victor Hugo de Souza Pereira' width={420} height={420} />
        <span className={css["information"]}>
          <h1>{ aboutme.name }</h1>
          <Image src="/svg/icon/profile.svg" alt="Perfil" width={24} height={24} />
          <Image src="/svg/icon/locale.svg" alt="Localização" width={24} height={24} />
        </span>
      </div>

      <div className={css["resume"]}>
        <h2>Resumo</h2>
        <div className={css["text"]}>
          { aboutme.curriculum.resume.map(text=>(<p key={text}>{text}</p>)) }
        </div>
        <button data-view>Leia mais</button>
      </div>

      <div className={css["contacts"]}>
        <Image src="/svg/icon/email.svg" alt="E-mail" width={24} height={24} />
        <Image src="/svg/icon/telphone.svg" alt="Telefone" width={24} height={24} />
      </div>
    </section>
  );
}