import React from 'react'

const AdminHeader = () => {
    const handleLogout = () => {
        sessionStorage.removeItem("token");
    }
    
    return (
        <div className="admin__header">
            <h3>Hi, admin</h3>
            <p onClick={handleLogout}>Logout</p>
        </div>
    )
}

export default AdminHeader
