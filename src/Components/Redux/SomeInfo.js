import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
const BUY_CAKE = 'BUY_CAKE';

// AN ACTION IS AN OBJECT WHICH HAS TYPE PROPERTY 

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// reducers => (prevState,action)=> newState

const initialState ={
    numOfCakes:10
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state, // it will create a copy of state and if we another function to do it will not change value for that
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}


//---------------------- Store ---------------------- //
// Responsibilities-
// Holds application state
// Allow access to state via getState()
// Allow state to be updated via dispatch(action)
// Register listeners via subscribe(listener)



const store = createStore(reducer);
// const store = configureStore(reducer)

console.log("initial State",store.getState());
const uns = store.subscribe(()=> console.log("updated state",store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

uns();

