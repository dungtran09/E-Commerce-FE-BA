import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ImagesDetails = ({ colors, thumb }) => {
  const [imgThumb, setImgThumb] = useState(thumb);

  const onHandlerImg = (image) => {
    setImgThumb(image);
  };

  useEffect(() => {
    setImgThumb(thumb);
  }, [thumb]);

  const imgEls = colors?.map((color, index) => (
    <div key={index} className="flex-1 flex-wrap w-full ">
      <img
        src={color?.image}
        alt="image"
        className="border object-contain hover:border-main p-3 overflow-hidden cursor-pointer"
        onClick={() => onHandlerImg(color?.image)}
      />
    </div>
  ));

  return (
    <>
      <div className="w-full">
        <div className="w-[100%] h-[100%] p-3 flex justify-center items-center border hover:border-main">
          <img src={imgThumb} className="object-cover cursor-pointer" />
        </div>
      </div>
      <div className="w-[100%]">
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
