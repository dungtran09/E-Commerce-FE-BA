import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../apis";
import { Details, ProductInfomation, RelatedProducts } from "../../components";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import statusCode from "../../utils/statusCode";

const ProductDetails = () => {
  const { category, title, id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await apiGetProduct(id);
    if (res.status === statusCode.SUCCESS) {
      setProduct(res.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <Breadcrumbs category={category} title={title} product={product} />
      </section>
      <section className="w-main m-auto flex flex-col mt-4">
        <Details product={product} />
      </section>
      <section className="w-main m-auto flex flex-col mt-4">
        <ProductInfomation product={product} />
      </section>
      <section className="w-main m-auto flex flex-col mt-4">
        <RelatedProducts category={product?.category} />
      </section>
    </div>
  );
};

export default ProductDetails;
