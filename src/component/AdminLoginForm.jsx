import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup';
import Input from './Input';

const schema = yup.object().shape({
    username: yup.string().trim().required(),
    password: yup.string().trim().required(),
});

const AdminLoginForm = ({ handleAdminLogin }) => {

     const {
         handleSubmit, handleChange, handleBlur,
         touched, values, errors
     } = useFormik({
         initialValues: {
            username: "",
            password: "",
         },
         validationSchema: schema,
         onSubmit: (values, actions) => {
            handleAdminLogin(JSON.stringify(values));
            actions.resetForm({
                values: {
                    username: "",
                    password: "",
                }
            })
         }
     })


    return (
        <form className="form__div" onSubmit={handleSubmit}>

            <Input
                name="username" placeholder="Username"
                onChange={handleChange} onBlur={handleBlur}
                value={values.username}
                touched={touched.username} errors={errors.username}
            />
            <Input
                name="password" placeholder="Password"
                onChange={handleChange} onBlur={handleBlur}
                value={values.password} type="password"
                touched={touched.password} errors={errors.password}
            />

            <button type="submit" className="form__btn">Sign In</button>
        </form>
    )
}

export default AdminLoginForm
