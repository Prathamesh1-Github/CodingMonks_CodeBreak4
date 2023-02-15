import React from "react";
import "../styles/navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="header">
                <div className="menu-bar container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <NavLink className="navbar-brand" to="/">Ride</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link secondary-button" to="/login">Sign In</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link primary-button" to="/register">Sign Up</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar