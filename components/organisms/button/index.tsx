import { Button, ButtonProps } from "@/components/ui/button";
import css from "./style.module.scss";

interface Props extends ButtonProps {
  cta?: string;
  icon?: React.ReactNode;
  variant?: "default" | "ghost" | "outline" | "link";
}

export default function OrganismButton(props: Props) {
  const className = props.className || "";

  return (
    <Button
      {...props}
      className={`${css.root} ${className}`}
      size="lg"
      variant={props.variant || "default"}
      data-variant={props.variant || "default"}
    >
      {props.cta && <p className="font-normal">{props.cta}</p>}
      {props.icon && <span>{props.icon}</span>}
    </Button>
  );
}
