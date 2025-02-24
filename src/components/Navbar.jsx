import React from 'react'
import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

import { FaBars, FaXmark, FaCircleUser } from 'react-icons/fa6'
import { FaHome } from 'react-icons/fa'
import { useRef } from 'react'

const Navbar = () => {
  const navList = useRef(null)
  function openNav(params) {
    navList.current.style.display = 'flex'
  }
  function closeNav(params) {
    navList.current.style.display = 'none'
  }

  return (
    <div className="navbar-container">
      <nav>
        <img src={logo} className="c-logo" alt="Company Logo" />
        <ul ref={navList}>
          <i onClick={closeNav} className="close">
            <FaXmark />
          </i>
          <NavLink to="/">
            <li>
              <FaHome />
            </li>
          </NavLink>
          {/* <NavLink to="inbox">
            <li>Inbox</li>
          </NavLink>
          <NavLink to="payroll">
            <li>Payroll</li>
          </NavLink>
          <NavLink to="time-absence">
            <li>Time & Absence</li>
          </NavLink>
          <NavLink to="login">
            <li>
              <FaCircleUser />
            </li>
          </NavLink> */}
        </ul>
        <div className="profile">
          <NavLink to="login">
            <li className="u-logo" alt="User Logo">
              <FaCircleUser />
            </li>
          </NavLink>
        </div>
        <i onClick={openNav}>
          <FaBars />
        </i>
      </nav>
    </div>
  )
}

export default Navbar
