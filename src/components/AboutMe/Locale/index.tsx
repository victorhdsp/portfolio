import Icon from '@/components/Default/Icon';
import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

import Link from 'next/link';

export default function Locale () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Icon
            src="/svg/icon/locale.svg" 
            alt="Localização" 
            size='medium' 
          />
        </span>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <Icon src="/svg/icon/map.svg" alt="Mapa" size='small' />
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