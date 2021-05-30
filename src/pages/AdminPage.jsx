import React from 'react';
import Admin from '../component/Admin';
import Sidebar from '../component/Sidebar';

const AdminPage = () => {
    return (
        <div className="adminPage">
            <Sidebar />
            <Admin /> 
        </div>
    )
}

export default AdminPage
