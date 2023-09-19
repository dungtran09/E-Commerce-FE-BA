import React from "react";
import { Link } from "react-router-dom";
import { calcRating, formatNumber } from "../../utils/helper";
import path from "../../utils/path";

const FeaturedProductCard = ({
  title,
  thumb,
  price,
  totalRatings,
  _id,
  category,
  slug,
}) => {
  return (
    <div className="w-1/3 flex flex-auto px-[10px] mb-[20px]">
      <div className="flex w-full border">
        <img src={thumb} alt="img" className="w-[90px] object-contain p-4" />
        <div className="flex flex-col mt-[15px] items-start gap-1 w-full text-xs">
          <Link to={`/${path.PRODUCTS}/${category}/${slug}/${_id}`}>
            <span className="line-clamp-1 capitalize text-sm cursor-pointer hover:text-main">
              {title.toLowerCase()}
            </span>
          </Link>
          <span className="flex flex-row h-4">{calcRating(totalRatings)}</span>
          <span className="">{formatNumber(price)} VND</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
