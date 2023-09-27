import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import { removeProduct } from "../../store/cartSlice";
import { formatNumber } from "../../utils/helper";
import icons from "../../utils/icons";

const Cart = () => {
  const { BsArrowLeft } = icons;
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.carts);

  const onRemoveFromCarts = (id) => {
    console.log(id);
    dispatch(removeProduct(id));
  };

  console.log(cartProducts);

  const cartProductEls = cartProducts?.map((product) => (
    <div
      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 "
      key={product?._id}
    >
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24 object-contain" src={product?.thumb} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product?.brandName}</span>
          <span className="text-gray-700 text-xs">{product?.title}</span>
          <span
            className="font-semibold hover:opacity-70 text-main text-xs cursor-pointer"
            onClick={() => onRemoveFromCarts(product?._id)}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <div className="fill-current text-gray-600 w-3 m-2 cursor-pointer">
          -
        </div>
        <input className="mx-2 border text-center w-8" value={1} type="text" />
        <div className="fill-current text-gray-600 w-3 m-2 cursor-pointer">
          +
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {formatNumber(product?.price)} VND
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {formatNumber(product?.price)} VND
      </span>
    </div>
  ));

  return (
    <>
      <div className="w-main flex border my-5">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-xl">Shopping Cart</h1>
            <h2 className="font-semibold text-xl">
              ({cartProducts?.length}) Items
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cartProductEls}
          <a
            href="#"
            className="flex justify-start items-center gap-2 font-semibold text-main hover:opacity-70 text-sm mt-10"
          >
            <BsArrowLeft size={20} />
            <span>Continue Shopping</span>
          </a>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items ({cartProducts?.length | 0})
            </span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-gray-500 hover:opacity-70 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <Button name="Check Out" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
