import React, { useState } from "react";
import productImgPlaceHolder from "../../assets/Product-inside.png";
import { calcRating, formatNumber } from "../../utils/helper";
import newProduct from "../../assets/new.png";
import tredingProduct from "../../assets/trending.png";
import SelectOption from "../SelectOptions/SelectOption";
import icons from "../../utils/icons";
import { Link } from "react-router-dom";
import path from "../../utils/path";

const Product = ({ product, isNew }) => {
  const { AiFillEye, IoMdMenu, BsHeartFill } = icons;

  const [isShowSelectOption, setIsShowSelectOption] = useState(false);
  return (
    <div className="w-full text-base">
      <div className="flex flex-col items-center p-2 bg-white border border-gray-200 shadow">
        <Link
          to={`/${path.PRODUCTS}/${product.category.toLowerCase()}/${
            product.slug
          }/${product._id}`}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setIsShowSelectOption(true);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setIsShowSelectOption(false);
          }}
        >
          <div className="w-full relative flex justify-center items-center">
            {isShowSelectOption && (
              <div className="absolute left-0 right-0 bottom-0 flex justify-center gap-3 animate-slide-top">
                <SelectOption icon={<BsHeartFill />} />
                <SelectOption icon={<IoMdMenu />} />
                <SelectOption icon={<AiFillEye />} />
              </div>
            )}
            <img
              src={product?.thumb || productImgPlaceHolder}
              alt={product.name}
              className="w-[274px] h-[274px] object-cover"
            />
            {isNew && (
              <img
                src={isNew === 1 ? tredingProduct : newProduct}
                alt="image"
                className="absolute top-0 right-0 w-[70px] h-[25px] object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-1 w-full mt-[15px] items-start">
            <span className="line-clamp-1">{product?.title}</span>
            <span className="flex flex-row h-4">
              {calcRating(product.totalRatings)}
            </span>
            <span className="">{formatNumber(product?.price)} VND</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
