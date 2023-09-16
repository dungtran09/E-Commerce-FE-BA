import React from "react";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";

const ImagesDetails = ({ imgEls, imgThumb, product }) => {
  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full">
        <div className="w-[458px] h-[458px] border object-cover">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "image",
                isFluidWidth: true,
                src: imgThumb || product?.images[0],
              },
              largeImage: {
                src: imgThumb || product?.images[0],
                width: 1200,
                height: 1200,
              },
            }}
          />
        </div>
      </div>
      <div className="w-[458px]">
        <Slider {...settingsSlider}>{imgEls}</Slider>
      </div>
    </>
  );
};

export default ImagesDetails;
