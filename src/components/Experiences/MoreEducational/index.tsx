import css from './styles.module.scss'

import * as Dialog from '@radix-ui/react-dialog';
import Icon from '@/components/Default/Icon';

import aboutme from '@/assets/data/aboutme'

export default function MoreEducational () {
  const experiences = aboutme.curriculum.experiences.education

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
            <h2>Estudos, cursos e certificados</h2>

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
                  <span><b>{ experience.institution }</b> - <p>{ experience.period }</p></span>
                  <h3>{ experience.course }</h3>
                  <ul>
                    { experience.learning.map((learned, index) => <li key={index}>{ learned }</li>) }
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