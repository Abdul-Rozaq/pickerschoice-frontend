import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { saveOrderAsync } from '../features/orderSlice';

const schema = yup.object().shape({
    customerName: yup.string().required("Your names are required"),
    phone: yup.string().required("Please provide a phone number"),
    address: yup.string().required("Please provide an address"),
});

const DeliveryForm = ({ cart, currentUser, setShowModal }) => {
    const dispatch = useDispatch(); 
    
    const totals = [];
    cart?.forEach((item) => totals.push(item.total));
    const totalAmount = totals.reduce((acc, cur) => acc + cur, 0);

     const {
         handleSubmit, handleChange, handleBlur,
         touched, values, errors
     } = useFormik({
         initialValues: {
             customerId: currentUser.customerId,
            customerName: `${currentUser.firstName} ${currentUser.lastName}`,
            phone: currentUser.phone,
            address: currentUser.address,
         },
         validationSchema: schema,
         onSubmit: (values) => {
            const obj = JSON.stringify(values);
            const parsedObj = JSON.parse(obj);

            parsedObj.total = totalAmount;

            const request = {
                order: parsedObj,
                orderItems: cart
            }

            // console.log(request);  
            dispatch(saveOrderAsync(request));

            setShowModal(false);
         }
     })


    return (
        <form className="" onSubmit={handleSubmit}>

            <div className="">
                <div className="">
                    <input 
                        type="text"
                        name="customerName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.customerName}
                        placeholder="your name" 
                        className="modal__name"
                    />
                </div>

                {touched.customerName && errors.customerName ? (<div>{errors.customerName}</div>) : null}
            </div>

            <div className="">
                <div className="">
                    <input 
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        placeholder="Phone number" 
                        className="modal__phone"
                    />
                </div>

                {touched.phone && errors.phone ? (<div>{errors.phone}</div>) : null}
            </div>

            <div className="">
                <div className="">
                    <input 
                        type="text"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        placeholder="Delivery Address" 
                        className="modal__address"
                    />
                </div>

                {touched.address && errors.address ? (<div>{errors.address}</div>) : null}
            </div>

            <input type="submit" value="submit" className="modal__submit" />
        </form>
    )
}

export default DeliveryForm
