import React from "react";
import { CardPageVisits } from "../../../components/Admin";

const Ecommerce = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
        <div className="w-full xl:w-4/12 px-4"></div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-5">
          <CardPageVisits />
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
