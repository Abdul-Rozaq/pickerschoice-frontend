import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectError, selectLoading, getAllOrdersForAdminAsync} from "../features/orderSlice";
import OrderTable from '../component/OrderTable';
import Loader from "../component/Loader";
import OrderItemSection from '../component/OrderItemSection';
import Modal from '../component/Modal';
import Sidebar from '../component/Sidebar';
import AdminHeader from '../component/AdminHeader';

const AdminOrders = () => {
    const [showModal, setShowModal] = useState(false);
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllOrdersForAdminAsync());
    }, [dispatch])

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

    return (
        <div className="adminPage">
            <Sidebar />
            <div className="admin">
                <AdminHeader />
                <div className="adminOrders">
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <OrderTable />
                        )
                    }

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
            </div>  
        </div>
    )
}

export default AdminOrders
