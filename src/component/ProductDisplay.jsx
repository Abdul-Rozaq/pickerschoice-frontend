import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from "../features/productSlice";
import Cart from "../images/homepage/cart.png";

const ProductDisplay = ({ product }) => {
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        // console.log(id);
        dispatch(increment(id));
    }

    const handleDecrement = (id) => {
        // console.log(id);
        dispatch(decrement(id))
    }
    return (
        <div className="order__content">
            <div className="order__imgBox">
                <img src={Cart} alt="" className="order__img" />
            </div> 

            <div className="order__info">
                <h2 className="order__title">{product.productName}</h2>
                <p className="order__desc">{product.productDescription}</p>
                <p className="order__price">{product.price} ngn</p>
            </div>

            <div className="order__cta">
                <button 
                    id="decrement" 
                    className="order__btn"
                    onClick={(e) => handleDecrement(product.productId)}>-</button>
                <input id="input" type="number" className="order__input" value={product.quantity || ""} disabled />
                <button 
                    id="increment" 
                    className="order__btn" 
                    onClick={(e) => handleIncrement(product.productId)}
                >+</button>
            </div>
        </div>
    )
}

export default ProductDisplay
