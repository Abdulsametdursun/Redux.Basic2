import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const state = useSelector((store) => store.basketReducer);

  //Adding the number of elements in the basket
  const total_count = state.basket.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <nav className="d-flex gap-5">
          <NavLink to={"/"}>MainPage</NavLink>
          <NavLink to={"/basket"}>
            <span>Basket</span>
            <span className="ms-2 badge bg-danger">{total_count}</span>
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
