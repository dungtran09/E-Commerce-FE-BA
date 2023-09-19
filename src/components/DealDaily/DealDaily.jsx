import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../apis/apiProducts";
import icons from "../../utils/icons";
import productImgPlaceHolder from "../../assets/Product-inside.png";
import { calcRating, formatNumber } from "../../utils/helper";
import { ImMenu } from "react-icons/im";
import CountDownDealDaily from "./CountDownDealDaily";
import { Link } from "react-router-dom";
import path from "../../utils/path";

const DealDaily = () => {
  const { AiFillStar } = icons;
  const [dealDailyProduct, setDealDailyProduct] = useState(null);

  const fetchProductForDealDaily = async () => {
    const response = await apiGetProducts({
      sort: "-totalRatings",
      limit: 1,
    });

    if (response.status === "success") {
      setDealDailyProduct(response.data[0]);
    }
  };

  useEffect(() => {
    fetchProductForDealDaily();
  }, []);

  return (
    <Link
      to={`/${path.PRODUCTS}/${dealDailyProduct?.category}/${dealDailyProduct?.slug}/${dealDailyProduct?._id}`}
    >
      <div className="w-full border flex-auto mt-1">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <span className="flex-2 text-[25px]">
              <AiFillStar className="text-main" />
            </span>
            <span className="flex-3 font-bold text-[20px] text-center">
              Deals Daily
            </span>
            <span className="flex-2"></span>
          </div>
          <div className="w-full flex flex-col items-center mt-8 cursor-pointer">
            <img
              src={dealDailyProduct?.thumb || { productImgPlaceHolder }}
              alt="Deal daily product"
              className="w-full object-contain"
            />
            <div className="mt-4 flex flex-col justify-center items-center">
              <span className="line-clamp-1">{dealDailyProduct?.title}</span>
              <span className="flex flex-row h-4">
                {calcRating(dealDailyProduct?.totalRatings)}
              </span>
              <span className="">
                {formatNumber(dealDailyProduct?.price)} VND
              </span>
            </div>
          </div>
          <CountDownDealDaily />
          <div className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center bg-main text-white p-2 gap-2 hover:bg-gray-800 font-medium"
            >
              <ImMenu /> <span>Options</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DealDaily;
