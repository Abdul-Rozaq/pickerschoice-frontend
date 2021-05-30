import React from 'react';
import { useSelector } from 'react-redux'
import { selectCart } from '../features/productSlice';
import Cart from "../images/homepage/cart.png";

const OrderCount = ({ setShowModal }) => {
    const cart = useSelector(selectCart);

    return (
        <div className="order__countBox">
            <p className="order__menu">Order menu                        
                <img 
                    src={Cart} alt="" 
                    className="countBasket" 
                    onClick={() => setShowModal(true)}
                />

                <span id="basket" className="count">{cart.length}</span>
            </p>
        </div>
    )
}

export default OrderCount
