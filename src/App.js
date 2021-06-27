// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import LoginModal from "./components/LoginModal";
import btc from "./components/images/bitcoin-sunset-black.png";
import btc2 from "./components/images/its_a_bubble.png";
import btc3 from "./components/images/bitcoin-astronaut-og.png";
import eth from "./components/images/ethereum-simple-black-blue-logo.png";
import eth2 from "./components/images/ethereum-blue-white.png";
import eth3 from "./components/images/ethereum-gray.png";
import eth4 from "./components/images/eth_blue.png";
import eth6 from "./components/images/eth_white.png";
import eth7 from "./components/images/ethereum_blue_diamond-2.png";
import xmr from "./components/images/monero-classic.png";
import xmr2 from "./components/images/monero_black.png";
import xmr3 from "./components/images/monero_mountain_blue.png";
import theta from "./components/images/theta-black-orange.png";
import theta2 from "./components/images/theta-black.png";
import ada from "./components/images/cardano-black_aqua-web.png";
import ada2 from "./components/images/cardano-astronaut.png";
import ada3 from "./components/images/cardano-hoodie-black.png";
import hex1 from "./components/images/hex_shirt_black.png";
import hex2 from "./components/images/hex_shirt_blue.png";
import sol1 from "./components/images/sol_shirt_white.png";
import sol2 from "./components/images/sol_shirt_black.png";
import vchain1 from "./components/images/vchain_shirt_black.png";
import vchain2 from "./components/images/vchain_shirt_white.png";
import { v4 as uuid } from "uuid";

function App() {
  const [search, changeSearch] = useState("");
  const [loginModal, setLoginModal] = useState("hidden");

  const catalog = [
    {
      id: 1,
      type: "shirt",
      name: "Bitcoin Astro",
      size: ["small", "medium", "large"],
      image: btc3,
      price: 22.99,
    },
    {
      id: 2,
      type: "shirt",
      name: "Ethereum Black",
      size: ["small", "medium", "large"],
      image: eth,
      price: 22.99,
    },
    {
      id: 3,
      type: "shirt",
      name: "Monero Classic",
      size: ["small", "medium", "large"],
      image: xmr,
      price: 22.99,
    },
    {
      id: 4,
      type: "shirt",
      name: "Theta Black",
      size: ["small", "medium", "large"],
      image: eth7,
      price: 22.99,
    },
    {
      id: 5,
      type: "shirt",
      name: "Bitcoin Sunset",
      size: ["small", "medium", "large"],
      image: btc,
      price: 22.99,
    },
    {
      id: 6,
      type: "shirt",
      name: "Cardano Black",
      size: ["small", "medium", "large"],
      image: ada,
      price: 22.99,
    },
    {
      id: 7,
      type: "shirt",
      name: "Ethereum Blue",
      size: ["small", "medium", "large"],
      image: eth4,
      price: 22.99,
    },
    {
      id: 8,
      type: "shirt",
      name: "Cardano Hoodie",
      size: ["small", "medium", "large"],
      image: ada3,
      price: 22.99,
    },
    {
      id: 9,
      type: "shirt",
      name: "Bitcoin Bubble",
      size: ["small", "medium", "large"],
      image: btc2,
      price: 22.99,
    },
    {
      id: 10,
      type: "shirt",
      name: "Cardano Astronaut",
      size: ["small", "medium", "large"],
      image: ada2,
      price: 22.99,
    },
    {
      id: 11,
      type: "shirt",
      name: "Ethereum White",
      size: ["small", "medium", "large"],
      image: eth6,
      price: 22.99,
    },
    {
      id: 12,
      type: "shirt",
      name: "Theta Orange",
      size: ["small", "medium", "large"],
      image: theta,
      price: 22.99,
    },
    {
      id: 13,
      type: "shirt",
      name: "Monero Solid",
      size: ["small", "medium", "large"],
      image: xmr2,
      price: 22.99,
    },
    {
      id: 14,
      type: "shirt",
      name: "Ethereum Light",
      size: ["small", "medium", "large"],
      image: eth2,
      price: 22.99,
    },
    {
      id: 15,
      type: "shirt",
      name: "Ethereum Gray",
      size: ["small", "medium", "large"],
      image: eth3,
      price: 22.99,
    },
    {
      id: 16,
      type: "shirt",
      name: "Hex Black",
      size: ["small", "medium", "large"],
      image: hex1,
      price: 22.99,
    },
    {
      id: 17,
      type: "shirt",
      name: "Monero Mountain",
      size: ["small", "medium", "large"],
      image: xmr3,
      price: 22.99,
    },
    {
      id: 18,
      type: "shirt",
      name: "Hex Blue",
      size: ["small", "medium", "large"],
      image: hex2,
      price: 22.99,
    },
    {
      id: 19,
      type: "shirt",
      name: "Theta Original",
      size: ["small", "medium", "large"],
      image: theta2,
      price: 22.99,
    },
    {
      id: 22.99,
      type: "shirt",
      name: "VeChain Black",
      size: ["small", "medium", "large"],
      image: vchain1,
      price: 22.99,
    },
    {
      id: 21,
      type: "shirt",
      name: "VeChain White",
      size: ["small", "medium", "large"],
      image: vchain2,
      price: 22.99,
    },
    {
      id: 22,
      type: "shirt",
      name: "Sol Black",
      size: ["small", "medium", "large"],
      image: sol2,
      price: 22.99,
    },
    {
      id: 23,
      type: "shirt",
      name: "Sol White",
      size: ["small", "medium", "large"],
      image: sol1,
      price: 22.99,
    },
  ];

  const loginModalHandler = () => {
    let modal = document.getElementById("loginModal");
    if (modal.style.visibility === "visible") {
      document.getElementById("loginModal").style.visibility = "hidden";
    } else {
      document.getElementById("loginModal").style.visibility = "visible";
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Header
            changeSearch={(newSearch) => changeSearch(newSearch)}
            signIn={loginModalHandler}
          />
        </header>
        <div className="body">
          {/* <h2>{search}</h2> */}
          <LoginModal />
          <Switch>
            <Route path="/" exact>
              <Catalog products={catalog} search={search} />
            </Route>
            <Route path="/:id">
              <Product products={catalog} search={search} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
