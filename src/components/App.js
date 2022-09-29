import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const backend = "http://localhost:6001/plants";
const [plantsData, setPlantsData] = useState(undefined);


//When the app starts, I can see all plants.

useEffect(()=>{
fetch(backend)
.then((response)=>response.json())
.then((data)=>setPlantsData(data))
},[])



  return (
    <div className="app">
      <Header />
      <PlantPage 
      plantsData={plantsData}/>
    </div>
  );
}

export default App;
