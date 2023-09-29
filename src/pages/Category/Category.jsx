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
import statusCode from "../../utils/statusCode";

const Category = () => {
  const [products, setProducts] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 8;
  const totalPages = Math.ceil(totalProducts / limit);
  const [loadding, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [categoryBrands, setCategoryBrands] = useState(null);
  const { category } = useParams();
  const [isSortHighToLow, setIsSortHighToLow] = useState(false);
  const [isSortLowToHigh, setIsSortLowToHigh] = useState(false);

  const countProductsByCategory = async (category) => {
    const res = await apiCountCategory({ category });
    if (res?.status === statusCode.SUCCESS) {
      setTotalProducts(res?.data?.totalItems);
    }
  };

  const fetchCategoryBrands = async (category) => {
    const res = await apiGetProductCategories({ title: category });
    if (res?.status === statusCode.SUCCESS) {
      setCategoryBrands(res?.data[0]);
    }
  };

  const fetchProductsByCategory = async (currentPage, _id, sortBy) => {
    const res = await apiGetProductsByCategoryId(_id, {
      page: currentPage,
      limit,
      sort: sortBy,
    });
    if (res?.status === statusCode.SUCCESS) {
      setProducts(res?.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryBrands(category);

    if (categoryBrands?._id) {
      if (isSortHighToLow) {
        fetchProductsByCategory(currentPage, categoryBrands?._id, "price");
      } else if (isSortLowToHigh) {
        fetchProductsByCategory(currentPage, categoryBrands?._id, "-price");
      } else {
        fetchProductsByCategory(currentPage, categoryBrands?._id);
      }
      countProductsByCategory(categoryBrands?._id);
    }
  }, [
    category,
    currentPage,
    categoryBrands?._id,
    isSortLowToHigh,
    isSortHighToLow,
  ]);

  const handlerSortFromHighToLow = () => {
    setIsSortHighToLow(true);
    setIsSortLowToHigh(false);
  };

  const handlerSortFromLowToHigh = () => {
    setIsSortLowToHigh(true);
    setIsSortHighToLow(false);
  };

  const productEls = products?.map((product, index) => (
    <div key={index} className="flex justify-center">
      <Product product={product} isNew={false} category={category} />
    </div>
  ));

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <Breadcrumbs category={category} />
      </section>
      <div className="w-main m-auto mt-4">
        <Brands brands={categoryBrands?.brands} />
        <Filter
          brands={categoryBrands?.brands}
          isSortHighToLow={isSortHighToLow}
          isSortLowToHigh={isSortLowToHigh}
          handlerSortFromHighToLow={handlerSortFromHighToLow}
          handlerSortFromLowToHigh={handlerSortFromLowToHigh}
        />
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
