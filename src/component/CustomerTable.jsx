import React from 'react'
import { useSelector } from 'react-redux';
import { selectcustomers } from '../features/customerSlice';

const CustomerTable = () => {
    const customers = useSelector(selectcustomers);
    
    return (
        <div className="customerTable">
            <div className="customerTableHeader ctrow">
                <h3 className="tableHead">Name</h3>
                <h3 className="tableHead">Email</h3>
                <h3 className="tableHead">Phone</h3>
                <h3 className="tableHead">Address</h3>
            </div>

            {
                customers.map(customer => (
                    <div className="customerInfoRow ctrow" key={customer.customerId}>
                        <p className="tableData">{customer.firstName} {customer.lastName}</p>
                        <p className="tableData">{customer.email}</p>
                        <p className="tableData">{customer.phone}</p>
                        <p className="tableData">{customer.address}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CustomerTable
