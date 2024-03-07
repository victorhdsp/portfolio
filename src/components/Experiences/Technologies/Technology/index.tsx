import css from './styles.module.scss'

import * as HoverCard from '@radix-ui/react-hover-card';

import { HardSkill } from "@/assets/data/hardskills"
import Icon from '@/components/Default/Icon';

interface Props {
  src: string,
  skill: HardSkill
}

export default function Technology({ src, skill }: Props) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Icon src={src} alt={skill.name} size='xlarge' />
        </span>

      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className={css["content"]}>
            <span className={css["item"]}>
              <p>{skill.name}</p>
            </span>
          </div>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}