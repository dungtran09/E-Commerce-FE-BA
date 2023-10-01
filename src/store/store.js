import { configureStore } from "@reduxjs/toolkit";
import productCategoriesSlice from "./slices/productCategoriesSlice";
import productsSlice from "./slices/productsSlice";
import userSlice from "./slices/userSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";
import brands from "./slices/brandsSlice";
import cartSlice from "./slices/cartSlice";
import userByIdSlice from "./slices/userByIdSlice";

export const store = configureStore({
  reducer: {
    categories: productCategoriesSlice,
    products: productsSlice,
    brands: brands,
    carts: cartSlice,
    userById: userByIdSlice,
    user: userSlice,
  },
  middleware: [thunk],
});
