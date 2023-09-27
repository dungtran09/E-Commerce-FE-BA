import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../../store/cartSlice";
import { formatNumber } from "../../utils/helper";
import icons from "../../utils/icons";
import path from "../../utils/path";

const SideBarCart = ({ showSidebar, setShowSidebar }) => {
  const { GrClose } = icons;

  const cartProducts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const onRemoveFromCart = (id) => {
    dispatch(removeProduct(id));
  };

  const cartProductEls = cartProducts?.map((product) => (
    <li className="flex py-6" key={product?._id}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border p-2 border-gray-200">
        <img
          src={product?.thumb}
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="cursor-pointer hover:opacity-70">
              <Link
                to={`/${path.PRODUCTS}/${product?.categoryName}/${product?.slug}/${product?._id}`}
                onMouseDown={() => setShowSidebar(!showSidebar)}
              >
                {product?.title}
              </Link>
            </h3>
            <p className="ml-4">{formatNumber(product?.price)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty 1</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-main hover:opacity-70"
              onClick={() => onRemoveFromCart(product?._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <>
      <div
        className={`top-0 right-0 w-[30vw] bg-white p-5 text-white shadow-lg fixed h-full z-50 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-sm font-medium uppercase text-gray-900">
                Shopping cart ({cartProducts?.length})
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <GrClose />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartProductEls}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{cartProductEls?.total || 0} VND</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-main px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-90"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center gap-1 text-sm text-gray-500">
              <p>or</p>
              <button className="font-medium text-main hover:opacity-70">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarCart;
