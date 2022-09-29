import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const backend = "http://localhost:6001/plants";
const [plantsRefresh, setPlantsRefresh] = useState(0); //used solely to request a refresh of plants
const [plantsData, setPlantsData] = useState(undefined);
const [plantsFormData, setPlantsFormData] = useState(undefined);


//When the app starts, I can see all plants.

useEffect(()=>{
fetch(backend)
.then((response)=>response.json())
.then((data)=>setPlantsData(data))
},[plantsRefresh])

//I can add a new plant to the page by submitting the form.

useEffect(()=> {
  if (plantsFormData === undefined){
    return null;
  }

fetch(backend, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(plantsFormData)
}).then(()=> {
  let freshenPlants = plantsRefresh + 1;
setPlantsRefresh(freshenPlants);
})

},[plantsFormData])

  return (
    <div className="app">
      <Header />
      <PlantPage 
      plantsData={plantsData}
      setPlantsFormData={setPlantsFormData}/>
    </div>
  );
}

export default App;
