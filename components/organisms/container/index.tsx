import css from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function OrganismContainer(props: Props) {
  const className = props.className || "";

  return (
    <div className={`container ${css.root} ${className}`}>
      {props.children}
    </div>
  );
}
