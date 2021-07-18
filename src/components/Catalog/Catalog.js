import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

export default function Catalog(props) {
  //   const [search, changeSearch] = useState(props.search);

  const layout = props.products
    .filter((val) => {
      if (props.search === "") {
        return val;
      } else if (val.name.toLowerCase().includes(props.search.toLowerCase())) {
        return val;
      }
    })
    .map((product) => {
      return (
        <Link to={`/${product.id}`} key={product.id}>
          <li className="product-box">
            <div className="product">
              <img
                key={product.id}
                className="product-sample"
                src={product.image}
                alt="bitcoin-sunset-shirt"
              />
              <p href="" className="product-label">
                {product.name}
              </p>
              <p href="" className="product-price">
                &nbsp; ${Math.floor(product.price)}
              </p>
            </div>
          </li>
        </Link>
      );
    });

  return <div>{layout}</div>;
}
