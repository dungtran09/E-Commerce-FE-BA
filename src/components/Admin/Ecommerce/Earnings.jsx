import React from "react";
import Button from "../Button/Button";

const Earnings = () => {
  return (
    <>
      <p className="font-bold text-gray-400">Earnings</p>
      <p className="text-2xl">$63.236.221</p>
      <div className="mt-6">
        <Button
          color="white"
          bgColor="blue"
          text="Download"
          borderRadius="10px"
          size="md"
        />
      </div>
    </>
  );
};

export default Earnings;
