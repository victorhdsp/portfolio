import Image from 'next/image';
import css from './styles.module.scss'

import { Patrick_Hand } from '@next/font/google'
import Link from 'next/link';
import Icon from '@/components/Default/Icon';

const patrick_hand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
})

export default function Header() {
  return (
    <header className={css["header"]}>
      <h1 className={`${css["logo"]} ${patrick_hand.className}`}>VictorH.</h1>

      <div className={css["actions"]}>
        <div className={css["music"]}>
          <Icon src="/svg/icon/volume.svg" alt="Habilitar som" size='medium' />
        </div>
        <div className={css["medias"]}>
          <Link href="https://www.linkedin.com/in/victorhdsp/">
            <Icon src="/svg/medias/linkedin.svg" alt="LinkedIn" size='large' />
          </Link>
          <Link href="https://github.com/lkt226">
            <Icon src="/svg/medias/github.svg" alt="Github" size='large' />
          </Link>
        </div>
      </div>
    </header>
  );
}