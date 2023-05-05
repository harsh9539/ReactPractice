import { createSlice } from "@reduxjs/toolkit";



const accountSlice = createSlice({
  name:'account',
  initialState:{amount:0},
  reducers:{
    increment:(state)=>{
      state.amount++;
    },
    decrement:(state)=>{
      state.amount--;
    },
    incByAm:(state,action)=>{
      state.amount += action.payload
    }
  }
})


export const {increment,decrement,incByAm} = accountSlice.actions;

export default accountSlice.reducer