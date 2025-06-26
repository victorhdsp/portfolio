import { Button as ShadcnButton } from '@/components/ui/button'
import css from './style.module.scss';
import { cn } from '@/lib/utils';

interface ButtonProps {
    leftIcon?: React.ReactNode;
    children: React.ReactNode;
    variant?: "secondary" | "default" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    name?: string;
}

export default function Button(props: ButtonProps) {
    const { leftIcon, children, variant = 'default' } = props;
    
    return (
        <ShadcnButton
            variant={variant}
            className={cn(css.root, css.effect, props.className)}
            type={props.type || 'button'}
            name={props.name}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
        </ShadcnButton>
    )
}