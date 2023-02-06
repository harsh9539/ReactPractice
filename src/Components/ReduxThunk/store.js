import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
const rootReducer = combineReducers({
    userList:userReducer
});

const intialState = {
    // userList:{loading:false},{users:}
    userList:{loading:false,users:[{id:1,name:"harsh",username:"goyal"},{id:2,name:"lakshay",username:'goyal'}]}
};

const middleware = [thunk];


const store = createStore(rootReducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;