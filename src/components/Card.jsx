import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const state = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();
  // Checking if the item has been added to the cart
  const found = state.basket.find((i) => i.id === product.id);

  // add to card button
  const handleClick = () => {
    if (found) {
      // update the element > patch
      dispatch(updateItem(found));
    } else {
      // Add new item to card > post
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img width={200} height={200} src={product.picture} />
      </div>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold">{product.brand} - </span>
          {product.model}
        </p>
        <p className="d-flex flex-column">
          {product.features.map((line) => (
            <span>{line}</span>
          ))}
        </p>

        <button
          onClick={handleClick}
          className="w-100 d-flex justify-content-between"
        >
          <span>
            {found ? `Increase the Amount (${found.quantity})` : "Add to Card"}
          </span>
          <span className="text-warning"> ${product.price}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
