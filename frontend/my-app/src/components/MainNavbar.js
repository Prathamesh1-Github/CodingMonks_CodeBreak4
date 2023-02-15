import React from "react";
import "../styles/navbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {NavLink} from "react-router-dom"

const MainNavbar = () => {
    return (
        <div className="header">
                <div className="menu-bar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <NavLink className="navbar-brand" to="/dashboard">Ride</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/search"><SearchIcon/>Search</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/createride"><AddCircleOutlineIcon/>Publish</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to="/profile"><AccountCircleIcon/></NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        </div>
    )
}

export default MainNavbar