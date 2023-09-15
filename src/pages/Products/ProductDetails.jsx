import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../apis";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await apiGetProduct(id);
    if (res.status === "success") {
      setProduct(res.data);
    }

    console.log(product);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <main className="w-full">
      <header className="flex flex-col justify-center items-center h-[81px] bg-gray-100">
        <div className="w-main">
          <h3>{product?.title}</h3>
          <Breadcrumbs category={product?.category} title={product?.title} />
        </div>
      </header>
    </main>
  );
};

export default ProductDetails;
