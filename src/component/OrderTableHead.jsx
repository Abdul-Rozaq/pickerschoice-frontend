import React from 'react'

const OrderTableHead = () => {
    return (
        <div className="orderRow">
            <h3 className="tableHead">Customer</h3>
            <h3 className="tableHead">Status</h3>
            <h3 className="tableHead">Date</h3>
            <h3 className="tableHead">Amount</h3>
        </div>
    )
}

export default OrderTableHead
