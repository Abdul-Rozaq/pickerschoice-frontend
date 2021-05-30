import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import Swal from 'sweetalert2';
import { updateOrderStatusAsync, selectNewOrder } from '../features/orderSlice';

const OrderInfo = ({ order }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const newOrder = useSelector(selectNewOrder);

    useEffect(() => {
        if (newOrder?.orderId) {
            Swal.fire({
                icon: 'success',
                title: "Updated",
                timer: 4000,
            });
        }
    }, [newOrder])

    // const statusStyle = order.status === "processed" ? "processed" : 
    
    return (
        <div className="orderInfo orderRow">
            <div className="tabledata">
                <p>{order.customerName}</p>
                <p>{order.phone}</p>
            </div>
            <p className="tabledata">
                <button 
                    onClick={() => dispatch(updateOrderStatusAsync(order.orderId))}
                    className={order.status}
                >{order.status}</button>
            </p>
            <p className="tabledata">{order.orderDate}</p>
            <p className="tabledata">{order.total}</p>
            <p className="tabledata orderInfo__view"
                onClick={() => history.push(`/admin/orders/${order.orderId}`)}
            >+</p>
        </div>
    )
}

export default OrderInfo
