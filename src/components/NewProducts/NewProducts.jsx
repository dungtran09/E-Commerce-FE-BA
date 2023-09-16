import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import SliderControl from "../SliderControl/SliderControl";
import Title from "../Title/Title";

const NewProducts = () => {
  const [activedTab, setActivedTab] = useState(2);
  const { data: products, status } = useSelector((state) => state.products);

  const productsEls = products?.map((product, index) => (
    <Product key={index} product={product} isNew={activedTab} />
  ));

  return (
    <>
      <Title title="New Arrivals" />
      <div className="border">
        <SliderControl productsEls={productsEls} slidesToShow={4} />
      </div>
    </>
  );
};

export default NewProducts;
