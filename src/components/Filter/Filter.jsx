import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { apiGetColors, apiGetProductCategories } from "../../apis";

import icons from "../../utils/icons";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const Filter = ({ brands }) => {
  const { AiOutlineSearch } = icons;
  const [isToggle, setIsToggle] = useState(false);
  const [selected, setSelected] = useState([]);
  const [colors, setColors] = useState(null);
  const [inputSearch, setInputSearch] = useState(null);
  const { category } = useParams();

  const fetchColors = async () => {
    const res = await apiGetColors();
    if (res?.status === "success") {
      setColors(res?.data);
    }
  };

  useEffect(() => {
    fetchColors();
  }, [category]);

  const { data: categories } = useSelector((status) => status.categories);

  // const [checkedStatePrices, setCheckedStatePrices] = useState(
  //   new Array(prices.length).fill(false),
  // );

  const [checkedStateColors, setCheckedStateColors] = useState(
    new Array(colors?.length).fill(false),
  );

  const [checkedStateBrands, setCheckedStateBrands] = useState(
    new Array(categories?.brand?.length).fill(false),
  );

  // const handlerOnChangePrices = (position, value) => {
  //   const hasValue = selected?.find((v) => v === value);
  //   if (hasValue) {
  //     setSelected((prev) => prev?.filter((v) => v !== value));
  //   } else {
  //     setSelected((prev) => [...prev, value]);
  //   }
  //   const updatedCheckedStatePrices = checkedStatePrices?.map((item, index) => {
  //     return index === position ? !item : item;
  //   });
  //
  //   setCheckedStatePrices(updatedCheckedStatePrices);
  // };

  const handlerOnChangeColors = (position, value) => {
    const hasValue = selected?.find((v) => v === value);
    if (hasValue) {
      setSelected((prev) => prev?.filter((v) => v !== value));
    } else {
      setSelected((prev) => [...prev, value]);
    }
    const updatedCheckedStateColors = checkedStateColors?.map((item, index) => {
      return index === position ? !item : item;
    });

    setCheckedStateColors(updatedCheckedStateColors);
  };

  const handlerOnChangeBrands = (position, brand) => {
    const hasValue = selected?.find((v) => v === brand);
    if (hasValue) {
      setSelected((prev) => prev?.filter((v) => v !== brand));
    } else {
      setSelected((prev) => [...prev, brand]);
    }
    const updatedCheckedStateBands = checkedStateBrands?.map((item, index) => {
      return index === position ? !item : item;
    });

    setCheckedStateBrands(updatedCheckedStateBands);
  };

  // const pricesEls = prices?.map((price) => (
  //   <div className="max-w-sm flex justify-center items-center" key={price.id}>
  //     <div className="flex items-start space-x-3 py-2">
  //       <input
  //         type="checkbox"
  //         id={`hs-list-group-item-checkbox-price-${price.id}`}
  //         name={price.value}
  //         value={price.value}
  //         className="border-gray-200 h-5 w-5 cursor-pointer"
  //         checked={checkedStatePrices[price.id]}
  //         onChange={() => handlerOnChangePrices(price.id, price.value)}
  //       />
  //     </div>
  //     <label
  //       htmlFor={`hs-list-group-item-checkbox-price-${price.id}`}
  //       className="ml-3.5 block w-full text-sm text-gray-600 cursor-pointer hover:text-main"
  //     >
  //       {price.value}
  //     </label>
  //   </div>
  // ));
  // const colorEls = colors?.map((cl, index) => (
  //   <div className="max-w-sm flex justify-center items-center" key={index}>
  //     <div className="flex items-start space-x-3 py-2">
  //       <input
  //         id={`hs-list-group-item-checkbox-color-${index}`}
  //         type="checkbox"
  //         name={cl.color}
  //         value={cl.color}
  //         className="border-gray-200 h-5 w-5 cursor-pointer"
  //         checked={checkedStateColors[index]}
  //         onChange={() => handlerOnChangeColors(index, cl.color)}
  //       />
  //     </div>
  //     <label
  //       htmlFor={`hs-list-group-item-checkbox-color-${index}`}
  //       className="ml-3.5 block w-full text-sm text-gray-600 cursor-pointer hover:text-main"
  //     >
  //       {cl.color}
  //     </label>
  //   </div>
  // ));

  const brandEls = brands?.map((brand) => (
    <div className="max-w-sm flex justify-center items-center" key={brand?._id}>
      <div className="flex items-start space-x-3 py-2">
        <input
          type="checkbox"
          id={`hs-list-group-item-checkbox-cate-${brand?._id}`}
          className="border-gray-200 h-5 w-5 cursor-pointer"
          name={brand?.title}
          checked={checkedStateBrands[brand?._id]}
          onChange={() => handlerOnChangeBrands(brand?._id, brand?.title)}
        />
      </div>
      <label
        htmlFor={`hs-list-group-item-checkbox-cate-${brand?._id}`}
        className="ml-3.5 block w-full text-sm text-gray-600 cursor-pointer hover:text-main"
      >
        {brand?.title}
      </label>
    </div>
  ));
  return (
    <>
      <div className="w-full border p-5 bg-white">
        <div className="relative">
          <div className="absolute flex items-center ml-2 h-full">
            <AiOutlineSearch />
          </div>

          <InputField
            value={inputSearch}
            onChange={() => setInputSearch}
            fieldName="Search..."
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button
            style="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            onClickHandler={() => setIsToggle(!isToggle)}
            name={`Filter (${selected.length || 0})`}
          />

          <Button
            style="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            name="Reset Filter"
          />
        </div>

        {isToggle && (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <label
                  htmlFor="Brands"
                  className="block text-sm font-medium text-gray-900"
                >
                  Brands
                </label>
                {brandEls}
              </div>

              <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <label
                  htmlFor="Prices"
                  className="block text-sm font-medium text-gray-900"
                >
                  Prices
                </label>

                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">100000-200000</option>
                  <option value="JM">1500000-2500000</option>
                  <option value="SRV">3000000-4500000</option>
                  <option value="JH">50000000-60000000</option>
                </select>
              </div>

              <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <label
                  htmlFor="Colors"
                  className="block text-sm font-medium text-gray-900"
                >
                  Colors
                </label>
                {}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
