import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  // const handleDelete = () => {

  // }

  const deleteFood = (toDelete) => {
    const filteredFood = foods.filter(food => food.id !== toDelete);
    setFoods(filteredFood)
  }


  return (
    <div className="App">

      <FoodBox foods={foods} onDelete={deleteFood}/>
    </div>
  );
}

export default App;
