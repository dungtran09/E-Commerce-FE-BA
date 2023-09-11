import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_digital.png";
import icons from "../../utils/icons";
import path from "../../utils/path";

const Header = () => {
  const { BsTelephoneFill, BsBagPlusFill, MdEmail, FaUser } = icons;
  return (
    <div className="w-main flex justify-between h-[110px] py-[35px]">
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
        <div className="flex items-center justify-center gap-2 px-4 border-r">
          <BsBagPlusFill color="red" size={22} />
          <span>0 item(s)</span>
        </div>
        <div className="flex items-center justify-center px-4">
          <FaUser color="red" size={22} />
        </div>
      </div>
    </div>
  );
};

export default Header;
