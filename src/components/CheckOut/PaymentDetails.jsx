import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStateContext } from "../../contexts/ContextProvider";
import { calcTotal } from "../../store/slices/cartSlice";
import {
  fieldIsEmpty,
  formatNumber,
  isBetween,
  isEmailValid,
} from "../../utils/helper";
import icons from "../../utils/icons";
import InputField from "../InputField/InputField";

const PaymentDetails = () => {
  const { FiAtSign, AiOutlineIdcard, AiFillCreditCard } = icons;

  const { shipping } = useStateContext();

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.carts);
  const { userInfo: user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartProducts, dispatch]);

  /*---Handler inputs form---*/
  const [userProfile, setUserProfile] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    address: user?.address[0] || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
  });

  const [isFirstNameErr, setFistNameErr] = useState(false);
  const [isLastNameErr, setLastNameErr] = useState(false);
  const [isAddressErr, setAddressErr] = useState(false);
  const [isEmailErr, setEmailErr] = useState(false);
  const [isPhoneErr, setPhoneErr] = useState(false);
  /*--------------------------*/

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);

  // Using for:  disabled button login or signup if All fields invalid
  const [fielsIsValid, setFieldsIsValid] = useState(false);
  const [messege, setMessage] = useState("");

  const inputsProfile = [
    {
      id: 1,
      value: userProfile?.firstName,
      setValue: setUserProfile,
      keyName: "firstName",
      fieldName: "First Name",
      type: "text",
      errMsg:
        "First name should be 4-35 character and should't include any special character.",
      isErr: isFirstNameErr,
    },
    {
      id: 2,
      value: userProfile?.lastName,
      setValue: setUserProfile,
      keyName: "lastName",
      fieldName: "Last Name",
      type: "text",
      errMsg:
        "Last name should be 4-35 character and should't include any special character.",
      isErr: isLastNameErr,
    },
    {
      id: 3,
      value: userProfile?.address,
      setValue: setUserProfile,
      keyName: "address",
      fieldName: "Your Address",
      type: "text",
      errMsg: "Address is required",
      isErr: isAddressErr,
    },
    {
      id: 4,
      value: userProfile?.email,
      setValue: setUserProfile,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: isEmailErr,
    },
    {
      id: 5,
      value: userProfile?.phone,
      setValue: setUserProfile,
      keyName: "phone",
      fieldName: "Phone Number",
      type: "text",
      errMsg: "Phone number is required",
      isErr: isPhoneErr,
    },
  ];

  const inputEls = inputsProfile.map((input) => (
    <InputField key={input?.id} {...input} />
  ));

  useEffect(() => {
    setFistNameErr(!isBetween(userProfile?.firstName?.length, 4, 35));
    setLastNameErr(!isBetween(userProfile?.lastName?.length, 4, 35));
    setAddressErr(fieldIsEmpty(userProfile?.address));
    setEmailErr(!isEmailValid(userProfile?.email));
    setPhoneErr(fieldIsEmpty(userProfile?.phone));
    if (
      !isFirstNameErr &&
      !isLastNameErr &&
      !isEmailErr &&
      !isPhoneErr &&
      !isAddressErr
    ) {
      setFieldsIsValid(true);
    } else {
      setFieldsIsValid(false);
    }
  }, [
    userProfile,
    isFirstNameErr,
    isLastNameErr,
    isEmailErr,
    isPhoneErr,
    isAddressErr,
  ]);

  const showStatus = () => {
    setStatus(true);
  };

  const hideStatus = () => {
    setStatus(false);
  };

  const onClickHandler = async (e) => {
    e.preventDefault();

    // setIsLoading(true);
    //
    // const response = await apiSignup(userSignup);
    // if (response?.status === statusCode.SUCCESS) {
    //   setIsLoading(false);
    //   setMessage("Sinup successfully. Please login to goto Home Page.");
    //   setInfos(response);
    //   setStatus(true);
    //   const delayDebounceFn = setTimeout(() => {
    //     navigateToLogin();
    //   }, 3000);
    //
    //   return () => clearTimeout(delayDebounceFn);
    // } else {
    //   setMessage("The Email has been registered, Please try choose another.");
    //   setIsLoading(false);
    //   setInfos(response);
    //   setStatus(true);
    // }
  };

  return (
    <>
      <div className="mt-10 px-4 pt-8 lg:mt-0">
        <p className="text-lg font-medium">Payment Details</p>
        <p className="text-gray-400 text-sm">
          Complete your order by providing your payment details.
        </p>
        <div className="mt-5">
          <div className="w-full">{inputEls}</div>
          <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Holder
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <AiOutlineIdcard />
            </div>
          </div>
          <label
            htmlFor="card-no"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Details
          </label>
          <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                type="text"
                id="card-no"
                name="card-no"
                className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <AiFillCreditCard />
              </div>
            </div>
            <input
              type="text"
              name="credit-expiry"
              className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/YY"
            />
            <input
              type="text"
              name="credit-cvc"
              className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC"
            />
          </div>
          <label
            htmlFor="billing-address"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Billing Address
          </label>
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-shrink-0 sm:w-7/12">
              <input
                type="text"
                id="billing-address"
                name="billing-address"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  className="h-4 w-4 object-contain"
                  src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                  alt=""
                />
              </div>
            </div>
            <select
              onChange={() => {}}
              type="text"
              name="billing-state"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="State">State</option>
            </select>
            <input
              type="text"
              name="billing-zip"
              className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
          </div>

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
              {formatNumber(cartProducts?.totalAmount + shipping)}
              VND
            </p>
          </div>
        </div>
        <button
          className={`${
            !fielsIsValid
              ? "bg-blue-200 cursor-not-allowed"
              : "bg-main hover:opacity-80 "
          } flex w-full gap-2 justify-center items-center px-4 py-2 rounded-lg text-white text-semibold mt-4 `}
          onClick={(e) => onClickHandler(e)}
          disabled={!fielsIsValid}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default PaymentDetails;
