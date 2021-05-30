import React from 'react'
import { Link } from 'react-router-dom'

const SidebarRow = ({ Icon, linkTo, label }) => {
    return (
        <Link to={`/${linkTo}`} className="links">
            <div className="sidebarRow">
                <img src={Icon} alt="" className="sidebar__icon" />
                <p>{label}</p>
            </div>
        </Link>
    )
}

export default SidebarRow
