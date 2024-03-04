import css from './styles.module.scss'
import Image from "@/components/Personal/Image"

interface Props {
  src: string
  alt: string
  name: string
  resume: string
  link: string
}

export default function View(props:Props) {
  return (
    <div className={css["view"]}>
      <Image
        className={css["image"]} 
        src={props.src} 
        alt={props.alt} 
        width={500} 
        height={300} 
        isZoomed
      />
      <div className={css["text"]}>
        <h3>{props.name}</h3>
        <p>{props.resume}</p>
      </div>
      <a href={props.link}>
        <button className='button'>Acessar site</button>
      </a>
    </div>
  )
}