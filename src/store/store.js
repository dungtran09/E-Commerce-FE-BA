import { configureStore } from "@reduxjs/toolkit";
import productCategoriesSlice from "./productCategoriesSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    categories: productCategoriesSlice,
    products: productsSlice,
  },
});

export default store;
