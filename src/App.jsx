import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getProductCategories } from "./store/slices/productCategoriesSlice";
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
  Cart,
  User,
  Search,
  Signup,
  Error,
} from "./pages";

import path from "./utils/path";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { useCookies } from "react-cookie";
import { Ecommerce, Admin } from "./pages/Admin";

function App() {
  const [cookies, removeCookie] = useCookies(["_jwt_user"]);

  const userObj = JSON.parse(localStorage.getItem("userInfos"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.CATEGORY} element={<Category />} />
          <Route path={path.DETAILS_PRODUCT} element={<ProductDetails />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route path={path.CART} element={<Cart />} />
          <Route path={path.SERVICES} element={<OutService />} />
          <Route path={path.FAQS} element={<FAQs />} />
          <Route path={path.USER} element={<User />} />
          <Route path={path.SEARCH} element={<Search />} />
          <Route path={path.ALL} element={<Error />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAllowed={
                userObj &&
                userObj?.role === "Admin" &&
                cookies._jwt_user !== "undefined"
              }
            />
          }
        >
          <Route path={path.ADMIN} element={<Admin />}>
            <Route path={path.ECOMMERCE} element={<Ecommerce />} />
          </Route>
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.SIGNUP} element={<Signup />} />
        <Route path={path.ALL} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
