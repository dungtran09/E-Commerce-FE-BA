import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputField, LoaderLg, PortalToggle } from "../../components";
import { userLogin } from "../../store/slices/userSlice";
import { isEmailValid } from "../../utils/helper";
import icons from "../../utils/icons";
import path from "../../utils/path";
import statusCode from "../../utils/statusCode";

const Login = () => {
  const { BsFillEyeFill, BsFillEyeSlashFill, BsArrowRight } = icons;
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { userInfo, isLoggedIn, status } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState(false);

  /* ---Handler Login form--- */
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [login_isEmailErr, setLoginEmailErr] = useState(false);
  const [login_isPasswordErr, setLoginPasswordErr] = useState(false);

  // Using for:  disabled button login or signup if All fields invalid
  const [fielsIsValid, setFieldsIsValid] = useState(false);
  /*------------------------*/

  const onShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const inputsLogin = [
    {
      id: 1,
      value: user?.email,
      setValue: setUser,
      keyName: "email",
      fieldName: "Email",
      type: "email",
      errMsg: "Email is not valid.",
      isErr: login_isEmailErr,
    },
    {
      id: 2,
      value: user?.password,
      setValue: setUser,
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
    },
  ];

  const loginEls = inputsLogin.map((input) => (
    <InputField key={input?.id} {...input} />
  ));

  useEffect(() => {
    setLoginEmailErr(!isEmailValid(user?.email));
    setLoginPasswordErr(user?.password?.length >= 8 ? false : true);
    if (!login_isEmailErr && !login_isPasswordErr) {
      setFieldsIsValid(true);
    } else {
      setFieldsIsValid(false);
    }
  }, [user, login_isEmailErr, login_isPasswordErr]);

  useEffect(() => {
    if (status === statusCode.ERROR) {
      setLoginFail(true);
    }

    if (status === statusCode.SUCCESS && isLoggedIn) {
      navigate(`/${path.HOME}`);
    }
  }, [userInfo, isLoggedIn, navigate]);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(user));
  };

  const showStatus = () => {
    setLoginFail(true);
  };

  const hideStatus = () => {
    setLoginFail(false);
  };

  const navigateToSignup = () => {
    navigate(`/${path.SIGNUP}`, { replace: true });
  };

  return (
    <>
      <div className="flex flex-col mt-8 mb-8">
        <div className="flex items-center justify-center">
          <div className="rounded-lg border px-4 lg:px-24 py-4 shadow-md lg:max-w-xl sm:max-w-md w-full text-center">
            <h3 className="text-[28px] text-gray-800 font-semibold mb-8">
              Login
            </h3>
            {loginEls}
            {<div className="flex justify-center items-center"></div>}
            <button
              className={`${
                !fielsIsValid
                  ? "bg-blue-200 cursor-not-allowed"
                  : "bg-main hover:opacity-80 "
              } flex w-full gap-2 justify-center items-center px-4 py-2 rounded-lg text-white text-semibold mt-4 `}
              onClick={(e) => onClickHandler(e)}
              disabled={!fielsIsValid}
            >
              Login
            </button>
            <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
              <span className=" cursor-pointer hover:opacity-70">
                Forgot password?
              </span>
              <span
                className="flex justify-between gap-1 items-center cursor-pointer hover:opacity-70"
                onClick={() => navigateToSignup()}
              >
                <p>Create one?</p>
                <BsArrowRight size={15} />
              </span>
            </div>
            {loginFail && (
              <PortalToggle
                status={userInfo?.status || statusCode.ERROR}
                message={userInfo?.message}
                showStatus={showStatus}
                hideStatus={hideStatus}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
