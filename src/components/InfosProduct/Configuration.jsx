import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { calcRating, formatNumber } from "../../utils/helper";
import icons from "../../utils/icons";
import Button from "../Button/Button";
import CounterQuantity from "./CounterQuantity";
const Configuration = ({ product }) => {
  const dispatch = useDispatch();

  const { GoDotFill, BsFillCartCheckFill } = icons;
  const onAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const colorEls = product?.variants[0]?.colors?.map((color, index) => (
    <span
      key={index}
      className="flext justify-start items-center text-[13px] uppercase border p-2 cursor-pointer hover:text-main hover:border-main"
    >
      {color?.name}
    </span>
  ));

  const storeCapacityEls = product?.variants[0]?.storage_capacity?.map(
    (el, index) => (
      <span
        key={index}
        className="flext justify-start items-center text-[13px] uppercase border p-2 cursor-pointer hover:text-main hover:border-main"
      >
        {el}
      </span>
    ),
  );

  const configurationEls = product?.configuration?.map((config, index) => (
    <span key={index} className="flex justify-start items-center gap-2">
      <GoDotFill />{" "}
      <p>
        {JSON.stringify(config)
          .split(/["{}_]/)
          .join(" ")
          .toString()
          .toUpperCase()}
      </p>
    </span>
  ));

  return (
    <>
      <div className="flex flex-col justify-center items-start gap-3">
        <h3 className="text-[30px] font-semibold">
          {formatNumber(product?.price)} VND
        </h3>
        <div className="flex">{calcRating(product?.totalRatings)}</div>
        <div className="text-sm text-gray-800 flex flex-col gap-1">
          {configurationEls}
        </div>
        <div className="flex gap-2">
          <label className="font-semibold text-sm mt-2">Color: </label>
          <div className="flex gap-2 justify-start items-center pl-12">
            {colorEls}
          </div>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold text-sm mt-2">
            Storage capacity:
          </label>
          <div className="flex gap-2 justify-start items-center pl-12">
            {storeCapacityEls}
          </div>
        </div>
        <div className="flex ga-2">
          <label className="font-semibold text-sm mt-3">Quantity: </label>
          <div className="flex justify-start pl-8">
            <CounterQuantity />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Button
            name="Add to cart"
            icon={<BsFillCartCheckFill />}
            onClickHandler={() => onAddToCart(product)}
          />
        </div>
      </div>
    </>
  );
};

export default Configuration;
