import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getProductCategories } from "./store/productCategoriesSlice";
import { useDispatch } from "react-redux";

import {
  Public,
  Home,
  Login,
  Products,
  Blogs,
  OutService,
  FAQs,
  ProductDetails,
  Category,
} from "./pages";

import path from "./utils/path";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategories());
  }, []);

  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.CATEGORY} element={<Category />} />
          <Route path={path.DETAILS_PRODUCT} element={<ProductDetails />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route path={path.SERVICES} element={<OutService />} />
          <Route path={path.FAQS} element={<FAQs />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
