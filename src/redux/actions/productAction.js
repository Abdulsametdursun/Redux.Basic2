import { ActionTypes } from "../actionTypes";
import axios from "axios";

// Actions without payload
export const setLoading = () => {
  return {
    type: ActionTypes.SET_LOADING,
  };
};
export const setProducts = (payload) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload,
  };
};
export const setError = () => {
  return {
    type: ActionTypes.SET_ERROR,
  };
};

export const getProductData = () => (dispatch) => {
  axios
    .get("http://localhost:4000/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((res) => dispatch(setError()));
};

/* REDUX THUNK
 * Asynchronous action - Thunk action
 * It is a middleware that extends the redux library. While Redux itself supports synchronous operations, it does not directly support asynchronous actions.
 * At this point where Redux is not enough, thunk comes into play.
 * Thanks to Thunk, redux actions become asynchronous and perform asynchronous operations such as network requests within the action.
 */

// thunk action creator
function exampleThunk() {
  // fetchTodoByIdThunk is the "thunk function"
  return async function (dispatch) {
    const data = await axios.get(`...`);
    dispatch({ type: "SET_DATA", payload: data });
  };
}

// with arrow and shorter way
const exampleThunk2 = () => async (dispatch) => {
  const data = await axios.get(`...`);
  dispatch({ type: "SET_DATA", payload: data });
};
