import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkConfirmPassword,
  isEmailValid,
  isPasswordSecure,
} from "../../utils/helper";
import icons from "../../utils/icons";
import statusCode from "../../utils/statusCode";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const ChangePassword = ({ user }) => {
  const { BsFillEyeFill, BsFillEyeSlashFill } = icons;
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  /*---Handler Signup form---*/
  const [userInputs, setUserInputs] = useState({
    email: user?.email || "",
    oldPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });

  const [isEmailErr, setSignUpEmailErr] = useState(false);
  const [isOldPasswordErr, setOldPasswordErr] = useState(false);
  const [isPasswordErr, setPasswordErr] = useState(false);
  const [isConfirmPasswordErr, setConfirmPasswordErr] = useState(false);
  /*--------------------------*/

  const [isLoading, setIsLoading] = useState(false);
  const [infos, setInfos] = useState(null);
  const [status, setStatus] = useState(false);

  // Using for:  disabled button login or signup if All fields invalid
  const [fielsIsValid, setFieldsIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const onShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const inputsChangedPassword = [
    {
      id: 1,
      value: userInputs?.email,
      setValue: setUserInputs,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: isEmailErr,
    },
    {
      id: 2,
      value: userInputs?.oldPassword,
      setValue: setUserInputs,
      keyName: "oldPassword",
      fieldName: "Old Password",
      type: "password",
      errMsg:
        "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')",
      isErr: isOldPasswordErr,
      icons: {
        showEye: <BsFillEyeFill />,
        hideEye: <BsFillEyeSlashFill />,
      },
      showPassword: showPassword,
      setShowPassword: setShowPassword,
      onShowPasswordHandler: onShowPasswordHandler,
    },
    {
      id: 3,
      value: userInputs?.newPassword,
      setValue: setUserInputs,
      keyName: "newPassword",
      fieldName: "New Password",
      type: "password",
      errMsg:
        "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')",
      isErr: isPasswordErr,
      icons: {
        showEye: <BsFillEyeFill />,
        hideEye: <BsFillEyeSlashFill />,
      },
      showPassword: showPassword,
      setShowPassword: setShowPassword,
      onShowPasswordHandler: onShowPasswordHandler,
    },
    {
      id: 4,
      value: userInputs?.passwordConfirm,
      setValue: setUserInputs,
      keyName: "passwordConfirm",
      fieldName: "Password Confirm",
      type: "password",
      errMsg: "The password does not match",
      isErr: isConfirmPasswordErr,
      icons: {
        showEye: <BsFillEyeFill />,
        hideEye: <BsFillEyeSlashFill />,
      },
      showPassword: showPassword,
      setShowPassword: setShowPassword,
      onShowPasswordHandler: onShowPasswordHandler,
    },
  ];

  const inputEls = inputsChangedPassword.map((input) => (
    <InputField key={input?.id} {...input} />
  ));

  useEffect(() => {
    setSignUpEmailErr(!isEmailValid(userInputs?.email));
    setOldPasswordErr(!isPasswordSecure(userInputs?.oldPassword));
    setPasswordErr(!isPasswordSecure(userInputs?.newPassword));
    setConfirmPasswordErr(
      !checkConfirmPassword(
        userInputs?.newPassword,
        userInputs?.passwordConfirm,
      ),
    );
    if (
      !isEmailErr &&
      !isOldPasswordErr &&
      !isPasswordErr &&
      !isConfirmPasswordErr
    ) {
      setFieldsIsValid(true);
    } else {
      setFieldsIsValid(false);
    }
  }, [
    userInputs,
    isEmailErr,
    isOldPasswordErr,
    isPasswordErr,
    isConfirmPasswordErr,
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
          <div className="lg:px-24 py-4 lg:max-w-xl sm:max-w-md w-full text-center">
            <h3 className="text-[28px] text-gray-800 font-semibold mb-8">
              Change Password
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

export default ChangePassword;
