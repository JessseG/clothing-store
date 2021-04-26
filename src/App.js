import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import options from './components/images/options.png';
import btc from './components/images/bitcoin-sunset-black.jpeg';
import eth from './components/images/ethereum-simple-black.jpeg';
import eth2 from './components/images/ethereum-blue-white.png';
import eth3 from './components/images/ethereum-gray.jpg';
import xmr from './components/images/monero-simple-black.jpeg';
import theta from './components/images/theta-black.png';
import ada from './components/images/cardano-black.jpeg';
import ada2 from './components/images/cardano-astronaut.jpg';

function App() {

  const products = [
    {
      id: 1,
      type: "shirt",
      name: "Bitcoin Sunset",
      size: ["small", "medium", "large"],
      image: btc,
      price: 20,
    },
    {
      id: 2,
      type: "shirt",
      name: "Ethereum Black",
      size: ["small", "medium", "large"],
      image: eth,
      price: 20,
    },
    {
      id: 3,
      type: "shirt",
      name: "Monero Classic",
      size: ["small", "medium", "large"],
      image: xmr,
      price: 20,
    },
    {
      id: 4,
      type: "shirt",
      name: "Ethereum Blue",
      size: ["small", "medium", "large"],
      image: eth2,
      price: 20,
    },
    {
      id: 5,
      type: "shirt",
      name: "Theta Black",
      size: ["small", "medium", "large"],
      image: theta,
      price: 20,
    },
    {
      id: 6,
      type: "shirt",
      name: "Cardano Black",
      size: ["small", "medium", "large"],
      image: ada,
      price: 20,
    },
    {
      id: 7,
      type: "shirt",
      name: "Cardano Astronaut",
      size: ["small", "medium", "large"],
      image: ada2,
      price: 20,
    },
    {
      id: 8,
      type: "shirt",
      name: "Bitcoin Freedom",
      size: ["small", "medium", "large"],
      price: 20,
    },
    {
      id: 9,
      type: "shirt",
      name: "Bitcoin Freedom",
      size: ["small", "medium", "large"],
      price: 20,
    }
  ];

  const layout = products.map(product => {
    return (
      <li className="product-box">
        <div className="product">
          <img key={product.id} className="product-sample" src={product.image} alt="bitcoin-sunset-shirt" />
          <p href="" className="product-label" >{product.name}</p>
        </div>
      </li>
    )
  })

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body className="body">
        {layout}
      </body>

    </div>
  );
}

export default App;
