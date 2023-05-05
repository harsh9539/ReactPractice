import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const addItemsToCart = createAsyncThunk('addCart',async(getState)=>{
    // console.log(getState);
    // const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return [getState];
})

const fetchProducts = ()=>{
    const localData = JSON.parse(localStorage.getItem("todos"));
    if(localData) return localData;
    else return [];
}

const initialState = {
    cartItems:[]
}


export const cartReducer = createSlice({
    name:'cart',
    initialState,
    extraReducers:(builder)=>{
        // builder.addCase():(state,action)=>{
            // console.log('yha');
            // const item = action.payload
//             const isitemExist = state.cartItems.find((i)=>i.product === item.product);
//             console.log('yha');
//             if(isitemExist){
//                 return{
//                     ...state,
//                     cartItems:state.cartItems.map((i)=>
//                     i.product === isitemExist.product
//                     ?
//                     item
//                     :
//                     i
//                     )
//                 }
//             }else{
//                 return{
//                     ...state,
//                     cartItems:[...state.cartItems,item]
//                 }
//             }
        // }
    builder.addCase(addItemsToCart.pending,(state,action)=>{
        console.log(action);
    })
    builder.addCase(addItemsToCart.fulfilled,(state,action)=>{
        console.log(action);
    })
    }
})

// export const {addItemsToCart} =cartReducer.actions;

export default cartReducer.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const addToCart = createAsyncThunk('cart/add', async (item, thunkAPI) => {
//     const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
//     currentCart.push(item);
//     localStorage.setItem('cart', JSON.stringify(currentCart));
//     return currentCart;
// });

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: JSON.parse(localStorage.getItem('cart')) || [],
//         loading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: {
//         [addToCart.pending]: (state, action) => {
//             state.loading = true;
//         },
//         [addToCart.fulfilled]: (state, action) => {
//             state.items = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         [addToCart.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         },
//     },
// });

// export default cartSlice.reducer;

// export const selectCartItems = (state) => state.cart.items;
