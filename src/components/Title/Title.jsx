import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full gap-8 pb-2 border-b-2 border-main ">
      <h3 className="font-semibold text-gray-800 text-lg uppercase ">
        {title}
      </h3>
    </div>
  );
};

export default Title;
