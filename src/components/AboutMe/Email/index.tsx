import CopyToClipboard from '@/components/Default/CopyToClipboard';
import css from './styles.module.scss'
import * as Popover from "@radix-ui/react-popover";

import Image from "next/image";
import Link from 'next/link';

export default function Email () {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Image
          className={css["trigger"]}
          src="/svg/icon/email.svg" 
          alt="E-mail" 
          width={24} 
          height={24} 
          data-view
        />
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content align='start'>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <CopyToClipboard text="victorhugods.pereira@gmail.com" size={16} />
              <Link href="mail:victorhugods.pereira@gmail.com">
                <p>victorhugods.pereira@gmail.com</p>
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