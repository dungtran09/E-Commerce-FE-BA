import React, { useState } from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
const ProductInfomation = ({ product }) => {
  const [actived, setActived] = useState(4);
  const infos = [
    {
      id: 0,
      title: "DESCRIPTION",
      desc: <p>Empty</p>,
    },
    {
      id: 1,
      title: "WARRANTY",
      desc: <p>Empty</p>,
    },
    {
      id: 2,
      title: "DELIVERY",
      desc: <p>Empty</p>,
    },
    {
      id: 3,
      title: "PAYMENT",
      desc: <p>Empty</p>,
    },
    {
      id: 4,
      title: "CUSTOMER REVIEWS",
      desc: <CustomerReview product={product} />,
    },
  ];

  const handlerActived = (id) => {
    setActived(id);
  };

  const infosEls = infos.map((info, index) => (
    <div key={index} className="flex items-center">
      <span
        className={`bg-gray-100 cursor-pointer border p-2 ${
          actived === info.id ? "bg-white border border-b-0" : ""
        }`}
        onClick={() => handlerActived(info.id)}
      >
        <h3 className="text-sm">{info.title}</h3>
      </span>
    </div>
  ));

  return (
    <>
      <div className="flex items-center gap-1 relative bottom-[-1px]">
        {infosEls}
      </div>
      <div className="border w-full p-4 text-sm text-gray-700">
        {infos[actived].desc}
      </div>
    </>
  );
};

export default ProductInfomation;
