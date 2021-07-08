import React from "react";
import "./Cart.css";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles/CartStyles";

function Cart({ cart }) {
  //   console.log(!cart.line_items.length);
  console.log(cart);
  const isEmpty = cart.line_items === undefined;
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
    </Typography>
  );

  const FilledCart = () => (
    <>
      <div>
        {cart.line_items.map((item, index) => (
          <div key={item.id}>
            <div className="item-card">
              <img
                className="cart-item-image"
                style={{ border: "1px solid black" }}
                src={item.media.source}
                alt=""
              />
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">{item.quantity}</span>
              <span className="item-price">${item.price.raw}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="purchase-btn" id="checkout-btn" arial-label="Checkout">
        Checkout
      </button>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Shopping Cart
        </Typography>
      </div>
      <div className="cart">{isEmpty ? <EmptyCart /> : <FilledCart />}</div>
    </Container>
  );
}

export default Cart;
