import React from "react";
import { calcRating, formatNumber } from "../../utils/helper";

const FeaturedProductCard = ({ title, thumb, price, totalRatings }) => {
  return (
    <div className="w-1/3 flex flex-auto px-[10px] mb-[20px]">
      <div className="flex w-full border">
        <img src={thumb} alt="img" className="w-[90px] object-contain p-4" />
        <div className="flex flex-col mt-[15px] items-start gap-1 w-full text-xs">
          <span className="line-clamp-1 capitalize text-sm cursor-pointer hover:text-main">
            {title.toLowerCase()}
          </span>
          <span className="flex flex-row h-4">{calcRating(totalRatings)}</span>
          <span className="">{formatNumber(price)} VND</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
