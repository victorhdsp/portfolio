import Icon from '@/components/Default/Icon';
import css from './styles.module.scss'
import * as HoverCard from '@radix-ui/react-hover-card';

export default function Profile () {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Icon
            src="/svg/icon/profile.svg" 
            alt="Perfil" 
            size='medium'
          />
        </span>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <Icon src="/svg/icon/man.svg" alt="Sexo masculino" size='small' />
              <p>Masculino</p>
            </span>
            <span className={css["item"]}>
              <Icon src="/svg/icon/calendar.svg" alt="Idade" size='small' />
              <p>29/12/1998</p>
            </span>
          </div>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}