import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetProducts, apiCountCategory } from "../../apis";
import {
  Brands,
  Breadcrumbs,
  Filter,
  Pagination,
  Product,
} from "../../components";

const Category = () => {
  const [products, setProducts] = useState(null);
  const { category } = useParams();
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 1;
  const totalPages = Math.ceil(totalProducts / limit);

  const [loadding, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const countProductsByCategory = async (category) => {
    const res = await apiCountCategory({ category });
    if (res?.status === "success") {
      setTotalProducts(res?.data[0]?.totalItems);
    }
  };

  const fetchProductsByCategory = async (currentPage) => {
    const res = await apiGetProducts({
      category,
      page: currentPage,
      limit,
    });
    if (res?.status === "success") {
      setProducts(res?.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    countProductsByCategory(category);
    fetchProductsByCategory(currentPage);
  }, [category, currentPage]);

  const productEls = products?.map((product, index) => (
    <div key={index} className="flex justify-center">
      <Product product={product} isNew={false} />
    </div>
  ));

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <Breadcrumbs category={category} />
      </section>
      <div className="w-main m-auto mt-4">
        <Brands />
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-2">
          {productEls}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={setCurrentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Category;
