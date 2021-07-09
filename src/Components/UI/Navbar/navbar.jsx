import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = ({user}) => {
    return ( 
        <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark py-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand"><span className="text-primary">Safe</span> courier</NavLink>
                <button className="navbar-toggler text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                       {(user && user.isAdmin ===false) && 
                        <Fragment>
                        <li className="nav-item">
                            <NavLink to={`/users/${user._id}/parcels`} className="nav-link">Parcels</NavLink>
                        </li>
                        </Fragment>
                       } 
                       {!user && 
                        <Fragment>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">Signup</NavLink>
                            </li>
                        </Fragment>
                       }
                      {user && 
                        <Fragment>
                            {(user && user.isAdmin) ? <small className="text-primary"><strong>Admin</strong></small> : ""}
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/user/${user._id}`}>{user.name}</NavLink>
                            </li>
                            {user.isAdmin && 
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/admin">Dashboad</NavLink>
                                </li>
                            }
                             <li className="nav-item">
                                <NavLink to="/logout" className="nav-link">Logout</NavLink>
                            </li>
                        </Fragment>
                      }
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;