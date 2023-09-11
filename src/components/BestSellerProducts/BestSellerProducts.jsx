import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis/apiProducts";
import { Product, SubBanner } from "../";
import Slider from "react-slick";
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

const settingsSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const BestSellerProducts = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState(null);
  const [newProducts, setNewProducts] = useState(null);
  const [activedTab, setActivedTab] = useState(1);
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const res = await Promise.all([
      apiGetProducts({ sort: "-sold" }),
      apiGetProducts({ sort: "-createAt" }),
    ]);

    if (res[0]?.status === "success") {
      setBestSellerProducts(res[0].data);
      setProducts(res[0].data);
    }
    if (res[1]?.status === "success") setNewProducts(res[1].data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      className={`font-semibold capitalize border-r pr-8 text-gray-500 cursor-pointer text-lg ${
        activedTab === tab.id ? "text-main" : ""
      }`}
      onClick={() => setActivedTab(tab.id)}
    >
      {tab.name}
    </span>
  ));

  const productsEl = products?.map((product) => (
    <Product
      key={product._id}
      product={product}
      isNew={activedTab == 1 ? true : false}
    />
  ));
  return (
    <div>
      <div className="flex text-[25px] gap-8 pb-2 border-b-2 border-main">
        {tabsEl}
      </div>
      <div className="mt-4 mx-[-10px]">
        <Slider {...settingsSlider}>{productsEl}</Slider>
      </div>
      <SubBanner />
    </div>
  );
};

export default BestSellerProducts;
