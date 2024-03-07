import css from './styles.module.scss'

import Icon from '@/components/Default/Icon'
import IconsCarousel from '@/components/Default/IconsCarousel'
import Softskill from "./Softskill"

import * as HoverCard from '@radix-ui/react-hover-card';

import aboutme from '@/assets/data/aboutme'
import { FormEvent, useState } from 'react'

export default function Softskills () {
  const softskills = aboutme.curriculum.softskills
  const [filteredList, setFiltered] = useState(softskills)

  const handleSearch = (event:FormEvent<HTMLInputElement>) => {
    const target = event.target
    const value = (target as HTMLInputElement).value

    if (value === '') {
      setFiltered(softskills)
      return
    }

    const filtered = Object.keys(softskills).filter((index) => {
      const skill = softskills[index]
      const text = `${skill.name} ${skill.alt || ''}`
      return text.toLowerCase().includes(value.toLowerCase())
    })
    
    const filteredList: {[key:string]:any} = {}
    filtered.forEach((index) => {
      filteredList[index] = softskills[index]
    })

    setFiltered(filteredList)
  }

  return (
    <div className={css["soft-skill"]}>
      <div className={css["title"]}>
        <h2>Soft skills</h2>
        
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <span data-view className={css["trigger"]}>
              <Icon src="/svg/icon/search.svg" alt="Pesquisar SoftSkill" size='medium' />
            </span>

          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content side='top'>
              <div className={css["content"]}>
                <p>Pesquisar</p>
                <input onInput={handleSearch} type="text" name="search-softskill" id="search-softskill" />
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
              <Softskill key={index} src={`/svg/softskills/${index}.svg`} skill={skill} />
            )
          })
        }
      </IconsCarousel>
    </div>
  )
}