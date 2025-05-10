interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function OrganismCard(props: Props) {
  const className = props.className || "";

  return (
    <div className={`p-5 bg-gray-300/10 ${className}`}>
      {props.children}
    </div>
  );
}
