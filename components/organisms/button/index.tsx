import { Button, ButtonProps } from "@/components/ui/button";

interface Props extends ButtonProps {
  cta?: string;
  icon?: React.ReactNode;
}

export default function OrganismButton(props: Props) {
  const className = props.className || "";

  return (
    <Button
      className={`gap-6 ${className}`}
      {...props}
    >
      {props.cta && <span>{props.cta}</span>}
      {props.icon && <span>{props.icon}</span>}
    </Button>
  );
}
