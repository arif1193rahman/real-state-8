import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { name, img, capacity, type, quality, price } = props.unit;
    // console.log(props.handleCart)

    return (
        <div className="col-md-4 product-card product-section">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Capacity:{capacity}</p>
            <p>Type:{type}</p>
            <p>Quality:{quality}</p>
            <p>Price:{price}</p>
            <button className="btn btn-primary" onClick={() => props.handleCart(props.unit)}><i class="fas fa-shopping-bag"></i>  Add Product</button>
        </div>
    );
};

export default SingleProduct;