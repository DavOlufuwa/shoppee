import { createSlice } from "@reduxjs/toolkit";


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
        return
      }else{
        state.cartItems = [...state.cartItems, {...action.payload, quantity: 1}]
      }
      console.log(state.cartItems)
    },
    removeCartItem:(state, action)=>{
      const id = action.payload.id
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id)
    },
    clearCartItem:(state, action)=>{
      state.cartItems = []
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
      
    }
  }
}) 

export const { addCartItem, removeCartItem, clearCartItem, decreaseQuantity, increaseQuantity, calculateTotalAmount } = cartSlice.actions

export default cartSlice.reducer
