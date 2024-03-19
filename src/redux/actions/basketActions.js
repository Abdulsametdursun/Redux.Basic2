import axios from "axios";
import { ActionTypes } from "./../actionTypes";

axios.defaults.baseURL = "http://localhost:4000/";

// synchronicity actions
export const setBasketLoading = () => ({
  type: ActionTypes.SET_BASKET_LOADING,
});
export const setBasket = (payload) => ({
  type: ActionTypes.SET_BASKET,
  payload,
});
export const setBasketError = () => ({
  type: ActionTypes.SET_BASKET_ERROR,
});

// asynchronous actions
export const getBasketData = () => (dispatch) => {
  axios
    .get("/basket")
    .then((res) => dispatch(setBasket(res.data)))
    .catch((err) => dispatch(setBasketError()));
};

// Adding to new item to card
export const addToBasket = (product) => (dispatch) => {
  // Adding quantity to item data
  const newProduct = { ...product, quantity: 1 };
  // remove data that does not need to be added to the database
  delete newProduct.color;
  delete newProduct.features;
  delete newProduct.title;

  // save the new item to API
  axios
    .post("/basket", newProduct)
    .then((res) =>
      dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: newProduct })
    )
    .catch((err) => dispatch(setBasketError()));
};

export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`/basket/${product.id}`, { quantity: product.quantity + 1 })
    .then(() => {
      const updatedProduct = { ...product, quantity: product.quantity + 1 };
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: updatedProduct });
    })
    .catch((err) => dispatch(setBasketError()));
};

export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`/basket/${delete_id}`)
    .then(() => dispatch({ type: ActionTypes.REMOVE_ITEM, payload: delete_id }))
    .catch((err) => dispatch(setBasketError()));
};
