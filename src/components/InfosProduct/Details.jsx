import React, { useState } from "react";
import { formatNumber, calcRating } from "../../utils/helper";
import icons from "../../utils/icons";
import Button from "../Button/Button";
import Policy from "../Policy/Policy";
import CounterQuanrity from "./CounterQuanrity";
import ImagesDetails from "./ImagesDetails";

const Details = ({ product }) => {
  const { GoDotFill, BsFillCartCheckFill } = icons;

  const onHandlerImg = (image) => {
    setImgThumb(image);
  };
  const [imgThumb, setImgThumb] = useState(product?.thumb);

  const imgEls = product?.images?.map((image, index) => (
    <div key={index} className="flex w-full">
      <img
        src={image}
        alt="image"
        className="w-[143px] h-[143px] border object-cover cursor-pointer hover:border-main"
        onClick={() => onHandlerImg(image)}
      />
    </div>
  ));

  const descriptionEls = product?.description?.map((des, index) => (
    <span key={index} className="flex justify-start items-center gap-2">
      <GoDotFill /> <p>{des}</p>
    </span>
  ));

  const colorEls = product?.colors?.map((color, index) => (
    <span
      key={index}
      className="flext justify-start items-center text-[13px] uppercase border p-2 cursor-pointer hover:text-main hover:border-main"
    >
      {color}
    </span>
  ));

  return (
    <div className="flex m-auto w-main">
      <div className="w-2/5 flex flex-col gap-5">
        <ImagesDetails imgEls={imgEls} imgThumb={imgThumb} product={product} />
      </div>
      <div className="w-2/5">
        <div className="flex flex-col justify-center items-start gap-3">
          <h3 className="text-[30px] font-semibold">
            {formatNumber(product?.price)} VND
          </h3>
          <div className="flex">{calcRating(product?.totalRatings)}</div>
          <div className="text-sm text-gray-800 flex flex-col gap-1">
            {descriptionEls}
          </div>
          <div className="flex gap-2">
            <label className="font-semibold text-sm mt-2">Color: </label>
            <div className="flex gap-2 justify-start items-center pl-12">
              {colorEls}
            </div>
          </div>
          <div className="flex ga-2">
            <label className="font-semibold text-sm mt-3">Quantity: </label>
            <div className="flex justify-start pl-8">
              <CounterQuanrity />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <Button name="Add to cart" icon={<BsFillCartCheckFill />} />
          </div>
        </div>
      </div>
      <div className="flex-2 flex flex-col justify-start  gap-2">
        <Policy />
      </div>
    </div>
  );
};

export default Details;
