import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import css from "./styles.module.scss";

import Slider from "react-slick";

interface Props {
  children: React.ReactNode;
}

export default function IconsCarousel({children}: Props) {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
  };
  
  return (
    <div className={css["carousel"]}>
      <Slider {...settings}>
        { children }
      </Slider>
    </div>
  )
}