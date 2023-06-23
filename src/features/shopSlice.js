import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = "https://dummyjson.com/products?limit=100";


const initialState = {
  items: [],
  isLoading: true,
  isError: true,
}

export const axiosCartItems = createAsyncThunk("shop/axiosCartItems", 
async (name,thunkAPI) => {
  try{
    // console.log(thunkAPI.getState())
    const res = await axios.get(url);
    return res.data;
  }
  catch(err){
    return thunkAPI.rejectWithValue('something went terribly wrong');
  }
})

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: { 
  },
  extraReducers: {
    [axiosCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [axiosCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.items = action.payload.products;
    },
    [axiosCartItems.rejected]: (state) => {
      state.isLoading = true;
      state.isError = true;
    }
  }

})


export const { searchCart } = shopSlice.actions;

export default shopSlice.reducer;