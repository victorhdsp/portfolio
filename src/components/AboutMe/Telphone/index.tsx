import CopyToClipboard from '@/components/Default/CopyToClipboard';
import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

import Link from 'next/link';
import Icon from '@/components/Default/Icon';

export default function Telphone () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Icon
            src="/svg/icon/telphone.svg" 
            alt="Telefone" 
            size='medium' 
          />
        </span>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content align='start'>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <CopyToClipboard text="+55 (21) 98930-6866" size="small" />
              <Link href="tel:+5521989306866">
                <p>+55 (21) 98930-6866</p>
              </Link>
            </span>
          </div>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}