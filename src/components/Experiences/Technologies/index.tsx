import css from './styles.module.scss'

import Icon from '@/components/Default/Icon'
import IconsCarousel from '@/components/Default/IconsCarousel'
import Technology from "./Technology"

import * as HoverCard from '@radix-ui/react-hover-card';

import aboutme from '@/assets/data/aboutme'
import { FormEvent, useState } from 'react'

export default function Technologies () {
  const hardskills = aboutme.curriculum.hardskills
  const [filteredList, setFiltered] = useState(hardskills)

  const handleSearch = (event:FormEvent<HTMLInputElement>) => {
    const target = event.target
    const value = (target as HTMLInputElement).value

    if (value === '') {
      setFiltered(hardskills)
      return
    }

    const filtered = Object.keys(hardskills).filter((index) => {
      const skill = hardskills[index]
      const text = `${skill.name} ${skill.alt || ''}`
      return text.toLowerCase().includes(value.toLowerCase())
    })
    
    const filteredList: {[key:string]:any} = {}
    filtered.forEach((index) => {
      filteredList[index] = hardskills[index]
    })

    setFiltered(filteredList)
  }

  return (
    <div className={css["hard-skill"]}>
      <div className={css["title"]}>
        <h2>Hard skills</h2>

        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <span data-view className={css["trigger"]}>
              <Icon src="/svg/icon/search.svg" alt="Pesquisar HardSkill" size='medium' />
            </span>

          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content side='top'>
              <div className={css["content"]}>
                <p>Pesquisar</p>
                <input onInput={handleSearch} type="text" name="search-hardskill" id="search-hardskill" />
              </div>
              <HoverCard.Arrow />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
      <IconsCarousel>
        {
          Object.keys(filteredList).map((index) => {
            const skill = filteredList[index]
            return (
              <Technology key={index} src={`/svg/tech/${index}.svg`} skill={skill} />
            )
          })
        }
      </IconsCarousel>
    </div>
  )
}