import React, { useEffect, useState } from "react";
import { fieldIsEmpty, isBetween, isEmailValid } from "../../utils/helper";
import statusCode from "../../utils/statusCode";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const ChangeProfile = ({ user }) => {
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
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="px-4 lg:px-24 py-4 lg:max-w-xl sm:max-w-md w-full text-center">
            <h3 className="text-[28px] text-gray-800 font-semibold mb-8">
              Change Profile
            </h3>
            <div className="flex flex-col justify-center items-center">
              {inputEls}
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
              Changed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeProfile;
