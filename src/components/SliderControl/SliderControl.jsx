import React, { memo } from "react";
import Slider from "react-slick";

const SliderControl = ({ productsEls }) => {
  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settingsSlider}>{productsEls}</Slider>
    </>
  );
};

export default memo(SliderControl);
