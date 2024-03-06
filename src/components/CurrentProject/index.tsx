import css from './styles.module.scss'
import Image from '@/components/Default/Image';
import Link from 'next/link';

export default function CurrentProject() {
  return (
    <section className={css["current-project"]}>
      <div className={css["header"]}>
        <div className={css["technologies"]}>
          <span className="item">
            <Image src="/svg/tech/js.svg" alt="Javascript" width={36} height={36} />
          </span>
        </div>
        <div className={css["types"]}>
          <button className={"option"}>Front-end</button>
          <button className={"option"}>Backend</button>
          <button className={"option"}>Plugin</button>
        </div>
      </div>

      <div className={css["body"]}>
        <Image src='images/home/vevalo.png' alt='Vevalo' />
        <div className={css["text"]}>
          <h3>Contexto:</h3>
          <p>Lorem ipsum dolor sit amet. Sit quidem sapiente qui molestiae numquam At dolorem neque et iste animi est dolore reprehenderit quo dolore ipsum! A voluptas enim sit porro harum eum nesciunt explicabo sed reiciendis placeat est incidunt tempore et obcaecati voluptas in obcaecati provident. Qui voluptates ullam eum sint consequatur rem totam quia?</p>
        </div>
      </div>
    </section>
  );
}