import css from './styles.module.scss'

import * as Dialog from '@radix-ui/react-dialog';
import Icon from '@/components/Default/Icon';

import aboutme from '@/assets/data/aboutme'

export default function MoreProfessional () {
  const experiences = aboutme.curriculum.experiences.professional

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <span data-view className={css["trigger"]}>
          <Icon src="/svg/icon/more.svg" alt="Mais experiências" size='medium' />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className={css["content"]}>
          <Dialog.Title className={css["header"]}>
            <h2>Experiências profissionais</h2>

            <Dialog.Close asChild>
              <button className={css["close"]}>
                <Icon src="/svg/icon/close.svg" alt="Fechar dialog" size='medium' />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className={css["body"]}>
            {
              experiences.map((experience, index) => (
                <div className={css["item"]} key={index}>
                  <span><b>{ experience.company }</b> - <p>{ experience.period }</p></span>
                  <h3>{ experience.role }</h3>
                  <ul>
                    { experience.tasks.map((task, index) => <li key={index}>{ task }</li>) }
                  </ul>
                </div>
              ))
            }
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}