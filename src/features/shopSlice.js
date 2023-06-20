import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from '../data/shop-data';



const initialState = {
  items: SHOP_DATA,
  category: null,
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    searchCart: (state, action) => {
      state.category = state.items.filter((item) => item.title === action.payload)
    }
  }})


export const { searchCart } = shopSlice.actions;

export default shopSlice.reducer;