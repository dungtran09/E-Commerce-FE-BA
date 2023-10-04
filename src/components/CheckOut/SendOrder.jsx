import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStateContext } from "../../contexts/ContextProvider";
import { calcTotal } from "../../store/slices/cartSlice";
import { formatNumber } from "../../utils/helper";

const SendOrder = ({ user }) => {
  const { shipping } = useStateContext();

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartProducts, dispatch]);
  return (
    <>
      <div className="mt-10 px-4 pt-8 lg:mt-0">
        <p className="text-lg font-medium">Payment Details</p>
        <p className="text-gray-400 text-sm">
          Complete your order by providing your payment details.
        </p>
        <div className="">
          <form className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="firs_tName"
                name="first_name"
                defaultValue={user?.firstName}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                type="text"
                id="last_name"
                name="last_name"
                defaultValue={user?.lastName}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>

              <input
                type="text"
                id="address"
                name="address"
                defaultValue={user?.address}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="text"
                id="emain"
                name="email"
                defaultValue={user?.email}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>

              <input
                type="text"
                id="phone_number"
                name="phone_number"
                defaultValue={user?.phoneNumber}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
          </form>

          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">
                {formatNumber(cartProducts?.totalAmount)} VND
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">
                {formatNumber(shipping)} VND
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatNumber(cartProducts?.totalAmount) + formatNumber(shipping)}
              VND
            </p>
          </div>
        </div>
        <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
          Place Order
        </button>
      </div>
    </>
  );
};

export default SendOrder;
