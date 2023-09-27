import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiLogin, apiSignup } from "../../apis";
import { Button, InputField, Loader, PortalToggle } from "../../components";
import { signup } from "../../store/userSlice";
import {
  checkConfirmPassword,
  isBetween,
  isEmailValid,
  isPasswordSecure,
} from "../../utils/helper";
import icons from "../../utils/icons";
import path from "../../utils/path";

const Login = () => {
  const { BsFillEyeFill, BsFillEyeSlashFill } = icons;
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({});

  /* ---Handler Login form--- */
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [login_isEmailErr, setLoginEmailErr] = useState(false);
  const [login_isPasswordErr, setLoginPasswordErr] = useState(false);

  /*------------------------*/

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

  const [isSignup, setIsSinup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infos, setInfos] = useState(null);
  const [isError, setIsError] = useState(false);
  const [classNameInput, setClassNameInput] = useState("invalid");

  // Using for:  disabled button login or signup if All fields invalid
  const [fielsIsValid, setFieldsIsValid] = useState(false);

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
      classNameInput: classNameInput,
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
      classNameInput: classNameInput,
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
      classNameInput: classNameInput,
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
      classNameInput: classNameInput,
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
      classNameInput: classNameInput,
    },
  ];

  const inputsLogin = [
    {
      id: 1,
      value: userLogin?.email,
      setValue: setUserLogin,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: login_isEmailErr,
      classNameInput: classNameInput,
    },
    {
      id: 2,
      value: userLogin?.password,
      setValue: setUserLogin,
      keyName: "password",
      fieldName: "Password",
      type: "password",
      errMsg: "Password must has at least 8 characters",
      isErr: login_isPasswordErr,
      icons: {
        showEye: <BsFillEyeFill />,
        hideEye: <BsFillEyeSlashFill />,
      },
      showPassword: showPassword,
      setShowPassword: setShowPassword,
      onShowPasswordHandler: onShowPasswordHandler,
      classNameInput: classNameInput,
    },
  ];

  const loginEls = inputsLogin.map((input) => (
    <InputField key={input?.id} {...input} />
  ));

  const signupEls = inputsSignup.map((input) => (
    <InputField key={input?.id} {...input} />
  ));

  useEffect(() => {
    if (isSignup) {
      setPayload(userSignup);
      setSignupFistNameErr(!isBetween(payload?.firstName?.length, 4, 35));
      setSignupLastNameErr(!isBetween(payload?.lastName?.length, 4, 35));
      setSignUpEmailErr(!isEmailValid(payload?.email));
      setPasswordErr(!isPasswordSecure(payload?.password));
      setSignupConfirmPasswrodErr(
        !checkConfirmPassword(payload?.password, payload?.passwordConfirm),
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
    } else {
      setPayload(userLogin);
      setLoginEmailErr(!isEmailValid(payload?.email));
      setLoginPasswordErr(payload?.password?.length >= 8 ? false : true);
      if (!login_isEmailErr && !login_isPasswordErr) {
        setFieldsIsValid(true);
      } else {
        setFieldsIsValid(false);
      }
    }
  }, [
    userSignup,
    isSignup,
    userLogin,
    isError,
    fielsIsValid,
    inputsLogin,
    inputsSignup,
  ]);

  const showStatus = () => {
    setIsError(true);
  };

  const hideStatus = () => {
    setIsError(false);
  };

  const onClickHandler = useCallback(async () => {
    let response;
    if (isSignup) {
      setIsLoading(true);
      response = await apiSignup(payload);
    } else {
      setIsLoading(true);
      response = await apiLogin(payload);
    }

    if (response?.status === "success") {
      dispatch(signup({ token: response?.token, data: response?.data }));
      setIsLoading(false);
      navigate(`/${path.HOME}`);
      window.location.reload(true);
      window.location.reload(false);
    }
    setInfos(response);
    setIsError(true);
    setIsLoading(false);
  }, [isSignup, payload]);

  console.log(fielsIsValid);

  return (
    <>
      <div className="flex flex-col mt-8 mb-8">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg border px-4 lg:px-24 py-4 shadow-md lg:max-w-xl sm:max-w-md w-full text-center">
            <h3 className="text-[28px] text-gray-800 font-semibold mb-8">
              {isSignup ? "Sign up" : "Login"}
            </h3>
            {isSignup ? signupEls : loginEls}
            <button
              className={`${
                !fielsIsValid && !isError ? "bg-gray-200 " : "bg-main "
              } flex w-full gap-2 justify-center items-center px-4 py-2 rounded-lg text-white text-semibold mt-4 hover:opacity-80`}
              onClick={() => onClickHandler()}
              disabled={!fielsIsValid && !isError}
            >
              {isSignup ? "Sign up" : "Login"}
            </button>
            <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
              <span className=" cursor-pointer hover:opacity-70">
                Forgot password?
              </span>
              <span
                className=" cursor-pointer hover:opacity-70"
                onClick={() => setIsSinup(!isSignup)}
              >
                {isSignup ? "< Login" : "Create one?"}
              </span>
              {isLoading && <Loader />}
              {isError && (
                <PortalToggle
                  status="Error"
                  message={infos?.message}
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

export default Login;
