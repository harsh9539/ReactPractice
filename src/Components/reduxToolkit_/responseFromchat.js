import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk('cart/add', async (item, thunkAPI) => {
    console.log(item);
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(item);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    return currentCart;
});

export const updateCartItem = createAsyncThunk('cart/update', async (item, thunkAPI) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = currentCart.findIndex((cartItem) => cartItem.id === item.id);
    currentCart[index] = item;
    localStorage.setItem('cart', JSON.stringify(currentCart));
    return currentCart;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cart')) || [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [addToCart.pending]: (state, action) => {
            state.loading = true;
        },
        [addToCart.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        [addToCart.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateCartItem.pending]: (state, action) => {
            state.loading = true;
        },
        [updateCartItem.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        [updateCartItem.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;

// const Cart = () => {
//     const dispatch = useDispatch();
//     const items = useSelector(selectCartItems);

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));
//     };

//     const handleUpdateCartItem = (item) => {
//         dispatch(updateCartItem(item));
//     };

//     useEffect(() => {
//         console.log('Cart items: ', items);
//     }, [items]);

//     return (
//         <div>
//             <h2>Cart</h2>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item.name}</li>
//                 ))}
//             </ul>
//             <button onClick={() => handleAddToCart({ id: Date.now(), name: 'Item' })}>
//                 Add to Cart
//             </button>
//             <button onClick={() => handleUpdateCartItem({ id: items[0].id, name: 'Updated Item' })}>
//                 Update Cart Item
//             </button>
//         </div>
//     );
// };
