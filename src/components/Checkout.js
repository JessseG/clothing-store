import React from "react";
import "./Checkout.css";
import { Link, useHistory } from "react-router-dom";

const Checkout = ({ cart }) => {
    return (
        <div>
            <h1>Checkout</h1>
            <Link to={`/`}>
                <button>Place Order</button>
            </Link>
            <Link to={`/create_account`}>
                <button id="create-account">Create Account</button>
            </Link>
        </div>
    );
};

export default Checkout;
