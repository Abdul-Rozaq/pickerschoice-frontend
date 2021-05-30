import React from 'react'
import AdminHeader from '../component/AdminHeader'
import Sidebar from '../component/Sidebar'
import ProductForm from '../component/ProductForm'

const ProductCreate = () => {
    return (
        <div className="adminPage">
            <Sidebar />

            <div className="admin">
                <AdminHeader />
                <div className="form__wrapper">
                    <h3 className="header__center">Create A new Product</h3>
                    <ProductForm />
                </div>
            </div>
        </div>
    )
}

export default ProductCreate
