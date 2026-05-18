import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="left--nav">
        <h1>Basva Shopping Mart</h1>
        <ul className="nav--links">
          <Link className="nav-link-item" to={"/"}>
            <li>Home</li>
          </Link>
          <Link className="nav-link-item" to={"/add-product"}>
            <li>Add Product</li>
          </Link>
          <li>Category</li>
        </ul>
      </div>

      <div className="right--nav">
        <ul>
          <Link className="nav-link-item" to={"/cart"}>
            <li>Cart</li>
          </Link>
          <input type="text" placeholder="Search..." />
        </ul>
      </div>
    </header>
  );
};

export default Header;
