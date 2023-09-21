import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  apiGetProducts,
  apiCountCategory,
  apiGetProductCategories,
} from "../../apis";
import { apiGetProductsByCategoryId } from "../../apis/apiProducts";
import {
  Brands,
  Breadcrumbs,
  Filter,
  Pagination,
  Product,
} from "../../components";

const Category = () => {
  const [products, setProducts] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 10;
  const totalPages = Math.ceil(totalProducts / limit);
  const [loadding, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [categoryBrands, setCategoryBrands] = useState(null);
  const { category } = useParams();

  const { category: title } = useParams();

  // const countProductsByCategory = async (categoryId) => {
  //   const res = await apiCountCategory({ categoryId });
  //   if (res?.status === "success") {
  //     setCategoryId(res?.data._id);
  //     setTotalProducts(res?.data[0]?.totalItems);
  //   }
  // };
  //

  const fetchCategoryBrands = async (category) => {
    const res = await apiGetProductCategories({ title: category });
    if (res?.status === "success") {
      setCategoryBrands(res?.data[0]);
    }
  };

  const fetchProductsByCategory = async (currentPage, _id) => {
    const res = await apiGetProductsByCategoryId(_id, {
      page: currentPage,
      limit,
    });
    if (res?.status === "success") {
      setProducts(res?.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryBrands(category);
    fetchProductsByCategory(currentPage, categoryBrands?._id);
  }, [category, currentPage, categoryBrands?._id]);

  const productEls = products?.map((product, index) => (
    <div key={index} className="flex justify-center">
      <Product product={product} isNew={false} category={category} />
    </div>
  ));

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <Breadcrumbs title={title} />
      </section>
      <div className="w-main m-auto mt-4">
        <Brands brands={categoryBrands?.brands} />
        <Filter brands={categoryBrands?.brands} />
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
