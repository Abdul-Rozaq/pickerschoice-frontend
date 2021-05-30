import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getProductByIdAsync, selectProduct, selectLoading, selectError, updateProductAsync } from '../features/productSlice';
import Loader from '../component/Loader';
import ProductForm from '../component/ProductForm'
import Sidebar from '../component/Sidebar';
import AdminHeader from '../component/AdminHeader';

const ProductEdit = () => {
    const { productId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    // const updatedProduct = useSelector(selectNewProduct);
    const product = useSelector(selectProduct);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getProductByIdAsync(productId));
    }, [dispatch, productId])

    const handleUpdate = (obj) => {
        dispatch(updateProductAsync(JSON.stringify(obj), obj.productId));
        history.push("/admin/products");
    }

    const handleError = (error) => {
        Swal.fire({
            icon: 'error',
            title: error,
            timer: 4000,
        });
    }

    useEffect(() => {
        if (error)
            handleError(error)
    },[error])

    return ( 
        <div className="adminPage">
            <Sidebar />
            <div className="admin">
                <AdminHeader />

                <div className="productEdit form__wrapper">
                    <h3 className="header__center">Edit product: <strong>{product.productName}</strong></h3>
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <ProductForm product={product} handleUpdate={handleUpdate} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductEdit
