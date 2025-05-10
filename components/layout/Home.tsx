import Image from 'next/image';
import css from './layout.module.scss';

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout(props: HomeLayoutProps) {
	return (
        <div className={css.root}>
            {props.children}
            <div className={css.background}>
              <Image
                src="/src/image/background.png"
                alt="Hero"
                width={1000}
                height={1000}
              />
            </div>
        </div>
	);
}
