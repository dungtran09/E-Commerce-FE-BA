import React from "react";
import { createPortal } from "react-dom";
import Configuration from "../InfosProduct/Configuration";
import ImagesDetails from "../InfosProduct/ImagesDetails";

const QuickReview = ({ hideQuickView, showQuickView, product }) => {
  return createPortal(
    <>
      <div className={`alert ${showQuickView ? "" : "hidden"}`}>
        <div className="flex m-auto w-full gap-4 text-base">
          <div className="flex-1 flex flex-col gap-2">
            <ImagesDetails
              colors={product?.variants[0].colors}
              thumb={product?.thumb}
            />
          </div>
          <div className="flex-1 justify-center items-center">
            <Configuration product={product} />
          </div>
        </div>
        <button
          className="inline-block rounded bg-main px-6 pb-2 pt-2 mt-4 text-xs font-medium text-white hover:opacity-70"
          onClick={hideQuickView}
        >
          Close
        </button>
      </div>
      <div className={`overlay ${showQuickView ? "" : "hidden"}`}></div>
    </>,
    document.getElementById("root_portal"),
  );
};

export default QuickReview;
