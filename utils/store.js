import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../src/features/shopSlice";
import cartReducer from "../src/features/cartSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  }
})