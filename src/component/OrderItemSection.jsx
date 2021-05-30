import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { selectError, selectLoading, getAllOrderItemsForAdminAsync, selectorderItems} from "../features/orderItemSlice";
import Loader from './Loader';
import OrderItems from './OrderItems';

const OrderItemSection = () => {
    const {orderId} = useParams()
    const dispatch = useDispatch();
    const orderItems = useSelector(selectorderItems);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllOrderItemsForAdminAsync(orderId));
    }, [dispatch, orderId])

    const handleError = (error) => {
        Swal.fire({
            icon: 'error',
            title: error,
            timer: 4000,
        });
    }

    useEffect(()=>{
        if (error)
            handleError(error)
    },[error])

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        {
                            orderItems.length > 0 && (
                                <>
                                    <h3>Items ordered</h3>
                                    <div className="orderItems__header orderItems">
                                        <h3>Product</h3>
                                        <h3>QTY</h3>
                                        <h3>Price</h3>
                                    </div>
                                </>
                            )
                        }
                        
                        {orderItems.map(item => <OrderItems key={item.productName} orderItem={item} />)}
                    </>
                )
            }
        </>
    )
}

export default OrderItemSection
