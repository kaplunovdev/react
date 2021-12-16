import {combineReducers, createStore} from "redux";
import formReducer from "./formReducer";

let reducers =combineReducers({
    formReducer,
})

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;