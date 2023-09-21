import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { apiGetColors, apiGetProductCategories } from "../../apis";

import { prices } from "../../utils/constants";
import icons from "../../utils/icons";

const Filter = ({ brands }) => {
  const { AiOutlineSearch } = icons;
  const [isToggle, setIsToggle] = useState(false);
  const [selected, setSelected] = useState([]);
  const [colors, setColors] = useState(null);

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

  const [checkedStatePrices, setCheckedStatePrices] = useState(
    new Array(prices.length).fill(false),
  );

  const [checkedStateColors, setCheckedStateColors] = useState(
    new Array(colors?.length).fill(false),
  );

  const [checkedStateBrands, setCheckedStateBrands] = useState(
    new Array(categories?.brand?.length).fill(false),
  );

  const handlerOnChangePrices = (position, value) => {
    const hasValue = selected?.find((v) => v === value);
    if (hasValue) {
      setSelected((prev) => prev?.filter((v) => v !== value));
    } else {
      setSelected((prev) => [...prev, value]);
    }
    const updatedCheckedStatePrices = checkedStatePrices?.map((item, index) => {
      return index === position ? !item : item;
    });

    setCheckedStatePrices(updatedCheckedStatePrices);
  };

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
          value={brand?.title}
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
      <div className="w-full shadow p-5 bg-white">
        <div className="relative">
          <div className="absolute flex items-center ml-2 h-full">
            <AiOutlineSearch />
          </div>

          <input
            type="text"
            placeholder="Search by listing, location, bedroom number..."
            className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            onClick={() => setIsToggle(!isToggle)}
          >
            Filters ({selected.length || 0})
          </button>

          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filter
          </button>
        </div>

        {isToggle && (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <span className="text-lg font-semibold">Brands</span>
                {brandEls}
              </div>

              <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <span className="text-lg font-semibold">Prices</span>
                {}
              </div>

              <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <span className="text-lg font-semibold">Colors</span>
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
