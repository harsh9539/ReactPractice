import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/accountSlice";
import todoSlice from "./Slices/todoSlice";
import bonusSlice from "./Slices/bonusSlice";




const store = configureStore({
  reducer:{
    account:accountReducer,
    todos:todoSlice,
    bonus:bonusSlice
  }
})

export default store;