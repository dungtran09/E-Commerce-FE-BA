import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis";
import Product from "../Product/Product";

const ListProducts = ({ category }) => {
  const [products, setProducts] = useState(null);

  const fetchProductsByCategory = async (category) => {
    const res = await apiGetProducts({ category });
    if (res?.status === "success") {
      setProducts(res?.data);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [category]);

  const productEls = products?.map((product, index) => (
    <>
      <div key={index} className="flex justify-center text-6xl">
        <Product product={product} isNew={false} />
      </div>
    </>
  ));

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productEls}
      </div>
    </div>
  );
};

export default ListProducts;
