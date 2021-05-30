import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../features/productSlice';
import { getLoggedInUserAsync, selectCustomer } from '../features/userSlice';
import DeliveryForm from './DeliveryForm';
import ModalTable from './ModalTable';

const Cart = ({ setShowModal }) => {
    const currentUser = useSelector(selectCustomer);
    const dispatch = useDispatch();
    
    const cart = useSelector(selectCart);
    const totals = [];
    cart?.forEach((item) => totals.push(item.total));
    const totalAmount = totals.reduce((acc, cur) => acc + cur, 0);

    useEffect(() => {
        dispatch(getLoggedInUserAsync());
        return () => {
            
        }
    }, [dispatch])

    return (
        <div>
            <ModalTable cart={cart} totalAmount={totalAmount} />

            { currentUser ? (
                <React.Fragment>
                    <h4>Delivery information</h4>
                    <DeliveryForm cart={cart} currentUser={currentUser} setShowModal={setShowModal} />
                </React.Fragment>
            ) : (
                <p>Please Log in</p>
            )}
        </div>
    )
}

export default Cart
