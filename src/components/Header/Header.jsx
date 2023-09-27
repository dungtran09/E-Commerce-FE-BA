import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_digital.png";
import icons from "../../utils/icons";
import path from "../../utils/path";
import SideBarCart from "../SideBarCart/SideBarCart";

const Header = () => {
  const { BsTelephoneFill, BsBagPlusFill, MdEmail, BsFillCartCheckFill } =
    icons;
  const [showSidebar, setShowSidebar] = useState(false);
  const cartProducts = useSelector((state) => state.carts);

  return (
    <>
      <SideBarCart showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <header className="w-main flex justify-between h-[110px] py-[35px]">
        <div className="w-[234px]">
          <Link to={`/${path.HOME}`}>
            <img src={logo} alt="logo" className="object-contain" />
          </Link>
        </div>
        <div className="flex text-[13px]">
          <div className="flex flex-col items-center px-4 border-r">
            <span className="flex gap-2 items-center">
              <BsTelephoneFill color="red" size={14} />
              <p className="font-medium">(+1800) 000 8808</p>
            </span>
            <span> Mon-Sat 9:00AM - 8:00PM</span>
          </div>
          <div className="flex flex-col items-center px-4 border-r">
            <span className="flex gap-2 items-center">
              <MdEmail color="red" size={14} />
              <p className="font-medium">SUPPORT@TADATHEMES.COM</p>
            </span>
            <span> Online Support 24/7</span>
          </div>
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex items-center justify-center gap-2 ml-4 cursor-pointer hover:opacity-70 px-4 border-r"
          >
            <BsBagPlusFill color="red" size={22} />
            <span>
              <p className="h-6 w-6 rounded-full bg-blue-50 text-center  text-main text-[12px]/6 font-bold">
                {cartProducts?.length || "0"}
              </p>
              item(s)
            </span>
          </div>
          <Link to={`/${path.CART}`}>
            <div className="relative ml-4">
              <div className="top-[-18px] absolute left-4">
                <p className="flex h-2 w-2 items-center justify-center rounded-full hover:opacity-70 bg-blue-50 p-3 text-xs text-main font-bold">
                  {cartProducts?.length || "0"}
                </p>
              </div>
              <BsFillCartCheckFill className="text-main mt-4 h-6 w-6 hover:opacity-70" />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
