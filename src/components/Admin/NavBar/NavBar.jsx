import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../../../assets/Home-banner/avatar.jpg";
import { Cart, Chat, NavButton, Notification, UserProfile } from "../";
import { useStateContext } from "../../../contexts/ContextProvider";

const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handlerClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handlerResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handlerResize);
    handlerResize();

    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevState) => !prevState)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handlerClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          dotColor="#03C9D7"
          title="Chat"
          customFunc={() => handlerClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          dotColor="#03C9D7"
          title="Notification"
          customFunc={() => handlerClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray round-lg"
            onClick={() => handlerClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 text-14 font-bold ml-1 text-14">
                Michal
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </nav>
  );
};

export default NavBar;
