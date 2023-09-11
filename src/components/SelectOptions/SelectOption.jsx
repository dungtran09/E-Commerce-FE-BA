import React from "react";

const SelectOption = ({ icon }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-white border shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-300">
      {icon}
    </div>
  );
};

export default SelectOption;
