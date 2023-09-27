import React, { useState } from "react";
import productImgPlaceHolder from "../../assets/Product-inside.png";
import { calcRating, formatNumber } from "../../utils/helper";
import newProduct from "../../assets/new.png";
import tredingProduct from "../../assets/trending.png";
import SelectOption from "../SelectOptions/SelectOption";
import icons from "../../utils/icons";
import { Link, useParams } from "react-router-dom";
import path from "../../utils/path";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import QuickReview from "./QuickReview";

const Product = ({ product, isNew }) => {
  const { AiFillEye, IoMdMenu, BsFillCartCheckFill } = icons;
  const [isQuickView, setIsQuickView] = useState(false);
  const dispatch = useDispatch();
  const onAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const showQuickView = () => {
    setIsQuickView(true);
  };

  const hideQuickView = () => {
    setIsQuickView(false);
  };

  const [isShowSelectOption, setIsShowSelectOption] = useState(false);
  return (
    <>
      {isQuickView && (
        <QuickReview
          showQuickView={showQuickView}
          hideQuickView={hideQuickView}
          product={product}
        />
      )}
      <div className="w-full text-base cursor-pointer hover:shadow-xl">
        <div
          className="flex flex-col items-center p-3 bg-white border border-gray-200 shadow"
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
                <SelectOption
                  icon={
                    <BsFillCartCheckFill
                      size={20}
                      onClick={() => onAddToCart(product)}
                    />
                  }
                />
                <Link
                  to={`/${path.PRODUCTS}/${product?.categoryName}/${product?.slug}/${product?._id}`}
                >
                  <SelectOption icon={<IoMdMenu size={20} />} />
                </Link>
                <SelectOption
                  icon={
                    <AiFillEye
                      size={20}
                      onClick={() => setIsQuickView(!isQuickView)}
                    />
                  }
                />
              </div>
            )}
            <Link
              to={`/${path.PRODUCTS}/${product?.categoryName}/${product?.slug}/${product?._id}`}
            >
              <img
                src={product?.thumb || productImgPlaceHolder}
                alt={product?.title}
                className="w-[200px] h-[200px] object-fill cursor-pointer"
              />
            </Link>
            {isNew && (
              <img
                src={isNew === 1 ? tredingProduct : newProduct}
                alt="image"
                className="absolute top-0 right-0 w-[70px] h-[25px]"
              />
            )}
          </div>
          <div className="flex flex-col gap-2 w-full mt-[15px] items-start">
            <span className="line-clamp-1 mb-2 text-ms font-medium leading-tight text-neutral-800">
              {product?.title}
            </span>
            <span className="flex flex-row h-4">
              {calcRating(product?.totalRatings)}
            </span>
            <span className="text-main text-sm">
              {formatNumber(product?.price)} VND
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
