import React from "react";

const FeaturedProductsBanner = () => {
  return (
    <div className="flex justify-between">
      <div className="flex w-[50%] object-contain">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661"
          alt="img"
        />
      </div>
      <div className="flex flex-row w-[48.5%] justify-between h-full object-contain">
        <div className="flex flex-col justify-between w-[320px] pr-[20px] gap-5">
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661"
            alt="img"
          />
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661"
            alt="img"
          />
        </div>
        <div className="flex flex-end object-contain">
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsBanner;
