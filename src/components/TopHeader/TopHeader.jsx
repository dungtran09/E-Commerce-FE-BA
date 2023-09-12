import React from "react";
import { Link } from "react-router-dom";
import icons from "../../utils/icons";
import path from "../../utils/path";

const TopHeader = () => {
  const {
    BsCurrencyDollar,
    BiLogoFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineGoogle,
    AiFillGithub,
  } = icons;

  const iconsArr = [
    <BiLogoFacebook />,
    <AiOutlineTwitter />,
    <AiFillInstagram />,
    <AiOutlineGoogle />,
    <AiFillGithub />,
  ];

  const iconsElms = iconsArr.map((icon, index) => (
    <span key={index} className="hover:text-black cursor-pointer text-sm">
      {icon}
    </span>
  ));

  return (
    <div className="h-[38px] w-full bg-main text-white flex justify-center items-center ">
      <div className="w-main flex justify-between text-xs">
        <div className="flex justify-center items-center gap-1">
          <span className="border-r border-b-gray-300 pr-2">
            ORDER ONLINE OR CALL US (+1800) 000 8808
          </span>
          <BsCurrencyDollar />{" "}
          <p className="cursor-pointer hover:text-black"> VND</p>
        </div>
        <div className="flex gap-3">
          <Link
            to={`/${path.LOGIN}`}
            className="border-r pr-2 hover:text-black"
          >
            Sign In or Create Account
          </Link>
          {iconsElms}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
