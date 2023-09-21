import React from "react";
import banner1 from "../../assets/Home-banner/banner-1.jpg";
import banner2 from "../../assets/Home-banner/banner-2.jpg";
import banner3 from "../../assets/Home-banner/banner-3.jpg";

import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="w-full border">
      <div>
        <img src={banner2} />
      </div>
    </div>
  );
};

export default Banner;
