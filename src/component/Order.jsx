import React, { useState } from 'react';
import Cart from './Cart';
import Modal from './Modal'
import OrderCheckout from './OrderCheckout'
import OrderContent from './OrderContent'
import OrderCount from './OrderCount'

const Order = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="order">
                <OrderCount setShowModal={setShowModal} />
                <OrderContent />
                <OrderCheckout setShowModal={setShowModal} />
            </div>
            <Modal setShowModal={setShowModal} showModal={showModal} Children={Cart} />
        </>
    )
}

export default Order
