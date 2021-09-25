import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { name, img, capacity, type, quality, price } = props.unit;
    console.log(img)
    return (
        <div className="col-md-4 product-card">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Capacity:{capacity}</p>
            <p>Type:{type}</p>
            <p>Quality:{quality}</p>
            <p>Price:{price}</p>
        </div>
    );
};

export default SingleProduct;