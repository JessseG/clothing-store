import React from "react";
import options from "./images/options.png";
import searchIcon from "./images/search.png";
import cart from "./images/shopping-cart.png";
import "../App.css";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {
  // const [search, setSearch] = useState("");

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
            props.changeSearch(e.target.value);
          }}
        />
        <button type="submit" className="search-icon-btn">
          <img className="search-icon" src={searchIcon} alt="search" />
        </button>
      </form>
      {/* </div> */}
      <div className="account-options">
        <button className="sign-in-btn">Sign in</button>
        <button className="shopping-cart-btn">
          <img className="shopping-cart-icon" src={cart} alt="shopping cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
