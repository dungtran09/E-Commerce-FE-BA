import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productCategoriesSlice from "./productCategoriesSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";
import brands from "./brandsSlice";
import cartSlice from "./cartSlice";
import userByIdSlice from "./userByIdSlice";

const commonConfig = {
  key: "jwt",
  storage,
};

const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "token", "data"],
};

export const store = configureStore({
  reducer: {
    categories: productCategoriesSlice,
    products: productsSlice,
    brands: brands,
    carts: cartSlice,
    user: persistReducer(userConfig, userSlice),
    userById: userByIdSlice,
  },
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
