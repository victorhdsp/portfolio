import css from './styles.module.scss'
import { useState } from 'react'

import * as HoverCard from '@radix-ui/react-hover-card';

import { Softskill } from "@/assets/data/softskills"
import Icon from '@/components/Default/Icon';

interface Props {
  src: string,
  skill: Softskill
}

export default function SoftSkill({ src, skill }: Props) {

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Icon src={src} alt={skill.name} size='medium' />
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