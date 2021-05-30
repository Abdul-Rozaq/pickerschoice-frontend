import React from 'react';
import { useHistory } from 'react-router';
import prod from "../images/homepage/cart.png";
import edit from "../images/homepage/pencil-square.svg";

const Product = ({ product }) => {
    const history = useHistory();
    const handleEdit = (id) => {
        history.push(`/admin/products/edit/${id}`);
    }
    return (
        <div className="product">
            <div className="product__img">
                <img src={prod} alt="item" />
            </div>
            <div className="product__info">
                <h2>{product.productName}</h2>
            </div>
            <div className="product__price">
                <p>{product.price} ngn</p>
                <p>{product.productDescription}</p>
            </div>
            <div className="product__action">
                <img src={edit} alt="edit" onClick={(e) => handleEdit(product.productId)}/>
            </div>
        </div>
    )
}

export default Product
