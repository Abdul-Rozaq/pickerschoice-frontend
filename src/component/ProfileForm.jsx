import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup';
import Input from "../component/Input";

const schema = yup.object().shape({
    customerId: yup.number(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required,
    phone: yup.string().required(),
    address: yup.string().required(),
});

const ProfileForm = ({ currentUser }) => {

     const {
         handleSubmit, handleChange, handleBlur,
         touched, values, errors
     } = useFormik({
         initialValues: {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            phone: currentUser.phone,
            customerId: currentUser.customerId,
            address: currentUser.address
         },
         validationSchema: schema,
         onSubmit: (values) => {
            const obj = JSON.stringify(values);
            console.log(obj); 

         }
     })


    return (
        <form className="form__div" onSubmit={handleSubmit}>
            <input 
                type="hidden" name="customerId"
                onChange={handleChange} onBlur={handleBlur}
                value={values.customerId}
            />

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
                name="email" placeholder="Email address"
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

            <button type="submit" className="form__btn">Update Info</button>
        </form>
    )
}

export default ProfileForm
