import React from 'react';
import Cart from "../images/homepage/cart3.svg";
import People from "../images/homepage/people.svg";
import Shop from "../images/homepage/shop.svg";
import Dashboard from "../images/homepage/house-door.svg";
import SidebarRow from './SidebarRow';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={Dashboard} linkTo="admin" label="Dashboard" />
            <SidebarRow Icon={People} linkTo="admin/customers" label="Customers" />
            <SidebarRow Icon={Shop} linkTo="admin/products" label="Products" />
            <SidebarRow Icon={Cart} linkTo="admin/orders" label="Orders" />
        </div>
    )
}

export default Sidebar
