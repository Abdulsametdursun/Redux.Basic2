import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // determines the loading value
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: true };

    //determines the value of products
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };

    // if there is error
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
