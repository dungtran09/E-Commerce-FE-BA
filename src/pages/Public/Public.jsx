import React from "react";
import {
  Footer,
  Header,
  Navigation,
  Subscribe,
  TopHeader,
} from "../../components";

import { Outlet } from "react-router-dom";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopHeader />
      <Header />
      <Navigation />
      <main className="w-full flex flex-col items-center mt-4">
        <Outlet />
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Public;
