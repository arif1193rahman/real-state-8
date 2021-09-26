import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { addCartProduct } = props || {}
    // console.log(addCartProduct)
    const reducerProcess = (previousCost, currentCost) => previousCost + currentCost.price;
    const totalAmount = addCartProduct.reduce(reducerProcess, 0);
    return (
        <div className="card-design">
            <h1>Total Add: {addCartProduct.length}</h1>
            <h2>Amount: {totalAmount}</h2>
            {
                addCartProduct.map(element => <li>{element.name}</li>)
            }
        </div>
    );
};

export default Cart;