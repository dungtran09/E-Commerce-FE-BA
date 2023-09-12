import React from "react";
import icons from "../../utils/icons";

const Subscribe = () => {
  const { MdEmail } = icons;

  return (
    <div className="h-[103px] bg-main w-full flex justify-between items-center">
      <div className="w-main flex justify-between items-center m-auto">
        <div className="flex flex-col flex-1 text-white">
          <h3 className="text-lg font-medium">SIGN UP TO NEWSLETTER</h3>
          <p className="text-sm text-zinc-300">
            Subscribe now and receive weekly newsletter
          </p>
        </div>
        <div className="flex flex-1 justify-between items-center text-white text-sm">
          <input
            type="text"
            placeholder="Email address"
            className="py-4 px-4 pr-0 rounded-l-full bg-[#ffffff1a] w-full outline-none placeholder:opacity-60 placeholder:text-white font-light"
          />
          <div className="text-[20px] mr-4 rounded-r-full bg-[#ffffff1a] px-4 py-4 cursor-pointer hover:text-gray-800">
            <MdEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
