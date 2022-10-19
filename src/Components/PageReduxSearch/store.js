import { combineReducers,applyMiddleware,createStore } from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {commentReducer} from "./Redux/reducer"
const rootReducer = combineReducers({
    commentReducer
})

const intialState = {};
const middleware = [thunk];

const store = createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;