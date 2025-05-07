import css from './layout.module.scss';

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout(props: HomeLayoutProps) {
	return (
        <div className={css.root}>
            {props.children}
        </div>
	);
}
