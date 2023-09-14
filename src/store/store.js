import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productCategoriesSlice from "./productCategoriesSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";

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
});

export const persistor = persistStore(store);
