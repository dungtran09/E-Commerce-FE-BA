import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/helper";
import PaymentDetails from "./PaymentDetails";
import SendOrder from "./SendOrder";

const CheckOut = () => {
  const [paymentByCreditCardMode, setPaymentByCreditCardMode] = useState(false);
  const [sendOrderMode, setSendOrderMode] = useState(true);

  const cartProducts = useSelector((state) => state.carts);

  const handlerSendOrderMode = () => {
    setPaymentByCreditCardMode(false);
    setSendOrderMode(true);
  };

  const handlercreditcardmode = () => {
    setSendOrderMode(false);
    setPaymentByCreditCardMode(true);
  };

  const itemEls = cartProducts?.listItems?.map((item) => (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={item?.thumb}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{item?.title}</span>
        <span class="float-right text-sm text-gray-400">
          Quantity: {item?.quantity}
        </span>
        <p className="mt-auto text-main text-sm font-light">
          {formatNumber(item?.price)} VND
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-full">
        <div className="w-main pb-5 bg-gray-50 m-auto grid lg:grid-cols-2">
          <div className="px-4 pt-8">
            <p className="text-lg font-medium">Order Summary</p>
            <p className="text-gray-400 text-sm">
              Check your items. And select a suitable shipping method.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {itemEls}
            </div>

            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <form className="mt-5 grid gap-6">
              <div className="relative" onClick={() => handlercreditcardmode()}>
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Fedex Delivery</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative" onClick={() => handlercreditcardmode()}>
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <img
                    className="w-14 object-contain"
                    src="https://componentland.com/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Fedex Delivery</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative" onClick={() => handlerSendOrderMode()}>
                <input
                  className="peer hidden"
                  id="radio_3"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_3"
                >
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Payment when recived
                    </span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>
          {paymentByCreditCardMode && <PaymentDetails />}
          {sendOrderMode && <SendOrder />}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
