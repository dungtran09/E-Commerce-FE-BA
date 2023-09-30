import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../store/slices/userSlice";
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
    MdKeyboardArrowDown,
  } = icons;

  const iconsArr = [
    <BiLogoFacebook />,
    <AiOutlineTwitter />,
    <AiFillInstagram />,
    <AiOutlineGoogle />,
    <AiFillGithub />,
  ];

  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const catMenu = useRef(null);
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["_jwt_user"]);

  const userObj = JSON.parse(localStorage.getItem("userInfos"));
  useEffect(() => {
    if (userObj) {
      setUser(userObj);
      setIsLogged(true);
    }
  }, []);

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

  const iconsEls = iconsArr.map((icon, index) => (
    <span key={index} className="hover:text-gray-700 cursor-pointer text-base">
      {icon}
    </span>
  ));

  const onLogOutHandler = () => {
    removeCookie("_jwt_user");
    dispatch(userLogout());
    navigate(`/${path.LOGIN}`);
  };

  return (
    <>
      <header className="h-[38px] w-full bg-main text-white flex justify-center items-center">
        <div className="w-main flex justify-between text-xs">
          <div className="flex justify-center items-center gap-1">
            <span className="border-r border-b-gray-300 pr-2">
              ORDER ONLINE OR CALL US (+1800) 000 8808
            </span>
            <BsCurrencyDollar />
            <p className="cursor-pointer hover:text-gray-700"> VND</p>
          </div>
          <div
            className="flex justify-center items-center gap-3 font-semibold"
            ref={catMenu}
          >
            {iconsEls}
            <div className="relative">
              <div className="inline-flex items-center overflow-hidden rounded-md bg-[#9a3b3b54]">
                {isLogged && user !== null ? (
                  <Link
                    to={`/${path.USER}`}
                    className="border-e px-2 text-sm/none text-white hover:text-gray-700"
                  >
                    {user?.firstName}
                  </Link>
                ) : (
                  <Link
                    to={`/${path.LOGIN}`}
                    className="p-2 font-semibold hover:text-gray-700"
                  >
                    Sign In
                  </Link>
                )}

                {isLogged && (
                  <button
                    className="h-full p-2 text-gray-50 outline-none hover:text-gray-700"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <span className="sr-only">Menu</span>
                    <MdKeyboardArrowDown size={18} />
                  </button>
                )}
              </div>

              {toggleMenu && isLogged && (
                <div
                  className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
                      Settings
                    </strong>

                    <Link
                      to={`/${path.USER}`}
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500
                      hover:bg-gray-50 hover:text-gray-700"
                    >
                      Your profiles
                    </Link>
                  </div>
                  <div className="p-2">
                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
                      In/Out
                    </strong>

                    <div>
                      <div
                        className="flex w-full items-center gap-2 cursor-pointer rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        onClick={() => onLogOutHandler()}
                      >
                        Log out
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
