import React from "react";
import Policy from "../Policy/Policy";
import Configuration from "./Configuration";
import ImagesDetails from "./ImagesDetails";

const Details = ({ product }) => {
  return (
    <div className="flex m-auto w-main gap-4">
      <div className="w-2/5 flex flex-col gap-5">
        <ImagesDetails
          colors={product?.variants[0].colors}
          thumb={product?.thumb}
        />
      </div>
      <div className="w-2/5">
        <Configuration product={product} />
      </div>
      <div className="flex-2 flex flex-col justify-start  gap-2">
        <Policy />
      </div>
    </div>
  );
};

export default Details;
