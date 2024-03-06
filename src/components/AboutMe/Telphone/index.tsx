import CopyToClipboard from '@/components/Default/CopyToClipboard';
import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

import Image from "next/image";
import Link from 'next/link';

export default function Telphone () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Image
          className={css["trigger"]}
          src="/svg/icon/telphone.svg" 
          alt="Telefone" 
          width={24} 
          height={24} 
          data-view
        />
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content align='start'>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <CopyToClipboard text="+55 (21) 98930-6866" size={16} />
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