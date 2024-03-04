import css from "./styles.module.scss";

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Root(props: Props) {
  return (
    <div className={`${css["root"]} ${props.className}`}>
      { props.children }
    </div>
  )
}