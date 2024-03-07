import Image from 'next/image';
import css from './styles.module.scss'

import { Patrick_Hand } from '@next/font/google'
import Link from 'next/link';

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
          <Image src="/svg/icon/volume.svg" alt="Habilitar som" width={24} height={24} />
        </div>
        <div className={css["medias"]}>
          <Link href="https://www.linkedin.com/in/victorhdsp/">
            <Image src="/svg/medias/linkedin.svg" alt="LinkedIn" width={32} height={32} />
          </Link>
          <Link href="https://github.com/lkt226">
            <Image src="/svg/medias/github.svg" alt="Github" width={32} height={32} />
          </Link>
        </div>
      </div>
    </header>
  );
}