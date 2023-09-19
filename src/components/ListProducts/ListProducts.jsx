import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis";
import Product from "../Product/Product";

const ListProducts = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const res = await apiGetProducts();
    if (res?.status === "success") {
      setProducts(res?.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productEls = products?.map((product, index) => (
    <div key={index} className="flex justify-center">
      <Product product={product} isNew={false} />
    </div>
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
