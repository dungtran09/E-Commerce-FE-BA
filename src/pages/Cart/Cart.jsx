import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, PortalToggle } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  addToCart,
  calcTotal,
  clearCart,
  decreaseCart,
  removeItem,
} from "../../store/slices/cartSlice";
import { formatNumber } from "../../utils/helper";
import icons from "../../utils/icons";
import path from "../../utils/path";
import statusCode from "../../utils/statusCode";

const Cart = () => {
  const { BsArrowLeft, BiMinus, BsPlusLg } = icons;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.carts);
  const user = useSelector((state) => state.user);
  const [isUserLogIn, setIsUserLogin] = useState(false);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartProducts, dispatch]);

  const onHandlerRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const onHandlerDecreaseItem = (id) => {
    dispatch(decreaseCart(id));
  };

  const onHandlerIncreaseItem = (product) => {
    dispatch(addToCart(product));
  };

  const onHandlerClearCart = () => {
    dispatch(clearCart());
  };

  const { shipping, setShipping } = useStateContext();

  const onHandlerSelectOptions = (e) => {
    setShipping(Number(e.target.value));
  };

  const showStatus = () => {
    setIsUserLogin(true);
  };

  const hideStatus = () => {
    setIsUserLogin(false);
  };

  const onNavigateToPayment = () => {
    if (user?.isLoggedIn) {
      navigate(`/${path.PAYMENT}`, { replace: true });
    } else {
      setIsUserLogin(true);
    }
  };
  const cartProductEls = cartProducts?.listItems?.map((product) => (
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
            onClick={() => onHandlerRemoveFromCart(product?._id)}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <div
          onClick={() => onHandlerDecreaseItem(product?._id)}
          className="fill-current text-gray-600 w-3 m-2 cursor-pointer"
        >
          <BiMinus />
        </div>
        <input
          className="mx-2 border text-center w-16"
          value={product?.quantity || 1}
          type="text"
          onChange={() => {}}
        />
        <div
          onClick={() => onHandlerIncreaseItem(product)}
          className="fill-current text-gray-600 w-3 m-2 cursor-pointer"
        >
          <BsPlusLg />
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {formatNumber(product?.price)} VND
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {formatNumber(product?.price * product?.quantity)} VND
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
              ({cartProducts?.listItems?.length}) Items
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
          {cartProducts?.listItems?.length !== 0 && (
            <Button
              name="Clear All"
              style="bg-gray-300 hover:opacity-70 px-5 py-2 mt-4 round-sm text-sm text-gray-700 uppercase"
              onClickHandler={onHandlerClearCart}
            />
          )}
          <Link
            to={`/${path.HOME}`}
            className="flex justify-start items-center gap-2 font-semibold text-main hover:opacity-70 text-sm mt-10"
          >
            <BsArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
        </div>
        {cartProducts?.listItems?.length !== 0 && (
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items ({cartProducts?.listItems?.length | 0})
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select
                className="block p-2 text-gray-600 w-full text-sm"
                onClick={(e) => onHandlerSelectOptions(e)}
              >
                <option value={10000}>Standard shipping - 10.000</option>
                <option value={12000}> GHTK - 12.000</option>
                <option value={13000}> GHN - 13.000</option>
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
            <Button
              name="Apply"
              style="bg-gray-500 hover:opacity-70 px-5 py-2 text-sm text-white uppercase"
            />
            <div className="border-t mt-8">
              <div className="flex justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span className="text-main font-semibold">
                  {formatNumber(cartProducts?.totalAmount + shipping)} VND
                </span>
              </div>
              <Button name="Check Out" onClickHandler={onNavigateToPayment} />
              {isUserLogIn && (
                <PortalToggle
                  status={statusCode.ERROR}
                  message="Please login to payment process."
                  showStatus={showStatus}
                  hideStatus={hideStatus}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
