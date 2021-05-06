import React from "react";
import "./Product.css";

const Product = (props) => {
  const layout = props.products
    .filter((selected) => {
      if (selected.id == window.location.pathname.substring(1)) {
        console.log(selected);
        return selected;
      }
    })
    .map((product) => {
      return (
        <div key={product.id} className="selected-product-page">
          <div className="column" id="column-1">
            <div className="selected-product-box">
              <div className="selected-product">
                <img
                  key={product.id}
                  className="selected-product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
          </div>
          <div className="column" id="column-2">
            <h1 className="selected-product-title">{product.name}</h1>
            <div className="price-box">
              <h3 href="" className="selected-product-labels">
                Price:
              </h3>
              <p href="" className="selected-product-info">
                &nbsp;&nbsp; ${product.price}
              </p>
            </div>
            <div className="description-box">
              <h3 href="" className="selected-product-labels">
                Description:
              </h3>
              <p href="" className="selected-product-info">
                &nbsp;&nbsp; {product.description}
              </p>
            </div>
          </div>
          <div className="column" id="column-3"></div>
          {/* 
          <p href="" className="product-price">
            &nbsp; ${product.price}
          </p> */}
        </div>
      );
    });

  return <div>{layout}</div>;
};

export default Product;
