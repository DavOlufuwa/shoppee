import { createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

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
        enqueueSnackbar(`${itemExists.title.toLowerCase()} is already a saved item!}`, {
          variant: "info",
          autoHideDuration: 3000
        })
        return;
      }

      enqueueSnackbar(`${action.payload.title.toLowerCase()} has been added to favorite`, {
        variant: "info",
        autoHideDuration: 3000
      })
      state.favoriteItems = [...state.favoriteItems, {...action.payload}]
    },
    removeItemFromFavorite: (state, action) => {

      enqueueSnackbar(`Item has been removed from favorite`, {
        variant: "info",
        autoHideDuration: 3000
      })

      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalFavorites -= 1;
    },
    calculateTotalFavorites: (state) => {
      state.totalFavorites = state.favoriteItems.reduce((total, favoriteItem)=> total + favoriteItem.quantity, 0)    
    },
    storeFavoritesInLocalStorage: (state, action) => {
      localStorage.setItem("savedItems", JSON.stringify(state.favoriteItems))
    },
    getFavoritesFromLocalStorage: (state, action) => {
      const storedFavoriteItems = localStorage.getItem("savedItems");
      if(storedFavoriteItems){
        state.favoriteItems = JSON.parse(storedFavoriteItems);
      } 
    }
  }
})

export const { addItemToFavorite, removeItemFromFavorite, calculateTotalFavorites, storeFavoritesInLocalStorage, getFavoritesFromLocalStorage} = favoriteSlice.actions;

export default favoriteSlice.reducer;