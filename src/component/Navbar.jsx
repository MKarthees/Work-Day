import React from 'react'
import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav>
            <img src={logo} className='c-logo' alt="Company Logo" />
            <ul>
                <li className='active'>Home</li>
                <li>Inbox</li>
                <li>My Work Day</li>
                <li>Payroll</li>
                <li>Time & Absence</li>
            </ul>
            <div className="profile">
                <img src={user} className='u-logo' alt="User Logo" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar