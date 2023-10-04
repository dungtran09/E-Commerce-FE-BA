import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  calcTotal,
  decreaseCart,
} from "../../store/slices/cartSlice";
import { calcRating, formatNumber } from "../../utils/helper";
import icons from "../../utils/icons";
import Button from "../Button/Button";

const Configuration = ({ product }) => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.carts);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(calcTotal());
    const item = cartProducts?.listItems?.find(
      (item) => item?._id === product?._id,
    );
    if (item) {
      setQuantity(item?.quantity);
    }
  }, [cartProducts, dispatch]);

  const { GoDotFill, BsFillCartCheckFill } = icons;
  const onAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const onHandlerDecreaseItem = (id) => {
    dispatch(decreaseCart(id));
  };

  const onHandlerIncreaseItem = (product) => {
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
            <div className="flex">
              <button
                className="flex border p-2 bg-gray-100 hover:bg-main hover:text-white"
                onClick={() => onHandlerDecreaseItem(product?._id)}
              >
                -
              </button>
              <span className="border-y p-2 bg-gray-100 flex justify-center items-center w-[50px]">
                <p>{quantity}</p>
              </span>
              <button
                className="flex border p-2 bg-gray-100 hover:bg-main hover:text-white"
                onClick={() => onHandlerIncreaseItem(product)}
              >
                +
              </button>
            </div>
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
