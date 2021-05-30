import React, { useState } from 'react';

import axios from "../utils/axios";
import Header from '../component/Header';
import Loader from '../component/Loader';
import LoginForm from '../component/LoginForm';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/userSlice';

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin = async (data) => {
        setLoading(true);
        try {
            const { headers } = await axios.post("login", data);
            sessionStorage.setItem("token", headers.authorization);
            const user = jwtDecode(headers.authorization);
            dispatch(setCurrentUser(user));
            setLoading(false);
            props.history.push("/")
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }
 
    return (
        <div className="loginPage">
            <Header linkTo="/about" label="About us" />
            <div className="form__wrapper">
                <h4 className="header__center">Login to your account</h4>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <>
                            <LoginForm handleLogin={handleLogin} />
                            {error && <p className="error">Invalid Username or Password</p>}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default LoginPage
