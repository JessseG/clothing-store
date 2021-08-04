import React from "react";
import "./Product.css";

const Product = ({ catalog, search, onAddToCart, products }) => {
  // const onAddToCart = () => {};

  // console.log(products[window.location.pathname - 1]);

  const isEmpty = products[0] === undefined;

  const Item = () => (
    <div>
      {products[parseInt(window.location.pathname.substring(1)) - 1].id}
    </div>
  );

  const layout = catalog
    .filter((selected) => {
      if (selected.id == window.location.pathname.substring(1)) {
        // console.log(selected);
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
          <div>
            <h1 className="selected-product-title">{product.name}</h1>
            <div className="info-box-wrap">
              <div className="info-box">
                <h3 href="" className="selected-product-labels">
                  Price:
                </h3>
                <p href="" className="selected-product-info">
                  &nbsp;&nbsp; ${product.price}
                </p>
              </div>
              <div className="info-box">
                <h3 href="" className="selected-product-labels">
                  Size:
                </h3>
                <select className="size" name="" id="">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              {/* <div>
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
            </div> */}
              <div className="info-box" id="description-box">
                <h3
                  href=""
                  className="selected-product-labels"
                  id="description-label"
                >
                  Description
                </h3>
                <p
                  href=""
                  className="selected-product-info"
                  id="description-content"
                >
                  {product.description}
                </p>
              </div>
              <div id="purchase-btn-box">
                <button className="purchase-btn" id="buy-now-btn">
                  Buy Now
                </button>
                <button
                  className="purchase-btn"
                  id="add-cart-btn"
                  arial-label="Add to Cart"
                  onClick={() =>
                    onAddToCart(
                      products[
                        parseInt(window.location.pathname.substring(1)) - 1
                      ].id,
                      1
                    )
                  }
                >
                  Add to Cart
                </button>
                {/* &nbsp;&nbsp; */}
              </div>
            </div>
          </div>
          <div className="column" id="column-3">
            {/* {isEmpty ? <div>Empty</div> : <Item />} */}
          </div>
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
