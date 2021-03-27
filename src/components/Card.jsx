import React from "react";
import "./Card.css";

function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container" id="pokemon-list-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h5>{title}</h5>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        
      </div>
      <div className="btn">
          <h6>View More</h6>
        </div>
    </div>
  );
}

export default Card;
