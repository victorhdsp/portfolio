import css from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';

import IconsCarousel from '@/components/Default/IconsCarousel';

import aboutme from '@/assets/data/aboutme'
import Icon from '@/components/Default/Icon';

export default function CurrentProject() {
  const hardskills = aboutme.curriculum.hardskills

  return (
    <section className={css["current-project"]}>
      <div className={css["header"]}>
        <IconsCarousel>
          {
            Object.keys(hardskills).map((index) => {
              const skill = hardskills[index]
              return (
                <span key={index} className={css["technology"]}>
                  <Icon src={`/svg/tech/${index}.svg`} alt={skill.name} size='xlarge' />
                </span>
              )
            })
          }
        </IconsCarousel>
        <div className={css["types"]}>
          <button className={"option"}>Front-end</button>
          <button className={"option"}>Backend</button>
          <button className={"option"}>Plugin</button>
        </div>
      </div>

      <div className={css["body"]}>
        <Image className={css["image"]} src='/images/home/vevalo.png' alt='Vevalo' width={700} height={393} />
        <div className={css["text"]}>
          <h3>Contexto:</h3>
          <p>Lorem ipsum dolor sit amet. Sit quidem sapiente qui molestiae numquam At dolorem neque et iste animi est dolore reprehenderit quo dolore ipsum! A voluptas enim sit porro harum eum nesciunt explicabo sed reiciendis placeat est incidunt tempore et obcaecati voluptas in obcaecati provident. Qui voluptates ullam eum sint consequatur rem totam quia?</p>
        </div>
      </div>
    </section>
  );
}