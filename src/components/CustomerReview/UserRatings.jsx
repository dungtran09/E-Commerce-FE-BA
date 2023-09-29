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
      <p className="mt-4 text-md text-gray-600">{review?.text}</p>
      <div className="flex justify-between items-center">
        <div className="mt-4 flex items-center space-x-4 py-6">
          <div className="">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
              alt=""
            />
          </div>
          <div className="text-sm font-semibold">
            {review?._id} •
            <span className="font-normal"> {review?.updateAt}</span>
          </div>
        </div>
        <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
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
