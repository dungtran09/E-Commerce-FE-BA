import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis";
import statusCode from "../../utils/statusCode";
import Product from "../Product/Product";
import SliderControl from "../SliderControl/SliderControl";
import Title from "../Title/Title";

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState(null);
  const [activedTab, setActivedTab] = useState(false);

  const fetchProducts = async () => {
    const res = await apiGetProducts({ category: category });
    if (res?.status === statusCode.SUCCESS) {
      setProducts(res?.data);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [category]);

  const productsEls = products?.map((product, index) => (
    <Product key={index} product={product} isNew={activedTab} />
  ));

  return (
    <>
      <Title title="Related Products" />
      <div className="border">
        <SliderControl productsEls={productsEls} slidesToShow={4} />
      </div>
    </>
  );
};

export default RelatedProducts;
