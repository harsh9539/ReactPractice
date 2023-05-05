import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import accountReducer from "./Slices/accountSlice";
import todoSlice from "./Slices/todoSlice";
import bonusSlice from "./Slices/bonusSlice";
import { todoApi } from "./RTK";




const store = configureStore({
  reducer: {
    account: accountReducer,
    todos: todoSlice,
    bonus: bonusSlice,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

export default store;