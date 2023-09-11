import { configureStore } from "@reduxjs/toolkit";
import productCategoriesSlice from "./productCategoriesSlice";
const store = configureStore({
  reducer: {
    categories: productCategoriesSlice,
  },
});

export default store;
