import {createStore, combineReducers, applyMiddleware} from "redux";
import info from "./InfoReducer";
import search from "./SearchReducer";
import map from "./MapReducer"
import thunkMiddleware from "redux-thunk";
import news from "./NewsReducer"

let reducers = combineReducers({
  forInfo: info,
  forSearch: search,
  map: map,
  forNews: news
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
