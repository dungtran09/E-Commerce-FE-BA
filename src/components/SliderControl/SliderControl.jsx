import React, { memo } from "react";
import Slider from "react-slick";

const SliderControl = ({ productsEls, slidesToShow }) => {
  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settingsSlider}>{productsEls}</Slider>
    </>
  );
};

export default memo(SliderControl);
