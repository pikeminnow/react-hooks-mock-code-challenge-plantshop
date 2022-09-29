import React from "react";

function NewPlantForm({setPlantsFormData}) {

function handleSubmit(event){
  event.preventDefault();
  let newPlantObject = {
    "name" : event.target[0].value,
    "image": event.target[1].value,
    "price": event.target[2].value
  }
  setPlantsFormData(newPlantObject);
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
