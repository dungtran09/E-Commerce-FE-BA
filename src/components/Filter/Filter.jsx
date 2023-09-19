import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiGetColors, apiGetProductCategories } from "../../apis";

import { prices } from "../../utils/constants";

const Filter = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [selected, setSelected] = useState([]);
  const [brands, setBrands] = useState(null);
  const [colors, setColors] = useState(null);

  const { category } = useParams();

  const fetchBrands = async (category) => {
    const res = await apiGetProductCategories({ title: category });
    if (res?.status === "success") {
      setBrands(res?.data);
    }
  };

  const fetchColors = async () => {
    const res = await apiGetColors();
    if (res?.status === "success") {
      setColors(res?.data);
    }
  };

  useEffect(() => {
    fetchBrands(category);
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

  const styleBtn =
    "bg-gray-100 hover:bg-gray-150 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center cursor-pointer";

  const pricesEls = prices?.map((price) => (
    <div className="max-w-sm flex justify-center items-center" key={price.id}>
      <div className="flex items-start space-x-3 py-2">
        <input
          type="checkbox"
          id={`hs-list-group-item-checkbox-price-${price.id}`}
          name={price.value}
          value={price.value}
          className="border-gray-200 h-5 w-5 cursor-pointer"
          checked={checkedStatePrices[price.id]}
          onChange={() => handlerOnChangePrices(price.id, price.value)}
        />
      </div>
      <label
        htmlFor={`hs-list-group-item-checkbox-price-${price.id}`}
        className="ml-3.5 block w-full text-sm text-gray-600 cursor-pointer hover:text-main"
      >
        {price.value}
      </label>
    </div>
  ));
  const colorEls = colors?.map((cl, index) => (
    <div className="max-w-sm flex justify-center items-center" key={index}>
      <div className="flex items-start space-x-3 py-2">
        <input
          id={`hs-list-group-item-checkbox-color-${index}`}
          type="checkbox"
          name={cl.color}
          value={cl.color}
          className="border-gray-200 h-5 w-5 cursor-pointer"
          checked={checkedStateColors[index]}
          onChange={() => handlerOnChangeColors(index, cl.color)}
        />
      </div>
      <label
        htmlFor={`hs-list-group-item-checkbox-color-${index}`}
        className="ml-3.5 block w-full text-sm text-gray-600 cursor-pointer hover:text-main"
      >
        {cl.color}
      </label>
    </div>
  ));

  const brandEls = brands?.["0"]?.brand?.map((brand, index) => (
    <div className="max-w-sm flex justify-center items-center" key={index}>
      <div className="flex items-start space-x-3 py-2">
        <input
          type="checkbox"
          id={`hs-list-group-item-checkbox-cate-${index}`}
          className="border-gray-200 h-5 w-5 cursor-pointer"
          name={brand}
          value={brand}
          checked={checkedStateBrands[index]}
          onChange={() => handlerOnChangeBrands(index, brand)}
        />
      </div>
      <label
        htmlFor={`hs-list-group-item-checkbox-cate-${index}`}
        className="ml-3.5 block w-full text-sm text-gray-600 cursor-pointer hover:text-main"
      >
        {brand}
      </label>
    </div>
  ));
  return (
    <>
      <div className="flex w-main justify-between items-center border p-2 shadow-lg">
        <div className="flex gap-4 text-sm">
          <span className={styleBtn} onClick={() => setIsToggle(!isToggle)}>
            ({selected.length}) Filters
          </span>
          <span className={styleBtn}>Clear All</span>
        </div>
        <div className={styleBtn}>Sort by</div>
      </div>
      {isToggle && (
        <div className="w-main flex flex-wrap gap-5 border-x border-b p-4 shadow-md">
          <div className="flex-1 flex flex-col p-4 gap-3 border">
            <div className="text-gray-700 font-semibold">Price</div>
            <div className="flex flex-col">{pricesEls}</div>
          </div>
          <div className="flex-1 flex flex-col gap-3 p-4 border">
            <div className="text-gray-700 font-semibold">Colors</div>
            <div className="flex flex-col">{colorEls}</div>
          </div>
          <div className="flex-1 flex flex-col gap-3 p-4 border">
            <div className="text-gray-700 font-semibold">Brands</div>
            <div className="flex flex-col">{brandEls}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
