import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheeseBurger from './CheeseBurger';
import logo from "../images/homepage/logo.png";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Header = ({ linkTo, label }) => {
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(!open);
    };

    return (
        <header className="header"> 
            <div>
                <Link className="links" to="/">
                        <img src={logo} alt="pickers choice" className="header__logo" />
                </Link>
            </div>
            <nav className="header__nav">
                <div>
                    <div>
                        <Link to={linkTo} className="header__nav-link links">{label}</Link>
                    </div>
                    <div className="header__nav-auth">
                        {
                            user ? (
                                <span onClick={() => setOpen(true)} className="hamburger">
                                    &#9776;
                                </span>
                            ) : (
                                <>
                                    <Link to="/login" className="links">login</Link>
                                    &nbsp;/&nbsp;
                                    <Link to="/register" className="links">sign up</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </nav>
            <CheeseBurger open={open} closeMenu={closeMenu} />
        </header>
    )
}

export default Header
