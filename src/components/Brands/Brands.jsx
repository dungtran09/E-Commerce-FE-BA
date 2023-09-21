import React from "react";

const Brands = ({ brands }) => {
  const brandsEls = brands?.map((brand, index) => (
    <div
      key={index}
      className="p-2 flex flex-wrap justify-center items-center gap-2 cursor-pointer"
    >
      <div className="bg-white p-1 border hover:border-main">
        <img
          src={brand?.logo}
          alt="image"
          className="w-[93px] h-[25px] object-contain"
        />
      </div>
    </div>
  ));
  return (
    <>
      <div className="w-main flex bg-gray-100 mb-4">{brandsEls}</div>
    </>
  );
};

export default Brands;
