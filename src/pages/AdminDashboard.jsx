import React from 'react'
import AdminHeader from '../component/AdminHeader'
import Sidebar from '../component/Sidebar'

const AdminDashboard = () => {
    return (
        <div className="adminPage">
            <Sidebar />

            <div className="admin">
                <AdminHeader />

                <div>
                    My dashboard
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
