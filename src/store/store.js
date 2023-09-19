import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productCategoriesSlice from "./productCategoriesSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

const commonConfig = {
  key: "jwt/user",
  storage,
};

const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "token"],
};

export const store = configureStore({
  reducer: {
    categories: productCategoriesSlice,
    products: productsSlice,
    user: persistReducer(userConfig, userSlice),
  },
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
