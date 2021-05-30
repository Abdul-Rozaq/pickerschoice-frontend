import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../component/Sidebar';
import { getAllcustomersForAdminAsync } from '../features/customerSlice';
import AdminHeader from "../component/AdminHeader";
import CustomerTable from "../component/CustomerTable";

const AdminCustomer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllcustomersForAdminAsync());
    }, [dispatch])
 
    return (
        <div className="adminPage">
            <Sidebar />
            <div className="admin">
                <AdminHeader />
                <div className="admin__content">
                    <CustomerTable />
                </div>
            </div>
        </div>
    )
}

export default AdminCustomer
