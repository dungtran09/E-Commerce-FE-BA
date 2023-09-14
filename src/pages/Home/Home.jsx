import React from "react";
import {
  Sidebar,
  Banner,
  BestSellerProducts,
  DealDaily,
  FeaturedProducts,
  FeaturedProductsBanner,
  NewProducts,
  HotCollections,
  BlogPosts,
} from "../../components";

const Home = () => {
  return (
    <>
      <div className="w-main flex">
        <div className="flex flex-col gap-4 w-[25%] flex-auto">
          <Sidebar />
          <DealDaily />
        </div>

        <div className="flex flex-col gap-4 pl-5 w-[75%] flex-auto">
          <Banner />
          <BestSellerProducts />
        </div>
      </div>
      <div className="my-8">
        <FeaturedProducts />
        <FeaturedProductsBanner />
      </div>

      <div className="my-8">
        <NewProducts />
      </div>
      <div className="my-8">
        <HotCollections />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </>
  );
};

export default Home;
