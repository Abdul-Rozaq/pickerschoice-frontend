import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Input from './Input';
import { registerUserAsync } from '../features/userSlice';

const schema = yup.object().shape({
    firstName: yup.string().trim().required("Please provide your first name"),
    lastName: yup.string().trim().required("Please provide your last name"),
    email: yup.string().email().trim().required("Email must be provided"),
    phone: yup.string().trim().min(11).max(11).required("Phone number must be provided"),
    address: yup.string().trim(),
    password: yup.string().trim().required("Password must be provided")
});

const RegisterForm = () => {
    const dispatch = useDispatch();

     const {
         handleSubmit, handleChange, handleBlur,
         touched, values, errors
     } = useFormik({
         initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            password: ""
         },
         validationSchema: schema,
         onSubmit: (values, actions) => {
            const obj = JSON.stringify(values);

            console.log(obj);
            dispatch(registerUserAsync(obj));

            actions.resetForm({
                values: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                    password: ""
                }
            })
         }
     })


    return (
        <form className="form__div" onSubmit={handleSubmit}>

            <Input
                name="firstName" placeholder="First Name *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.firstName}
                touched={touched.firstName} errors={errors.firstName}
            />

            <Input
                name="lastName" placeholder="Last Name *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.lastName}
                touched={touched.lastName} errors={errors.lastName}
            />

            <Input
                name="email" placeholder="Email Address *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.email}
                touched={touched.email} errors={errors.email}
            />

            <Input
                name="phone" placeholder="Phone Number *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.phone}
                touched={touched.phone} errors={errors.phone}
            />

            <Input
                name="address" placeholder="Address"
                onChange={handleChange} onBlur={handleBlur}
                value={values.address}
                touched={touched.address} errors={errors.address}
            />

            <Input
                name="password" placeholder="Password *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.password} type="password"
                touched={touched.password} errors={errors.password}
            />

            <button type="submit" className="form__btn">Register</button>
        </form>
    )
}

export default RegisterForm
