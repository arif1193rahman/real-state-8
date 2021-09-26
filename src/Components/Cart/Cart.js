import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { addCartProduct } = props || {}

    // receive data from product
    const reducerProcess = (previousCost, currentCost) => previousCost + currentCost.price;
    const totalAmount = addCartProduct.reduce(reducerProcess, 0);

    // send data to cart
    return (
        <div className="card-design">
            <h1>Total Add: {addCartProduct.length}</h1>
            <h2>Amount: {totalAmount}</h2>
            {
                addCartProduct.map(element => <li key={element.id}>{element.name}
                </li>)
            }
        </div>
    );
};

export default Cart;