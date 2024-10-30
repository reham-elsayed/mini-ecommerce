import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";

const store = configureStore({
  reducer: {
    products,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
