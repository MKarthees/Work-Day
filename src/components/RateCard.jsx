import React from 'react'
import '../css/ratecard.css'

const RateCard = ({ title, day, price, star }) => {
  return (
    <div className="rate-card-container">
      <div className="rate-card">
        <h1>{title}</h1>
        <div className="price">
          <label>
            <p>Duration: </p>
            {day} days
          </label>
          <label>
            <p>Price: </p>
            <span>{price}</span> <br /> per person
          </label>
        </div>

        <img src={star} alt="" />
      </div>
    </div>
  )
}

export default RateCard
