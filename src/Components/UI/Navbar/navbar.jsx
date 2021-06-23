import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
            <div className="container">
                
                <Link to="/home" className="navbar-brand"><span className="text-primary">Safe</span> courier</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#parcels" className="nav-link">Parcels</a>
                        </li>
                        <li className="nav-item">
                            <a href="#users" className="nav-link">Users</a>
                        </li>
                        <li className="nav-item">
                            <a href="#login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#signup" className="nav-link">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a href="#logout" className="nav-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;