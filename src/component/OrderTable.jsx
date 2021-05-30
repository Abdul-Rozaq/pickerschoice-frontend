import React from 'react'
import { useSelector } from 'react-redux'
import { selectorders } from '../features/orderSlice'
import OrderInfo from './OrderInfo'
import OrderTableHead from './OrderTableHead'

const OrderTable = () => {
    const orders = useSelector(selectorders);
    
    return (
        <div className="orderTable">
            <OrderTableHead />
            { orders.map(order => <OrderInfo key={order.orderId} order={order} />) }
        </div>
    )
}

export default OrderTable
