import React, { useEffect } from "react";
import { ImMenu } from "react-icons/im";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import icons from "../../utils/icons";
import path from "../../utils/path";

const Sidebar = () => {
  const {
    FiHeadphones,
    PiTelevisionSimpleBold,
    GiVibratingSmartphone,
    FaTabletAlt,
    FiCamera,
    FaLaptop,
    BsSpeaker,
    FiPrinter,
  } = icons;

  const iconsProductCategories = [
    <FaTabletAlt />,
    <FaLaptop />,
    <BsSpeaker />,
    <FiCamera />,
    <FiPrinter />,
    <PiTelevisionSimpleBold />,
    <FiHeadphones />,
    <GiVibratingSmartphone />,
  ];

  const { data: categories, status } = useSelector(
    (state) => state?.categories,
  );

  const categoriesEl = categories?.map((category, index) => (
    <NavLink
      key={index}
      to={`/${path.PRODUCTS}/${category?.title}`}
      className={({ isActive }) =>
        isActive
          ? "bg-main text-white p-4 text-base"
          : "p-3 text-base hover:text-main"
      }
    >
      <div className="flex items-center">
        <span className="pr-4">
          <img
            src={category?.image}
            className="w-[20px] h-[22px] object-contain"
          />
        </span>
        <span className="text-sm">
          {category?.title} ({category?.brands?.length})
        </span>
      </div>
    </NavLink>
  ));

  return (
    <div className="flex flex-col border">
      <div className="flex items-center bg-main text-white font-medium p-1">
        <ImMenu className="mr-3 text-[20px] ml-2" />
        <span className="text-lg">All Categories</span>
      </div>
      {categoriesEl}
    </div>
  );
};

export default Sidebar;
