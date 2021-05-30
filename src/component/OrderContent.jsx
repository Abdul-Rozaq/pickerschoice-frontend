import React, { useEffect } from 'react';
import Swal from "sweetalert2";
import { selectProducts, selectLoading, selectError, getAllProductsAsync } from "../features/productSlice.js";
import { useDispatch, useSelector } from 'react-redux';
import ProductDisplay from './ProductDisplay';
 
const OrderContent = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllProductsAsync());
    }, [dispatch])

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
        <div className="order__contentBox">
            {
                loading ? (
                    <p>L.O.A.D.I.N.G</p>
                ) : (
                    products.map(product => <ProductDisplay key={product.productId} product={product} />)
                )
            }
        </div>
    )
}

export default OrderContent
