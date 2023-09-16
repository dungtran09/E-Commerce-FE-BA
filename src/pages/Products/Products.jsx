import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Filter, ListCard, ListProducts } from "../../components";

const Products = () => {
  let { products: category } = useParams();

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <Breadcrumbs category={category} title={category} />
      </section>
      <section className="w-main flex flex-col justify-between items-start mt-4 m-auto">
        <Filter />
      </section>
      <section className="w-main flex flex-wrap mt-4 m-auto">
        <ListProducts category={category} />
      </section>
    </div>
  );
};

export default Products;
