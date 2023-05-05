import { createAction, createSlice } from "@reduxjs/toolkit";


const incByAmount = createAction("account/incByAm")



const bonusSlice = createSlice({
  name: 'bonus',
  initialState: { bonus: 0 },
  reducers: {
    increment: (state) => {
      state.bonus++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incByAmount, (state, action) => {
        console.log(state,action);
        if (action.payload < 100) {
          state.bonus++;
        }
      })
  }
})


export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer