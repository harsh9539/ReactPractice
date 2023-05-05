import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
  todos: [],
  pending: false,
  error: false
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get("http://localhost:8080/todos")
  console.log(res);
  return res.data;
})

export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (id,thunkApi) => {
  console.log(id);
  await axios.delete("http://localhost:8080/todos/"+id)
  const res = await axios.get("http://localhost:8080/todos");
  console.log(res);
  return res.data;
})



const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(deleteTodos.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(deleteTodos.rejected, (state, action) => {
        state.error = true;
      })
  }
})



export default todoSlice.reducer