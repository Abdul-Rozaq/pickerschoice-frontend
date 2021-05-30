import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup';
import Input from "../component/Input";
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productSlice';
import { useHistory } from 'react-router';

const schema = yup.object().shape({
    productId: yup.number(),
    productName: yup.string().trim().required(),
    productDescription: yup.string().trim(),
    price: yup.number().required(),
});

const ProductForm = ({ product, handleUpdate }) => {
    const dispatch = useDispatch();
    const history = useHistory();

     const {
         handleSubmit, handleChange, handleBlur,
         touched, values, errors
     } = useFormik({
         initialValues: {
            productName: product?.productName || "",
            productDescription: product?.productDescription || "",
            price: product?.price || "",
            productId: product?.productId || ""
         },
         validationSchema: schema,
         onSubmit: (values) => {
            const obj = JSON.stringify(values);
            const parsedObj = JSON.parse(obj)

            if (handleUpdate) {
                handleUpdate(parsedObj);
            } else {
                dispatch(saveProduct(parsedObj));
                history.push("/admin/products");
            } 
         }
     })


    return (
        <form className="form__div" onSubmit={handleSubmit}>
            <input 
                type="hidden" name="productId"
                onChange={handleChange} onBlur={handleBlur}
                value={values.productId}
            />

            <Input
                name="productName" placeholder="Product name *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.productName}
                touched={touched.productName} errors={errors.productName}
            />

            <Input 
                name="productDescription" placeholder="Description"
                onChange={handleChange} onBlur={handleBlur}
                value={values.productDescription}
                touched={touched.productDescription} errors={errors.productDescription}
            />

            <Input 
                name="price" placeholder="Price *"
                onChange={handleChange} onBlur={handleBlur}
                value={values.price}
                touched={touched.price} errors={errors.price}
            />

            <button type="submit" className="form__btn">Submit</button>
        </form>
    )
}

export default ProductForm
