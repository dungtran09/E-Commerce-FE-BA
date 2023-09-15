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
      <section className="w-main flex justify-center items-start m-auto">
        <div className="flex flex-col gap-4 w-[25%] flex-auto">
          <Sidebar />
          <DealDaily />
        </div>

        <div className="flex flex-col gap-4 pl-5 w-[75%] flex-auto">
          <Banner />
          <BestSellerProducts />
        </div>
      </section>
      <section className="w-main flex flex-col m-auto">
        <div className="my-4 w-main m-auto">
          <FeaturedProducts />
          <FeaturedProductsBanner />
        </div>

        <div className="my-4 w-main m-auto">
          <NewProducts />
        </div>
        <div className="my-4 w-main m-auto">
          <HotCollections />
        </div>
        <div className="my-4 w-main m-auto">
          <BlogPosts />
        </div>
      </section>
    </>
  );
};

export default Home;
