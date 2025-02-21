import React from "react";
import "../css/card.css";

const Card = ({ title, iconName, des }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>{title}</h1>
        <i>{iconName}</i>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Card;
