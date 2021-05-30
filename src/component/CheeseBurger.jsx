import React from 'react';
import CheeseBurgerMenu from "cheeseburger-menu";
import Nav from './Nav';


const CheeseBurger = ({ open, closeMenu }) => {
    return (
        <CheeseBurgerMenu isOpen={open} closeCallback={closeMenu}>
            <Nav closeMenu={closeMenu} />
        </CheeseBurgerMenu>
    )
}

export default CheeseBurger
