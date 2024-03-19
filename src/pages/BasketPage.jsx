import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../components/Loading";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);
  //asynchronous action to retrieve the products in the basket from the API and transfer them to the store
  useEffect(() => {
    dispatch(setBasketLoading());

    dispatch(getBasketData());
  }, []);

  const total_count = state.basket.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="row px-4 py-5 h-100">
      {state.isLoading && <Loading />}

      {state.isError && <p>Sorry, there is an error while getting data.</p>}

      <div className="col-md-full h-100">
        {state.basket.length > 0 ? (
          state.basket.map((item) => <BasketItem item={item} key={item.id} />)
        ) : (
          <p className="my-5 text-center">Add an item into the cart...</p>
        )}
      </div>

      <div className="col-md-4 w-100 bg-white text-black p-5 rounded h-100">
        <div>
          <h5 className="text-center">Total Count: {total_count}</h5>
          <button className="w-100 my-2">Complete the Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
