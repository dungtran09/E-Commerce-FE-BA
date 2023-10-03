import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Chat, NavButton, Notification, UserProfile } from "../";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useRef } from "react";

const NavBar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handlerClick,
    isClicked,
    setScreenSize,
    screenSize,
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

  const [toggleMenu, setToggleMenu] = useState(false);
  const catMenu = useRef(null);

  useEffect(() => {
    const closeOpenMenus = (e) => {
      if (
        catMenu.current &&
        toggleMenu &&
        !catMenu.current.contains(e.target)
      ) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", closeOpenMenus);
  }, [toggleMenu]);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <nav className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div ref={catMenu} className="flex">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handlerClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handlerClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handlerClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Dung Tran
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked?.chat && <Chat />}
        {isClicked?.notification && <Notification />}
        {isClicked?.userProfile && <UserProfile />}
      </div>
    </nav>
  );
};

export default NavBar;
