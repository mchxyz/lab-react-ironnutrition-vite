import { useState } from "react";

const AddFoodForm = ({addFood}) => {

     const [newFood, setNewFood] = useState({
      id: '',
      name: "",
      calories: 0,
      image: "",
      servings: 0
     });

     const handleSubmit = (e) => {
      e.preventDefault()

      addFood(newFood) 

      setNewFood({
        id: '',
        name: "",
        calories: 0,
        image: "",
        servings: 0
      })
     }

    const handleTextInput = (e) => {
      setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
  
    const handleNumberInput = (e) => {
      setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

  return (

    <div className="addFood">
    <h1>Add Food Entry</h1>

    <form onSubmit={handleSubmit} className="form">
      
      <input
          type="text"
          name="name"
          value={newFood.name}
          onChange={handleTextInput}
          placeholder="Food name"
      />
   
      <input
          type="text"
          name="image"
          value={newFood.image}
          onChange={handleTextInput}
          placeholder="Image - Url"
      />
      <label >Calories:</label>
      <input
          type="number"
          name="calories"
          value={newFood.calories}
          onChange={handleNumberInput}
          placeholder="Calories"
      />

<label >Servings:</label>
      <input
          type="number"
          name="servings"
          value={newFood.servings}
          onChange={handleNumberInput}
          placeholder="Servings"
      />

      <button type="submit">Create</button>
    </form>
  </div>


  )
}

export default AddFoodForm
