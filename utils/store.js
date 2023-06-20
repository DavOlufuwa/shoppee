import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../src/features/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  }
})