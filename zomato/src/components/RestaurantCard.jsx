import React from 'react';

function RestaurantCard({ name, image, description }) {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-description">{description}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
