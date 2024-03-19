import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: true };

    case ActionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };

    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(action.payload) };

    case ActionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((item) => {
        if (item.id === action.payload.id) {
          // Corrected line
          // If the element is the element to be updated, increase its number by 1, and add to new array
          return { ...item, quantity: item.quantity + 1 };
        } else {
          // If not, add directly to new array
          return item;
        }
      });

      return { ...state, basket: newBasket };

    case ActionTypes.REMOVE_ITEM:
      const filtered = state.basket.filter((i) => i.id !== action.payload);
      return { ...state, basket: filtered };

    default:
      return state;
  }
};

export default basketReducer;
