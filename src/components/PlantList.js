import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsData}) {

  if(plantsData === undefined){
    return null;
  }

  let plantCardItems = plantsData.map((plantDatum)=>{
   return <PlantCard 
    key={plantDatum.id}
    plantDatum={plantDatum}
    />
  })
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
    {plantCardItems}
    </ul>
  );
}

export default PlantList;
