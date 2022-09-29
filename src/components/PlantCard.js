import React from "react";

function PlantCard({plantDatum}) {
  return (
    <li className="card">
      <img src={plantDatum.image} alt={plantDatum.name} />
      <h4>{plantDatum.name}</h4>
      <p>Price: {plantDatum.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
