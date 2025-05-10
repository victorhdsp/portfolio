interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function OrganismContainer(props: Props) {
  const className = props.className || "";

  return (
    <div className={`container h-[90vh] ${className}`}>
      {props.children}
    </div>
  );
}
