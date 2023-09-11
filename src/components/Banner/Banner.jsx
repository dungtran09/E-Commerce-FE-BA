import React from "react";
import sliderHome from "../../assets/slider-home.png";

const Banner = () => {
  return (
    <div className="w-full">
      <img
        src={sliderHome}
        alt="slider home"
        className="h-[432px] w-full object-cover"
      />
    </div>
  );
};

export default Banner;
