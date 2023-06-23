import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../src/features/shopSlice";
import cartReducer from "../src/features/cartSlice";
import favoritesReducer from "../src/features/favoriteSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  }
})