import React from 'react'
import '../css/card.css'

import { FaUsersGear } from 'react-icons/fa6'

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>Human Capital Management (HCM)</h1>
        <i>
          <FaUsersGear />
        </i>
      </div>
      <div className="card">
        <h1>Human Capital Management (HCM)</h1>
        <i>
          <FaUsersGear />
        </i>
      </div>
    </div>
  )
}

export default Card
