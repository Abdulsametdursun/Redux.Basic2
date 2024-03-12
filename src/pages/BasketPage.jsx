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

  return (
    <div className="container">
      {/* Items are loading */}
      {state.isLoading && <Loading />}

      {/* if there is ERROR */}
      {state.isError && <p>Sorry, there is an error while getting data.</p>}

      {/* if data is coming */}
      {state.basket.map((item) => (
        <BasketItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default BasketPage;
