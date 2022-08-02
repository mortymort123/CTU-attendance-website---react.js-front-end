import { Link, Outlet } from "react-router-dom"
import React from 'react';
import logo from '../image/logo.png';
function Nav() {
    return (
        <div>
            <nav className="Nav">
                <img className="header-logo" src={logo} alt="" />
                <ul className="topnav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/UserData">User Data</Link></li>
                    <li><Link to="/Registration">Registration</Link></li>
                    <li><Link to="/ReadTagID">Read Tag ID</Link></li>
                    <li><Link to="/AllAttendanceLog">All Attendance Log</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>)
}
export default Nav;