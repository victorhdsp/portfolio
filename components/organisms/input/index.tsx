interface Props {
  name?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function OrganismInput(props: Props) {
  const className = props.className || "";

  return (
    <div className={`input-group ${className}`}>
      <p>{props.name || props.placeholder}</p>
      <span className="input-item">
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onInput={props.onInput}
        />
        {props.icon && <span>{props.icon}</span>}
      </span>
    </div>
  );
}
