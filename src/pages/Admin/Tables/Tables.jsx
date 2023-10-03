import React from "react";
import { CardTable } from "../../../components/Admin";

const Tables = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color="light" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="light" />
        </div>
      </div>
    </>
  );
};

export default Tables;