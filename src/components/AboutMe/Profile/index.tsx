import css from './styles.module.scss'
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";

export default function Profile () {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Image
          className={css["trigger"]}
          src="/svg/icon/profile.svg" 
          alt="Perfil" 
          width={24} 
          height={24} 
          data-view
        />
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content>
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

          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}