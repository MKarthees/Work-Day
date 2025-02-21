import React from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <img src={logo} className="c-logo" alt="Company Logo" />
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="inbox">
            <li>Inbox</li>
          </NavLink>
          <NavLink to="payroll">
            <li>Payroll</li>
          </NavLink>
          <NavLink to="time-absence">
            <li>Time & Absence</li>
          </NavLink>
        </ul>
        <div className="profile">
          <img src={user} className="u-logo" alt="User Logo" />
        </div>
        <i>
          <FaBars />
        </i>
      </nav>
    </div>
  );
};

export default Navbar;
