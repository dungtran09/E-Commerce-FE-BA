import React from "react";
import { Routes, Route } from "react-router-dom";
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
