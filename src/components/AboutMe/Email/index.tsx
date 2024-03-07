import CopyToClipboard from '@/components/Default/CopyToClipboard';
import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

import Link from 'next/link';
import Icon from '@/components/Default/Icon';

export default function Email () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Icon
            src="/svg/icon/email.svg" 
            alt="E-mail" 
            size='medium' 
          />
        </span>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content align='start'>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <CopyToClipboard text="victorhugods.pereira@gmail.com" size="small" />
              <Link href="mail:victorhugods.pereira@gmail.com">
                <p>victorhugods.pereira@gmail.com</p>
              </Link>
            </span>
          </div>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}