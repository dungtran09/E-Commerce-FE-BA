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
    <div className="border-y mb-4 w-main h-[48px] py-2 text-sm flex items-center">
      {navBarEl}
    </div>
  );
};

export default Navigation;
