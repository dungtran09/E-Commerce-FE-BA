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
import InputField from "../InputField/InputField";

const SendOrder = () => {
  const { shipping } = useStateContext();

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartProducts, dispatch]);

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartProducts, dispatch]);

  const { userInfo: user } = useSelector((state) => state.user);

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
        <div className="mt-4">
          {inputEls}
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
          Send Order
        </button>
      </div>
    </>
  );
};

export default SendOrder;
