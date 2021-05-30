import React from 'react';
import { useSelector } from 'react-redux'
import { selectCart } from '../features/productSlice';

const OrderCheckout = ({ setShowModal }) => {
    const cart = useSelector(selectCart);
    const totals = [];
    cart?.forEach((item) => totals.push(item.total));

    return (
        <div className="order__checkoutBox">
            <div className="order__total">
                <p className="order__totalPrice">Total: <span id="total">
                    {totals.reduce((acc, cur) => acc + cur, 0)}
                </span>
                </p>
            </div>
            <button className="order__checkout" onClick={() => setShowModal(true)}>
                proceed to checkout
            </button>
        </div>
    )
}

export default OrderCheckout
