import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { selectProducts, selectLoading, selectError, getAllProductsForAdminAsync } from "../features/productSlice.js";
import { useDispatch, useSelector } from 'react-redux';
import Product from '../component/Product'
import Loader from '../component/Loader.jsx';
import Swal from 'sweetalert2';
import Sidebar from '../component/Sidebar.jsx';
import AdminHeader from '../component/AdminHeader.jsx';

const AdminProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllProductsForAdminAsync());
    }, [dispatch])

    useEffect(()=>{
        if (error) {
            Swal.fire({
                icon: 'error',
                title: error,
                timer: 4000,
            });
        }
    },[error])

    return (
        <div className="adminPage">
            <Sidebar />
            <div className="admin">
                <AdminHeader />

                <div className="adminproducts">
                    <button className="adminProducts__newBtn">
                        <Link to="/admin/products/new" className="links">Add new product</Link>
                    </button>
                    <div className="adminProducts__container">
                        {
                            loading ? (
                                <Loader />
                            ) : (
                                products.map(product => <Product key={product.productId} product={product} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProducts
