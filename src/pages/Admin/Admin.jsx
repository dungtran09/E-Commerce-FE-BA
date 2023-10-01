import React from "react";
import { Footer, Header, Main, NavBar, Sidebar } from "../../components/Admin";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import icons from "../../utils/icons";
import { useStateContext } from "../../contexts/ContextProvider";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const { FiSettings } = icons;
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg ">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl hover:drop-shadow-xl hover:bg-light-gray p-3 text-white"
            style={{ background: "blue", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white md:hidden">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg w-full${
          activeMenu ? "w-full md:md-72" : "flex-2"
        }`}
      >
        <div className="fixed md-static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <NavBar />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
