import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis/apiProducts";
import Title from "../Title/Title";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const fetchProducts = async () => {
    const response = await apiGetProducts({
      limit: 9,
      totalRatings: { $gt: 4 },
      price: "-price",
    });

    if (response?.status === "success") {
      setFeaturedProducts(response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const featuredProductsEls = featuredProducts?.map((product, index) => (
    <FeaturedProductCard
      key={index}
      thumb={product.thumb}
      title={product.title}
      price={product.price}
      totalRatings={product.totalRatings}
    />
  ));

  return (
    <>
      <Title title="Featured Products" />
      <div className="flex flex-wrap mt-[15px] mx-[-10px]">
        {featuredProductsEls}
      </div>
    </>
  );
};

export default FeaturedProducts;
