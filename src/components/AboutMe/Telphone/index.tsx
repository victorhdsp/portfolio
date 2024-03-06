import CopyToClipboard from '@/components/Default/CopyToClipboard';
import css from './styles.module.scss'
import * as Popover from "@radix-ui/react-popover";

import Image from "next/image";
import Link from 'next/link';

export default function Telphone () {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Image
          className={css["trigger"]}
          src="/svg/icon/telphone.svg" 
          alt="Telefone" 
          width={24} 
          height={24} 
          data-view
        />
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content align='start'>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <CopyToClipboard text="+55 (21) 98930-6866" size={16} />
              <Link href="tel:+5521989306866">
                <p>+55 (21) 98930-6866</p>
              </Link>
            </span>
          </div>

          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}