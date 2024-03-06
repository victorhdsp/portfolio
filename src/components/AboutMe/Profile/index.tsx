import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';
import Image from "next/image";

export default function Profile () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Image
          className={css["trigger"]}
          src="/svg/icon/profile.svg" 
          alt="Perfil" 
          width={24} 
          height={24} 
          data-view
        />
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <Image src="/svg/icon/man.svg" alt="Sexo masculino" width={16} height={16} />
              <p>Masculino</p>
            </span>
            <span className={css["item"]}>
              <Image src="/svg/icon/calendar.svg" alt="Idade" width={16} height={16} />
              <p>29/12/1998</p>
            </span>
          </div>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}