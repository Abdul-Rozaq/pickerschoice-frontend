import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, selectUser } from '../features/userSlice';
import Cart from "../images/homepage/cart3.svg";
import Profile from "../images/homepage/person.svg";

const Nav = ({ closeMenu }) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        dispatch(logout());
        closeMenu();
    }

    return (
        <div className="nav">
            <div>
                <h3>{user?.sub}</h3>

                <div className="nav__links">
                    <div className="nav__link">
                        <Link className="links" to="/history/orders">
                            My Orders
                        </Link>
                        <img className="header__user" src={Cart} alt="cart"/>
                    </div>
                    <div className="nav__link">
                        <Link className="links" to="/profile">
                            Profile
                        </Link>
                        <img className="header__user" src={Profile} alt="profile"/>
                    </div>
                    <div className="nav__link">
                        <Link className="links" to="/" onClick={handleLogout}>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
