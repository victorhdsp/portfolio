import css from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className={css["projects"]}>
      <h2>Projetos</h2>

      <div className={css["body"]}>
        <div className={css["item"]}>
          <Image src='/images/home/pixelite.png' alt='Pixelite' width={240} height={135}  />
          <h3 className='small'>Conversor de imagens</h3>
        </div>
        
        <div className={css["item"]}>
          <Image src='/images/home/vevalo.png' alt='Vevalo' width={240} height={135}  />
          <h3 className='small'>SaaS de precificação</h3>
        </div>

        <div className={css["item"]}>
          <Image src='/images/home/pixelite.png' alt='Pixelite' width={240} height={135}  />
          <h3 className='small'>Conversor de imagens</h3>
        </div>
      
      </div>
    </section>
  );
}