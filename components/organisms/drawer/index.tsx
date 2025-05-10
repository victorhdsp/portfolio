import { DrawerContent } from "@/components/ui/drawer";
import css from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function OrganismDrawer(props: Props) {
  const className = props.className || "";

  return (
    <DrawerContent className={`${css.root} ${className}`}>
      <div className={css.handle}/>
      <div className={css.content}>
        { props.children }
      </div>
    </DrawerContent>
  );
}
