import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Breadcrumbs, Title } from "../../components";
import path from "../../utils/path";

const Products = () => {
  const { data: categories, status } = useSelector((state) => state.categories);
  const { category } = useParams();

  const categoryEls = categories?.map((cate, index) => (
    <NavLink key={index} to={`/${path.PRODUCTS}/${cate?.title}`}>
      <div className="flex justify-center ">
        <div className="w-72 bg-white shadow-sm cursor-pointer rounded-sm duration-500 hover:shadow-md border">
          <img
            src={cate?.image}
            alt="Product"
            className="w-full h-[250px] object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              ({cate?.brands?.length || 0}) BRAND
            </span>
            <p className="text-lg font-semibold truncate block capitalize">
              {cate?.title}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <Breadcrumbs category={category} />
      </section>
      <div className="w-main m-auto">
        <Title title="All Collections" />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryEls}
        </section>
      </div>
    </div>
  );
};

export default Products;
