import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../utils/constants";

const Navigation = () => {
  const navBarEl = navigation.map((el) => (
    <NavLink
      to={el.path}
      key={el.id}
      className={({ isActive }) =>
        isActive ? "pr-12 hover:text-main text-main" : "pr-12 hover:text-main"
      }
    >
      {el.value}
    </NavLink>
  ));

  return (
    <nav className="border-y w-main h-[48px] py-2 text-sm flex items-center">
      {navBarEl}
    </nav>
  );
};

export default Navigation;
