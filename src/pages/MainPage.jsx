import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productAction";
import Loading from "../components/Loading";

import Card from "../components/Card";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();
  // subscript to store
  const state = useSelector((store) => store.productReducer);

  useEffect(() => {
    // updated loading value in the store
    dispatch(setLoading());
    dispatch(setBasketLoading());

    // 1. make an API request and inform the store according to the response.
    // axios
    //   .get("http://localhost:4000/products")
    //   .then((res) => dispatch(setProducts(res.data)))
    //   .catch((res) => dispatch(setError()));

    // 2. using thunk
    dispatch(getProductData());

    // get data of card
    dispatch(getBasketData());
  }, []);

  return (
    <div>
      {/** if loading */}
      {state.isLoading && <Loading />}

      {/** if there is error */}
      {state.isError && <p>There is an ERROR</p>}

      <div className="d-flex flex-wrap gap-4 p-5 justify-content-center">
        {/** if data came*/}
        {state?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
