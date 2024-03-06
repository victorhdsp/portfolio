import CopyToClipboard from '@/components/Default/CopyToClipboard';
import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

import Image from "next/image";
import Link from 'next/link';

export default function Email () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Image
          className={css["trigger"]}
          src="/svg/icon/email.svg" 
          alt="E-mail" 
          width={24} 
          height={24} 
          data-view
        />
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content align='start'>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <CopyToClipboard text="victorhugods.pereira@gmail.com" size={16} />
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