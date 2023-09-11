import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Banner,
  BestSellerProducts,
  NewProducts,
  DealDaily,
} from "../../components";

const Home = () => {
  return (
    <>
      <div className="w-main flex">
        <div className="flex flex-col gap-5 w-[25%] flex-auto">
          <Sidebar />
          <DealDaily />
        </div>

        <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
          <Banner />
          <BestSellerProducts />
        </div>
      </div>
      <div className="w-full h-[500px]"></div>
    </>
  );
};

export default Home;
