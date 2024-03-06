import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

import Image from "next/image";
import Link from 'next/link';

export default function Locale () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Image
          className={css["trigger"]}
          src="/svg/icon/locale.svg" 
          alt="Localização" 
          width={24} 
          height={24} 
          data-view
        />
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <Image src="/svg/icon/map.svg" alt="Mapa" width={16} height={16} />
              <Link href="https://maps.app.goo.gl/VFSNv7yoR7qb5BYW8">
                <p>São Lourenço, Niterói - RJ</p>
              </Link>
            </span>
          </div>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}