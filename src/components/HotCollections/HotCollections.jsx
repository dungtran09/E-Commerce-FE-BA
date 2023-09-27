import React from "react";
import { useSelector } from "react-redux";
import icons from "../../utils/icons";
import Title from "../Title/Title";

const HotCollections = () => {
  const { IoIosArrowForward } = icons;

  const { data: categories, status } = useSelector(
    (state) => state?.categories,
  );

  const categoriesEls = categories?.map((category, index) => (
    <div key={index} className="flex-initial border w-[395px] flex">
      <div className="flex-1">
        <img
          src={category?.image}
          alt="image"
          className="w-[100%] h-[70px] p-2 object-contain"
        />
      </div>
      <div className="p-2 flex-1">
        <h3 className="uppercase font-medium">{category?.title}</h3>
        <div className="flex flex-col items-start text-sm ml-2 gap-1">
          {category.brands?.map((brand, index) => (
            <span
              key={index}
              className="gap-1 cursor-pointer flex items-center font-light hover:text-main"
            >
              <IoIosArrowForward />
              {brand.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Title title="Hot Collections" />
      <div className="flex flex-wrap gap-3 mt-4 min-h-[202px]">
        {categoriesEls}
      </div>
    </>
  );
};

export default HotCollections;
