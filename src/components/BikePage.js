import React, { useState, useEffect } from 'react';
import BikeList from './BikeList';

function BikePage() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/motorcycles")
    .then(resp => resp.json())
    .then(data => setBikes(data))
  }, [])

  return (
    <main>
      <BikeList bikes={bikes} />
    </main>
  )
}

export default BikePage;