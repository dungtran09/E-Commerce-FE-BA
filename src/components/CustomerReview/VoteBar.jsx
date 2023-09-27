import React, { useEffect, useState } from "react";
import icons from "../../utils/icons";

const VoteBar = ({ totalRatings }) => {
  const { AiFillStar, AiOutlineStar } = icons;
  const [stars, setStars] = useState(0);

  useEffect(() => {
    let stars = [];
    for (let i = 0; i < totalRatings; i++) {
      stars.push(<AiFillStar key={i} />);
    }

    setStars(stars);
  }, [totalRatings]);

  return (
    <>
      <div className="w-full m-auto rounded-lg bg-gray-50 p-4">
        <div className="flex mb-2 text-yellow-400">
          {stars}
          <p className="ml-2 text-sm font-medium text-gray-900">
            {totalRatings} out of 5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500"></p>
        <div className="flex items-center mt-2">
          5 star
          <div className="flex-1 h-3 mx-4 bg-gray-200 rounded">
            <div className="h-3 bg-yellow-300 rounded w-[70%]"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">70%</span>
        </div>
        <div className="flex items-center mt-2">
          4 star
          <div className="flex-1 h-3 mx-4 bg-gray-200 rounded">
            <div className="h-3 bg-yellow-300 rounded w-[17%]"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">17%</span>
        </div>
        <div className="flex items-center mt-2">
          3 star
          <div className="flex-1 h-3 mx-4 bg-gray-200 rounded">
            <div className="h-3 bg-yellow-300 rounded w-[8%]"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">8%</span>
        </div>
        <div className="flex items-center mt-2">
          2 star
          <div className="flex-1 h-3 mx-4 bg-gray-200 rounded">
            <div className="h-3 bg-yellow-300 rounded w-[4%]"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">4%</span>
        </div>
        <div className="flex items-center mt-2">
          1 star
          <div className="flex-1 h-3 mx-4 bg-gray-200 rounded">
            <div className="h-3 bg-yellow-300 rounded w-[1%]"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">1%</span>
        </div>
      </div>
    </>
  );
};

export default VoteBar;
