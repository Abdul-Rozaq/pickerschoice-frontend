import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { selectUser } from '../features/userSlice';
import Header from '../component/Header';
import Loader from '../component/Loader';
import Modal from '../component/Modal';
import MyOrderTable from '../component/MyOrderTable';
import OrderItemSection from '../component/OrderItemSection';
import { getAllOrdersForCustomer, selectorders, selectLoading, selectError } from '../features/orderSlice';

const MyOrders = () => {
    const [showModal, setShowModal] = useState(false);
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const orders = useSelector(selectorders);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(getAllOrdersForCustomer());
    }, [dispatch, user])

    useEffect(()=>{
        if (error) {
            Swal.fire({
                icon: 'error',
                title: error,
                timer: 4000,
            });
        }
    },[error])

    useEffect(() => {
        if (orderId)
            setShowModal(true);
    }, [orderId])

    const orderBody = orders.length > 0 ? (
        <MyOrderTable orders={orders} />
    ) : (
        <p>You do not have any orders</p>
    );

    return (
        <div className="myOrders">
            <Header linkTo="/order" label="Buy fruits" />

            <div>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        orderBody
                    )
                }
            </div>

            {
                showModal && (
                    <Modal 
                        setShowModal={setShowModal} 
                        showModal={showModal} 
                        Children={OrderItemSection} 
                    />
                )
            }
        </div>
    )
}

export default MyOrders
