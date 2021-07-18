import React from "react";
import options from "../images/options.png";
import searchIcon from "../images/search.png";
import cart from "../images/shopping-cart.png";
// import "../App.css";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Header = ({ changeSearch, signIn, cart }) => {
  // const [search, setSearch] = useState("");

  console.log(cart.id);
  const history = useHistory();

  // const goHome = () => {
  //   history.push("/");
  // };

  return (
    <div className="App-header">
      {/* <span className="menu"> */}
      <img src={options} alt="" className="options-icon" />
      {/* </span> */}
      <h2
        className="page-title"
        onClick={() => {
          history.push("/");
        }}
      >
        CoinBlock
      </h2>
      {/* <div className="search-box"> */}
      <form className="search-bar" action="">
        <input
          type="text"
          name=""
          id="search-input"
          onChange={(e) => {
            changeSearch(e.target.value);
          }}
        />
        <button type="submit" className="search-icon-btn">
          <img className="search-icon" src={searchIcon} alt="search" />
        </button>
      </form>
      {/* </div> */}
      <div className="account-options">
        <button className="sign-in-btn" onClick={signIn}>
          Sign in
        </button>
        {/* <button className="shopping-cart-btn"> */}
        {/* <img className="shopping-cart-icon" src={cart} alt="shopping cart" /> */}
        <Link to="/cart" key={cart.id} className="shopping-cart-icon">
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={cart.total_items} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Header;
