import React, { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import PropTypes from "prop-types";

const ImagesDetails = ({ images, thumb }) => {
  const [imgThumb, setImgThumb] = useState(thumb);

  const onHandlerImg = (image) => {
    setImgThumb(image);
  };

  useEffect(() => {
    setImgThumb(thumb);
  }, [thumb]);

  const imgEls = images?.map((image, index) => (
    <div key={index} className="flex-1 flex-wrap w-full ">
      <img
        src={image}
        alt="image"
        className="w-[100%] h-[100%] border object-cover hover:border-main overflow-hidden cursor-pointer"
        onClick={() => onHandlerImg(image)}
      />
    </div>
  ));

  return (
    <>
      <div className="w-full">
        <div className="w-[458px] h-[460px] flex justify-center items-center border hover:border-main">
          <InnerImageZoom
            src={imgThumb}
            zoomSrc={imgThumb}
            className="w-[100%] h-[100%] object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[458px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
          {imgEls}
        </div>
      </div>
    </>
  );
};

ImagesDetails.defaultProps = {
  thumb: "This props has no image.",
  images: [],
};

ImagesDetails.propTypes = {
  images: PropTypes.array.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default ImagesDetails;
