import React from 'react';
import './Product.css'
import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./computer.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [addCartProduct, setAddCartProduct] = useState([]);
    const handleCart = (cartProduct) => {
        const newProduct = [...addCartProduct, cartProduct];
        setAddCartProduct(newProduct);
    }
    console.log(addCartProduct)
    return (
        <div className="">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            products.map(unit => <SingleProduct
                                handleCart={handleCart}
                                key={unit.id}
                                unit={unit}
                            ></SingleProduct>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart addCartProduct={addCartProduct} />
                </div>
            </div>
        </div >
    );
};

export default Product;