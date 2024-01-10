import React from 'react';

const BikeCard = ({ bike }) => {
  const { name, image, price } = bike;
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </li>
  );
}

export default BikeCard;