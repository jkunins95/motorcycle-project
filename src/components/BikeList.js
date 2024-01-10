import React from 'react';
import BikeCard from './BikeCard';

function BikeList({ bikes }) {
  const bikeCards = bikes.map((bike) => {
    return <BikeCard key={bike.id} bike={bike} />
  });

  return (
    <ul className="cards">
      {bikeCards}
    </ul>
  );
}

export default BikeList;