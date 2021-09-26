import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { name, img, basic, type, quality, price } = props.unit;
    // console.log(props.handleCart)

    return (
        <div className="col-md-4 product-card product-section">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Type: {type}</p>
            <p>Quality: {quality}</p>
            <p>Basic: {basic}</p>
            <p>Price: {price}</p>
            <button className="button" onClick={() => props.handleCart(props.unit)}><i className="fas fa-building"></i>  Add Product</button>
        </div>
    );
};

export default SingleProduct;