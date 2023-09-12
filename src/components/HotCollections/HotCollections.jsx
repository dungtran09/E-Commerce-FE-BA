import React from "react";
import { useSelector } from "react-redux";
import icons from "../../utils/icons";
import Title from "../Title/Title";

const HotCollections = () => {
  const { IoIosArrowForward } = icons;

  const { data: categories, status } = useSelector((state) => state.categories);

  const categoriesEls = categories?.map((category, index) => (
    <div key={index} className="flex-initial border w-[396px] flex">
      <div className="w-[144px] h-[129px] object-cover flex-1">
        <img src={category.image} alt="image" />
      </div>
      <div className="p-4 flex-1 gap-4">
        <h3 className="uppercase font-medium">{category.title}</h3>
        <ul className="text-sm ml-2">
          {category.brand.map((item, index) => (
            <li
              key={index}
              className="gap-1 cursor-pointer flex items-center font-light hover:text-main"
            >
              <IoIosArrowForward />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <>
      <Title title="Hot Collections" />
      <div className="flex flex-wrap gap-4 mt-4 min-h-[202px]">
        {categoriesEls}
      </div>
    </>
  );
};

export default HotCollections;
