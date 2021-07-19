import React from "react";
import "./Cart.css";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./CartStyles";
import { Link, useHistory } from "react-router-dom";
import delt from "../images/delete-icon.png";

function Cart({ cart, updateCartQty, removeFromCart, emptyCart }) {
    //   console.log(!cart.line_items.length);
    // console.log(cart);
    const isEmpty = cart.line_items === undefined;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1" style={{ color: "crimson" }}>
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
                                style={{ padding: "0.8vh 0.5vw" }}
                                src={item.media.source}
                                alt=""
                            />
                            <span className="item-name">{item.name}</span>
                            {/* <input type="number" id="increase-quantity" /> */}
                            <span className="item-quantity">
                                <button
                                    className="change-quantity"
                                    id="decrease-quantity"
                                    onClick={() => updateCartQty(item.id, item.quantity - 1)}
                                >
                                    –
                </button>
                                <a id="item-amount" >
                                    {item.quantity}
                                </a>
                                <button
                                    className="change-quantity"
                                    id="increase-quantity"
                                    onClick={() => updateCartQty(item.id, item.quantity + 1)}
                                >
                                    +
                </button>
                            </span>
                            {/* <img src={delt} alt="" className="delete-item-icon" /> */}
                            <button
                                className="delete-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Delete
              </button>
                            <span className="item-price">
                                {item.line_total.formatted_with_symbol}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={`./checkout`}>
                <button
                    className="purchase-btn"
                    id="checkout-btn"
                    arial-label="Checkout"
                >
                    Checkout
        </button>
            </Link>
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
