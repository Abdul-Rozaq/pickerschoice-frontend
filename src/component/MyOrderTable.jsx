import React from 'react'
import { useHistory } from 'react-router';

const MyOrderTable = ({ orders }) => { 
    const history = useHistory();

    return (
        <div className="myOrderTable">
            <div className="tableHeader">
                <h3 className="tableHead">Date</h3>
                <h3 className="tableHead">Amount</h3>
                <h3 className="tableHead">Status</h3>
            </div>

            {
                orders.map(order => (
                    <div className="tableBody" key={order.orderId}>
                        <p className="tabledata">{order.orderDate}</p>
                        <p className="tabledata">{order.total}</p>
                        <p className="tabledata">
                            <button
                                className={order.status}
                            >{order.status}</button>
                        </p>
                        <p className="tabledata orderInfo__view" 
                            onClick={() => history.push(`/history/orders/${order.orderId}`)}
                        >+</p>
                    </div>
                ))
            }
        </div>
    )
}

export default MyOrderTable
