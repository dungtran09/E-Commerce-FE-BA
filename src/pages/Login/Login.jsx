import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiLogin, apiSignup } from "../../apis";
import bgLogin from "../../assets/bg-login.jpg";
import { Button, Error, InputField, Loader } from "../../components";
import { signup } from "../../store/userSlice";
import {
  checkConfirmPassword,
  isBetween,
  isEmailValid,
  isPasswordSecure,
} from "../../utils/helper";
import path from "../../utils/path";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payload, setPayload] = useState();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [isSignup, setIsSinup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infos, setInfos] = useState(null);
  const [isError, setIsError] = useState(false);

  const inputsSignup = [
    {
      id: 1,
      value: userSignup.firstName,
      setValue: setUserSignup,
      keyName: "firstName",
      fieldName: "First Name",
      type: "text",
      errMsg:
        "First name should be 4-35 character and should't include any special character.",
      isErr: !isBetween(payload?.firstName?.length, 4, 35),
    },
    {
      id: 2,
      value: userSignup.lastName,
      setValue: setUserSignup,
      keyName: "lastName",
      fieldName: "Last Name",
      type: "text",
      errMsg:
        "Last name should be 4-35 character and should't include any special character.",
      isErr: !isBetween(payload?.lastName?.length, 4, 35),
    },
    {
      id: 3,
      value: userSignup.email,
      setValue: setUserSignup,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: !isEmailValid(payload?.email),
    },
    {
      id: 4,
      value: userSignup.password,
      setValue: setUserSignup,
      keyName: "password",
      fieldName: "Password",
      type: "password",
      errMsg:
        "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')",
      isErr: !isPasswordSecure(payload?.password),
    },
    {
      id: 5,
      value: userSignup.passwordConfirm,
      setValue: setUserSignup,
      keyName: "passwordConfirm",
      fieldName: "Password Confirm",
      type: "password",
      errMsg: "The password does not match",
      isErr: !checkConfirmPassword(payload?.password, payload?.passwordConfirm),
    },
  ];

  const inputsLogin = [
    {
      id: 1,
      value: userLogin.email,
      setValue: setUserLogin,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: !isEmailValid(payload?.email),
    },
    {
      id: 2,
      value: userLogin.password,
      setValue: setUserLogin,
      keyName: "password",
      fieldName: "Password",
      type: "password",
      errMsg: "",
      isErr: false,
    },
  ];

  const loginEls = inputsLogin.map((input) => (
    <InputField key={input.id} {...input} />
  ));

  const signupEls = inputsSignup.map((input) => (
    <InputField key={input.id} {...input} />
  ));

  useEffect(() => {
    if (isSignup) {
      setPayload(userSignup);
    } else {
      setPayload(userLogin);
    }
  }, [userSignup, isSignup, userLogin]);

  const showError = () => {
    setIsError(true);
  };

  const hideError = () => {
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

    if (response.status === "success") {
      dispatch(signup({ token: response.token, data: response.data }));
      navigate(`/${path.HOME}`);
    }
    setInfos(response);
    setIsError(true);
    setIsLoading(false);
    console.log(infos);
  }, [isSignup, payload]);

  return (
    <div className="w-screen h-screen relative">
      <img src={bgLogin} alt="image" className="w-full h-full object-cover" />
      <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 w-[50%]">
        <div className="p-8 rounded-md w-[500px] bg-gradient-to-r from-slate-900 to-slate-800">
          <h3 className="text-[28px] text-white font-semibold mb-8">
            {isSignup ? "Sign up" : "Login"}
          </h3>
          {isSignup ? signupEls : loginEls}
          <Button
            name={isSignup ? "Sign up" : "Login"}
            onClickHandler={onClickHandler}
          />
          <div className="flex justify-between items-center text-sm text-white mt-2">
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
              <Error
                status={infos?.status}
                message={infos?.message}
                showError={showError}
                hideError={hideError}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
