import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../component/Header';
import RegisterForm from '../component/RegisterForm';
import { selectError, selectIsRegistered, selectLoading } from '../features/userSlice';
import Loader from "../component/Loader";
import Swal from 'sweetalert2';


const RegisterPage = () => {
    const token = useSelector(selectIsRegistered);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

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
        <div className="registerPage">
            <Header linkTo="/about" label="About Us" />
            <h2  className="header__center">Create a Pickerschoice account</h2>
            <div className="form__wrapper">
                {
                    loading ? (
                        <Loader />
                    ) : token ? (
                        <h1>Thank you for registering. <br /> Please login to your email to verify your Account.</h1>
                    ) : (
                        <RegisterForm />
                    )
                }
            </div>
        </div>
    )
}

export default RegisterPage
