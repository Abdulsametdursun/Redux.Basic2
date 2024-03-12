import { NavLink } from "react-router-dom";

const Header = () => {
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
            <span className="ms-2 badge bg-danger">4</span>
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
