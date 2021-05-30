import React from 'react';
import Header from "../component/Header";
import Order from '../component/Order';

const OrderPage = () => { 
    return (
        <div className="orderPage">
            <Header linkTo="/about" label="About Us" />
            <Order />
        </div>
    )
}

export default OrderPage
