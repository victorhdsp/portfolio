import css from './styles.module.scss'

import * as Dialog from '@radix-ui/react-dialog';
import aboutme from '@/assets/data/aboutme'
import Icon from '@/components/Default/Icon';

export default function MoreResume() {
  const resume = aboutme.curriculum.description

  return (
    <Dialog.Root>
      <Dialog.Trigger className={css["trigger"]}>
        <p data-view >Leia mais</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className={css["content"]}>
          <Dialog.Title className={css["header"]}>
            <h2>Resumo</h2>
            <Dialog.Close asChild>
              <button className={css["close"]}>
                <Icon src="/svg/icon/close.svg" alt="Fechar dialog" size='medium' />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className={css["description"]}>
            { resume.map(text=>(<p key={text}>{text}</p>)) }
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}