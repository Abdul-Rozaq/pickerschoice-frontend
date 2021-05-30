import React, { useState } from 'react';
import axios from "../utils/axios.js";
import AdminLoginForm from '../component/AdminLoginForm';
import Loader from '../component/Loader';
import { useHistory } from 'react-router';

function AdminLogin() {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [error, setError] = useState(false);

    const handleAdminLogin = async (data) => {
        try {
            setLoading(true);
            const { headers } = await axios.post("login", data);
            sessionStorage.setItem("token", headers.authorization);
            setLoading(false);
            
            history.replace("/admin");

        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }

    return (
        <div className="adminLogin">
            <h3 className="header__center">Login to Admin dashbord</h3>
            <div className="form__wrapper">
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <>
                            <AdminLoginForm handleAdminLogin={handleAdminLogin} />
                            {error && <p className="error">Invalid Username or password</p>}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default AdminLogin
