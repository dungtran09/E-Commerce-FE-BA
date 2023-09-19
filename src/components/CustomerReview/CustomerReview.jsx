import React from "react";
import icons from "../../utils/icons";
import UserRatings from "./UserRatings";
import VoteBar from "./VoteBar";

const CustomerReview = () => {
  const { AiFillStar, AiOutlineStar } = icons;
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <VoteBar />
        <div className="flex flex-col justify-center items-center my-4">
          <div className="flex items-center mb-2 gap-3 rounded-lg p-3 bg-gray-50 text-[25px] text-yellow-400">
            <span className="cursor-pointer">
              <AiOutlineStar />
            </span>
            <span className="cursor-pointer">
              <AiOutlineStar />
            </span>
            <span className="cursor-pointer">
              <AiOutlineStar />
            </span>
            <span className="cursor-pointer">
              <AiOutlineStar />
            </span>
            <span className="cursor-pointer">
              <AiOutlineStar />
            </span>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Review this item
          </p>
        </div>
        <UserRatings />
      </div>
    </>
  );
};

export default CustomerReview;
