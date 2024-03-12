import { applyMiddleware, combineReducers, createStore } from "redux";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";

// merging reducers
const rootReducer = combineReducers({
  basketReducer,
  productReducer,
});

// creating store
// introducing thunk middleware to the store with the apply middleware function
export default createStore(rootReducer, applyMiddleware(thunk));
