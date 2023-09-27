import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../utils/constants";
import SearchGlobal from "../SearchGlobal/SearchGlobal";

const Navigation = () => {
  const navBarEl = navigation.map((navi) => (
    <NavLink
      to={navi.path}
      key={navi.id}
      className={({ isActive }) =>
        isActive ? "pr-12 hover:text-main text-main" : "pr-12 hover:text-main"
      }
    >
      {navi.value}
    </NavLink>
  ));

  return (
    <nav className="border-y w-main h-[48px] py-2 text-sm flex justify-between items-center">
      <div className="flex justify-center items-center">{navBarEl}</div>
      <div className="flex justify-center items-center">
        <SearchGlobal />
      </div>
    </nav>
  );
};

export default Navigation;
