import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  cartItems: [],
  quantity:0,
  total:0,
  isLoading: true,
}




const cartSlice = createSlice({
  
  name: "cart",
  initialState,
  reducers: {
    addCartItem:(state, action) => {
      
      const itemExists = state.cartItems.find((cartItem) => cartItem.id === action.payload.id)
      
      if(itemExists){
        itemExists.quantity = itemExists.quantity + action.payload.quantity
        return;
      }
      if(itemExists?.quantity < action.payload.quantity){
        itemExists.quantity = itemExists.quantity + action.payload.quantity
      }
        
      state.cartItems = [...state.cartItems, {...action.payload}]
            
    },
    removeCartItem:(state, action)=>{
      const id = action.payload
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id)
    },
    clearCartItems:(state, action)=>{
      state.cartItems = []
      console.log(state.cartItems)
    },

    increaseQuantity:(state, action)=>{
      const itemExists = state.cartItems.find((cartItem) => cartItem.id === action.payload)
      if(itemExists){
        itemExists.quantity = itemExists.quantity + 1
      }
    },
    decreaseQuantity:(state, action)=>{
      const itemExists = state.cartItems.find((cartItem) => cartItem.id === action.payload)

      if(itemExists){
        if(itemExists.quantity === 1){
          return; 
        }else{
          itemExists.quantity = itemExists.quantity - 1
        }
      }  
    },
    calculateTotalAmount: (state, action) => {

      // iterate over the cartItems array on their amount property
      state.quantity = state.cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
      
      state.total = state.cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
    },
    storeInLocalStorage: (state, action) => {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    getFromLocalStorage: (state, action) => {
      const storedCartItems = localStorage.getItem("cartItems");
      if(storedCartItems){
        state.cartItems = JSON.parse(storedCartItems);
      } 
    }


  }, 
}) 

export const { addCartItem, removeCartItem, decreaseQuantity, increaseQuantity, calculateTotalAmount, storeInLocalStorage, getFromLocalStorage, clearCartItems } = cartSlice.actions

export default cartSlice.reducer
