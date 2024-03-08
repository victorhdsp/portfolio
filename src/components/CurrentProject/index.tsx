import css from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';

import IconsCarousel from '@/components/Default/IconsCarousel';

import aboutme from '@/assets/data/aboutme'
import Icon from '@/components/Default/Icon';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/app/store";
import { selectFilterWord } from '@/features/projects/projectSlice';

export default function CurrentProject() {
  const hardskills = aboutme.curriculum.hardskills
  const projects = aboutme.projects

  const [currentProject] = useSelector((state: RootState) => [state.project.current])
  const dispatch = useDispatch()

  const handleSelectFilter = (word: string) => {
    dispatch(selectFilterWord(word))
  }

  return (
    <section className={css["current-project"]}>
      <div className={css["header"]}>
        <IconsCarousel>
          {
            Object.keys(hardskills).map((index) => {
              const skill = hardskills[index]
              return (
                <span key={index} className={css["technology"]} onClick={() => handleSelectFilter(skill.name)}>
                  <Icon src={`/svg/tech/${index}.svg`} alt={skill.name} size='xlarge' />
                </span>
              )
            })
          }
        </IconsCarousel>
        <div className={css["types"]}>
          <button className={"option"} onClick={() => handleSelectFilter('front-end')}>Front-end</button>
          <button className={"option"} onClick={() => handleSelectFilter('backend')}>Backend</button>
          <button className={"option"} onClick={() => handleSelectFilter('plugin')}>Plugin</button>
        </div>
      </div>

      <div className={css["body"]}>
        <Image className={css["image"]} src={`/images/projects/${currentProject}.png`} alt={currentProject} width={700} height={393} />
        <div className={css["text"]}>
          <h3>Descrição:</h3>
          <p>{ projects[currentProject].description }</p>
        </div>
      </div>
    </section>
  );
}