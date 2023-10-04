import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGetProduct } from "../../apis";
import statusCode from "../../utils/statusCode";

const UserRatings = ({ reviews }) => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await apiGetProduct(id);
    if (res.status === statusCode.SUCCESS) {
      setProduct(res?.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id, reviews]);

  const reviewsEls = product?.ratings?.map((review, index) => (
    <div className="mt-4 border p-2" key={index}>
      <div className="flex mt-2 font-semibold text-sky-700">
        {review?.star} star
      </div>
      <p className="text-md text-gray-600">{review?.text}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="">
            <img
              className="w-6 h-6 rounded-full"
              src="https://semantic-ui.com/images/avatar2/large/elyse.png"
            />
          </div>
          <div className="text-sm font-semibold">
            {review?._id} •
            <span className="font-normal"> {review?.updateAt}</span>
          </div>
        </div>
        <div className="p-4 bg-main hover:opacity-70 rounded-full h-4 w-4 flex items-center justify-center text-lg text-white shadow-lg cursor-pointer">
          +
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-full bg-white duration-500">{reviewsEls}</div>
    </>
  );
};

export default UserRatings;
