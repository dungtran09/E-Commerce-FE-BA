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
  Cart,
  User,
  Search,
  Signup,
  Error,
} from "./pages";

import path from "./utils/path";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { useCookies } from "react-cookie";
import {
  Ecommerce,
  Admin,
  Orders,
  Employees,
  Customers,
  Settings,
  Area,
  Bar,
  Financial,
  Pyramid,
  Pie,
  Line,
  Calendar,
  Chat,
  Stacked,
} from "./pages/Admin";
import BlogsControl from "./pages/Admin/BlogsControl/BlogsControl";
import Payment from "./pages/Payment/Payment";
import { useSelector } from "react-redux";

function App() {
  const [cookies] = useCookies(["_jwt_user"]);

  const user = useSelector((state) => state.user);

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
          <Route path={path.CART} element={<Cart />} />
          <Route path={path.ALL} element={<Error />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={user?.isLoggedIn} />}>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.USER} element={<User />} />
            <Route path={path.PAYMENT} element={<Payment />} />
          </Route>
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAllowed={
                user && user?.isLogged && cookies._jwt_user !== "undefined"
              }
            />
          }
        >
          <Route path={path.ADMIN} element={<Admin />}>
            <Route path={path.ECOMMERCE} element={<Ecommerce />} />
            <Route path={path.EMPLOYEES} element={<Employees />} />
            <Route path={path.ORDERS} element={<Orders />} />
            <Route path={path.CUSTOMERS} element={<Customers />} />
            <Route path={path.CALENDAR} element={<Calendar />} />
            <Route path={path.SETTINGS} element={<Settings />} />
            <Route path={path.BLOGS_ADMIN} element={<BlogsControl />} />
            <Route path={path.FINANCIAL} element={<Financial />} />
            <Route path={path.LINE} element={<Line />} />
            <Route path={path.AREA} element={<Area />} />
            <Route path={path.BAR} element={<Bar />} />
            <Route path={path.PIE} element={<Pie />} />
            <Route path={path.PYRAMID} element={<Pyramid />} />
            <Route path={path.STACKED} element={<Stacked />} />
            <Route path={path.CHAT} element={<Chat />} />
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
