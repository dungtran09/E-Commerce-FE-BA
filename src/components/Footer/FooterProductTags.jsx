import React from "react";

const FooterProductTags = () => {
  return (
    <>
      <div className="flex flex-col border-t-[1px] border-[#272727] w-full bg-[#191919]">
        <div className="flex flex-col w-main justify-between m-auto mt-4 mb-4">
          <h3 className="uppercase border-l-[3px] text-white border-main font-medium mb-4 text-[15px] pl-2">
            PRODUCT TAGS
          </h3>
          <div className="flex justify-start items-center gap-2 text-[#b7b7b7]">
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              10-20
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              100-200
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              500-1000
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              1500-20000
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              2000-3000
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              3500-5000
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              5000-10000
            </p>
            <p className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs">
              10000-20000
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterProductTags;
