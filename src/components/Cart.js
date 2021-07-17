import React from 'react';
import { Link, useHistory } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <Link to={`/checkout`}>
                <button>Checkout</button>
            </Link>
        </div>
    );
}

export default Cart;
