import css from "./styles.module.scss"
import {Image, ImageProps} from "@nextui-org/react";

interface Props extends ImageProps {
}

export default function ImageComponent(props: Props) {
  return (
    <div 
      className={`${css["root"]} ${props.className}`}
      data-iszoomed={props.isZoomed}
    >
      <Image 
        {...props} 
        className={css["img"]} 
        width="100%" 
      />
    </div>
  )
}