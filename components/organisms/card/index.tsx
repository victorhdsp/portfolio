import css from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function OrganismCard(props: Props) {
  const className = props.className || "";

  return (
    <div className={`${css.root} ${className}`}>
      {props.children}
    </div>
  );
}
