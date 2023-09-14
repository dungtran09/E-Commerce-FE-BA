import React from "react";

const FooterProductTags = () => {
  const tags = [
    "10-20",
    "100-200",
    "500-1000",
    "1500-2000",
    "2500-3000",
    "3000-5000",
    "5000-10000",
  ];

  const tagsEls = tags.map((tag, index) => (
    <p
      className="border-r border-[#272727] pr-2 cursor-pointer hover:text-white text-xs"
      key={index}
    >
      {tag}
    </p>
  ));

  return (
    <>
      <div className="flex flex-col border-t-[1px] border-[#272727] w-full bg-[#191919]">
        <div className="flex flex-col w-main justify-between m-auto mt-4 mb-4">
          <h3 className="uppercase border-l-[3px] text-white border-main font-medium mb-4 text-[15px] pl-2">
            PRODUCT TAGS
          </h3>
          <div className="flex justify-start items-center gap-2 text-[#b7b7b7]">
            {tagsEls}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterProductTags;
