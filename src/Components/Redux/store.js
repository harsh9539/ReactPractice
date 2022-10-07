import { combineReducers, createStore } from "redux";

import changeTheNumber from "./reducers/Reducers";

const rootReducer = combineReducers({
    changeTheNumber
})

const store = createStore(rootReducer);

export default store;