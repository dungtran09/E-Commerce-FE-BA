import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { apiGetColors, apiGetProductCategories } from "../../apis";

import icons from "../../utils/icons";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const Filter = ({
  brands,
  handlerSortFromHighToLow,
  handlerSortFromLowToHigh,
  isSortHighToLow,
  isSortLowToHigh,
}) => {
  const { AiOutlineSearch, BsArrowDown, BsArrowUp } = icons;
  const [inputSearch, setInputSearch] = useState(null);
  const { category } = useParams();

  const { data: categories } = useSelector((status) => status.categories);

  return (
    <>
      <div className="w-full flex justify-between items-center border p-2 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 justify-center items-center">
            <Button
              style={`px-4 py-2 ${
                isSortHighToLow ? "bg-main text-white" : "bg-gray-100"
              } hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md`}
              onClickHandler={() => {
                handlerSortFromHighToLow();
              }}
              icon={<BsArrowUp />}
            />
            <Button
              style={`px-4 py-2 ${
                isSortLowToHigh ? "bg-main text-white" : "bg-gray-100"
              } hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md`}
              onClickHandler={() => {
                handlerSortFromLowToHigh();
              }}
              icon={<BsArrowDown />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
