import css from './styles.module.scss'
import Image, { ImageProps } from 'next/image'

interface Props extends ImageProps{
  size: 'small' | 'medium' | 'large' | 'xlarge'
}

export default function Icon ({size, ...props}:Props) {
  const sizes = {
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 36
  }

  return (
    <Image {...props} className={`${css["icon"]} ${props.className}`} data-size={size} width={sizes[size]} height={sizes[size]} />
  )
}