import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";
import todo from "./todo";



const store = configureStore({
    reducer:{
        custom:customReducer,
        todo
    }
});


export default store;