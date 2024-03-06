import css from './styles.module.scss'

import Image from 'next/image'
import * as HoverCard from '@radix-ui/react-hover-card';

import { HardSkill } from "@/assets/data/hardskills"

interface Props {
  src: string,
  skill: HardSkill
}

export default function Technology({ src, skill }: Props) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <span data-view className={css["trigger"]}>
          <Image src={src} alt={skill.name} width={36} height={36} />
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