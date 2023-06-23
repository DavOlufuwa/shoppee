import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
  totalFavorites: 0,
}


const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemToFavorite: (state, action) => {
      const itemExists = state.favoriteItems.find((item) => item.id === action.payload.id)

      if (itemExists) {
        alert("Item already exists in favorites")
        return
      }

      state.favoriteItems = [...state.favoriteItems, {...action.payload}]
    },
    removeItemFromFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalFavorites -= 1;
    },
    calculateTotalFavorites: (state) => {
      state.totalFavorites = state.favoriteItems.reduce((total, favoriteItem)=> total + favoriteItem.quantity, 0)    
    }
  }
})

export const { addItemToFavorite, removeItemFromFavorite, calculateTotalFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;