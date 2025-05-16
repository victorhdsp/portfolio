"use client";

import css from './style.module.scss';
import HomeLayoutFloatingItem from './item';

interface HomeLayoutFloatingProps {
    container: React.RefObject<HTMLDivElement>;
}

export default function HomeLayoutFloating({container}: HomeLayoutFloatingProps) {
	return (
    <div className={css.floating}>
      <HomeLayoutFloatingItem
        container={container}
        src="/src/image/statue_1.png"
        alt="Hero"
        width={700}
        height={861}
        className={css.statue_1}
        y={"-30vh"}
        x={"-15%"}
      />
      <HomeLayoutFloatingItem
        container={container}
        src="/src/image/statue_2.png"
        alt="Hero"
        width={1400}
        height={1680}
        className={css.statue_2}
        y={"-25vh"}
        x={"-30%"}
      />
      <HomeLayoutFloatingItem
        container={container}
        src="/src/image/statue_3.png"
        alt="Hero"
        width={1400}
        height={1680}
        className={css.statue_3}
        y={"-50vh"}
        x={"10%"}
      />
      <HomeLayoutFloatingItem
        container={container}
        src="/src/image/statue_4.png"
        alt="Hero"
        width={1000}
        height={1000}
        className={css.statue_4}
        y={"-10vh"}
        x={"10%"}
      />
    </div>
	);
}
