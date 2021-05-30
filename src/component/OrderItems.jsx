import React from 'react'

const OrderItems = ({ orderItem }) => {
    return (
        <div className="orderItems">
            <p className="tabledata">{orderItem.productName}</p>
            <p className="tabledata">{orderItem.quantity}</p>
            <p className="tabledata">{orderItem.price}</p>
        </div>
    )
}

export default OrderItems
