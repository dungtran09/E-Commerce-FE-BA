import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSignup } from "../../apis";
import { InputField, Loader, PortalToggle } from "../../components";
import {
  checkConfirmPassword,
  isBetween,
  isEmailValid,
  isPasswordSecure,
} from "../../utils/helper";
import icons from "../../utils/icons";
import path from "../../utils/path";
import statusCode from "../../utils/statusCode";

const Signup = () => {
  const { BsFillEyeFill, BsFillEyeSlashFill, BsArrowLeft } = icons;
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  /*---Handler Signup form---*/
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [signup_isFirstNameErr, setSignupFistNameErr] = useState(false);
  const [signup_isLastNameErr, setSignupLastNameErr] = useState(false);
  const [signup_isEmailErr, setSignUpEmailErr] = useState(false);
  const [signup_isPasswordErr, setPasswordErr] = useState(false);
  const [signup_isConfirmPasswordErr, setSignupConfirmPasswrodErr] =
    useState(false);
  /*--------------------------*/

  const [isLoading, setIsLoading] = useState(false);
  const [infos, setInfos] = useState(null);
  const [status, setStatus] = useState(false);

  // Using for:  disabled button login or signup if All fields invalid
  const [fielsIsValid, setFieldsIsValid] = useState(false);
  const [messege, setMessage] = useState("");

  const onShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const inputsSignup = [
    {
      id: 1,
      value: userSignup?.firstName,
      setValue: setUserSignup,
      keyName: "firstName",
      fieldName: "First Name",
      type: "text",
      errMsg:
        "First name should be 4-35 character and should't include any special character.",
      isErr: signup_isFirstNameErr,
    },
    {
      id: 2,
      value: userSignup?.lastName,
      setValue: setUserSignup,
      keyName: "lastName",
      fieldName: "Last Name",
      type: "text",
      errMsg:
        "Last name should be 4-35 character and should't include any special character.",
      isErr: signup_isLastNameErr,
    },
    {
      id: 3,
      value: userSignup?.email,
      setValue: setUserSignup,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: signup_isEmailErr,
    },
    {
      id: 4,
      value: userSignup?.password,
      setValue: setUserSignup,
      keyName: "password",
      fieldName: "Password",
      type: "password",
      errMsg:
        "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')",
      isErr: signup_isPasswordErr,
      icons: {
        showEye: <BsFillEyeFill />,
        hideEye: <BsFillEyeSlashFill />,
      },
      showPassword: showPassword,
      setShowPassword: setShowPassword,
      onShowPasswordHandler: onShowPasswordHandler,
    },
    {
      id: 5,
      value: userSignup?.passwordConfirm,
      setValue: setUserSignup,
      keyName: "passwordConfirm",
      fieldName: "Password Confirm",
      type: "password",
      errMsg: "The password does not match",
      isErr: signup_isConfirmPasswordErr,
      icons: {
        showEye: <BsFillEyeFill />,
        hideEye: <BsFillEyeSlashFill />,
      },
      showPassword: showPassword,
      setShowPassword: setShowPassword,
      onShowPasswordHandler: onShowPasswordHandler,
    },
  ];

  const signupEls = inputsSignup.map((input) => (
    <InputField key={input?.id} {...input} />
  ));

  useEffect(() => {
    setSignupFistNameErr(!isBetween(userSignup?.firstName?.length, 4, 35));
    setSignupLastNameErr(!isBetween(userSignup?.lastName?.length, 4, 35));
    setSignUpEmailErr(!isEmailValid(userSignup?.email));
    setPasswordErr(!isPasswordSecure(userSignup?.password));
    setSignupConfirmPasswrodErr(
      !checkConfirmPassword(userSignup?.password, userSignup?.passwordConfirm),
    );
    if (
      !signup_isFirstNameErr &&
      !signup_isLastNameErr &&
      !signup_isEmailErr &&
      !signup_isPasswordErr &&
      !signup_isConfirmPasswordErr
    ) {
      setFieldsIsValid(true);
    } else {
      setFieldsIsValid(false);
    }
  }, [
    userSignup,
    signup_isFirstNameErr,
    signup_isLastNameErr,
    signup_isEmailErr,
    signup_isPasswordErr,
    signup_isConfirmPasswordErr,
  ]);

  const showStatus = () => {
    setStatus(true);
  };

  const hideStatus = () => {
    setStatus(false);
  };

  const onClickHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await apiSignup(userSignup);
    if (response?.status === statusCode.SUCCESS) {
      setIsLoading(false);
      setMessage("Sinup successfully. Please login to goto Home Page.");
      setInfos(response);
      setStatus(true);
      const delayDebounceFn = setTimeout(() => {
        navigateToLogin();
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setMessage("The Email has been registered, Please try choose another.");
      setIsLoading(false);
      setInfos(response);
      setStatus(true);
    }
  };
  const navigateToLogin = () => {
    navigate(`/${path.LOGIN}`, { replace: true });
  };

  return (
    <>
      <div className="flex flex-col mt-8 mb-8">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg border px-4 lg:px-24 py-4 shadow-md lg:max-w-xl sm:max-w-md w-full text-center">
            <h3 className="text-[28px] text-gray-800 font-semibold mb-8">
              Sign up
            </h3>
            <div className="flex flex-col justify-center items-center">
              {signupEls}
            </div>
            <button
              className={`${
                !fielsIsValid
                  ? "bg-blue-200 cursor-not-allowed"
                  : "bg-main hover:opacity-80 "
              } flex w-full gap-2 justify-center items-center px-4 py-2 rounded-lg text-white text-semibold mt-4`}
              onClick={(e) => onClickHandler(e)}
              disabled={!fielsIsValid}
            >
              Sign up
            </button>
            <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
              <span className=" cursor-pointer hover:opacity-70">
                Forgot password?
              </span>
              <span
                className="flex justify-between gap-1 items-center cursor-pointer hover:opacity-70"
                onClick={() => navigateToLogin()}
              >
                <BsArrowLeft size={15} />
                <p>Login</p>
              </span>
              {isLoading && <Loader />}
              {status && (
                <PortalToggle
                  status={infos?.status}
                  message={messege}
                  showStatus={showStatus}
                  hideStatus={hideStatus}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
