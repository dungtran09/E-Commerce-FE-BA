import React from "react";
import { ChartsHeader, Footer, NavBar, Sidebar } from "../../components/Admin";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import icons from "../../utils/icons";
import { useStateContext } from "../../contexts/ContextProvider";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const { FiSettings } = icons;
  const { activeMenu } = useStateContext();

  return (
    <main className="flex relative dark:bg-main-dark-bg ">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ background: "gray", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <aside className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </aside>
      ) : (
        <aside className="w-0 dark:bg-secondary-dark-bg ">
          <Sidebar />
        </aside>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg w-full min-h-screen ${
          activeMenu ? "w-full md:ml-72 " : "flex-2 "
        }`}
      >
        <header className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <NavBar />
          <ChartsHeader />
        </header>
        <section className="md:px-10 mx-auto w-full">
          <Outlet />
        </section>
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
          <Footer />
        </footer>
      </div>
    </main>
  );
};

export default Admin;
