import React from 'react'

const ModalTable = ({ cart, totalAmount }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>price</th>
                    <th>QTY</th>
                    <th>Sub-total</th>
                </tr>
            </thead>
            <tbody className="basket__content">
                {
                    cart.map(item => (
                        <tr key={item.productId}>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.price}</td>
                        </tr>
                    ))
                }

            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="3"><strong>Total</strong></th>
                    <th className="basket__total">{totalAmount}</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default ModalTable
