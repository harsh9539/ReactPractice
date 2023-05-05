import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTodo = createAsyncThunk('fetchTodo',async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
})







const initialState = {
    isLoading:false,
    data:[],
    isError:false
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.isLoading = true
        });
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.isError = true
        });
    }
})


export default todoSlice.reducer