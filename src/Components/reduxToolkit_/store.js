import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";
import todo from "./todo";
import cartReducer from "./responseFromchat"


const store = configureStore({
    reducer:{
        // custom:customReducer,
        todo,
        cartReducer
    }
});


export default store;