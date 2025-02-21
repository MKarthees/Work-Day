import React from "react";
import "../css/ratecard.css";

const RateCard = ({ title, day, price, icon, color }) => {
  return (
    <div className="rate-card-container">
      <div className="rate-card">
        <h1>{title}</h1>
        <label>
          <p>Duration: </p>
          {day} days
        </label>
        <label>
          <p>Price: </p>
          {price} per person
        </label>
        <i style={{ color: `${color}` }}>{icon}</i>
      </div>
    </div>
  );
};

export default RateCard;
