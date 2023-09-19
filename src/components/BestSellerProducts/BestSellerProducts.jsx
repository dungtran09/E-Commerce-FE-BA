import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis";
import { Product, SliderControl, SubBanner } from "../";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";

const tabs = [
  {
    id: 1,
    name: "BEST SELLERS",
  },
  {
    id: 2,
    name: "NEW ARRIVALS",
  },
];

const BestSellerProducts = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState(null);
  const [activedTab, setActivedTab] = useState(1);
  const [products, setProducts] = useState(null);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await apiGetProducts({ sort: "-sold" });

    if (res?.status === "success") {
      setBestSellerProducts(res?.data);
      setProducts(res?.data);
    }
  };

  useEffect(() => {
    // fetch new products
    dispatch(getProducts());

    // fetch products sold in order
    fetchProducts();
  }, []);

  const { data: newProducts, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (activedTab === 1) {
      setProducts(bestSellerProducts);
    }
    if (activedTab === 2) {
      setProducts(newProducts);
    }
  }, [activedTab]);

  const tabsEl = tabs.map((tab) => (
    <span
      key={tab.id}
      className={`font-semibold capitalize border-r pr-8 text-gray cursor-pointer text-lg ${
        activedTab === tab.id ? "text-main" : ""
      }`}
      onClick={() => setActivedTab(tab.id)}
    >
      {tab.name}
    </span>
  ));

  const productsEls = products?.map((product, index) => (
    <Product key={index} product={product} isNew={activedTab === 1 ? 1 : 2} />
  ));
  return (
    <>
      <div className="flex text-[25px] gap-8 pb-2 border-b-2 border-main">
        {tabsEl}
      </div>
      <div className="border">
        <SliderControl productsEls={productsEls} slidesToShow={3} />
      </div>
      <SubBanner />
    </>
  );
};

export default BestSellerProducts;
