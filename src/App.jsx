import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  // const [foods, setFoods] = useState(foodsJson);

  // const deleteFood = (toDelete) => {
  //   const filteredFood = foods.filter(food => food.id !== toDelete);
  //   setFoods(filteredFood)
  // }

  // const addFood = (newFoodItem) => {
  //   setFoods(prevFoods=> [...prevFoods, newFoodItem])
  // }

  return (
      <div className="App">
        <FoodList />
      </div>
    );
    
    // <div className="App">
    //   <AddFoodForm addFood={addFood}/>
    //   <h1>Food List</h1>

    //   <div className="app-container">

    //   <FoodBox foods={foods} onDelete={deleteFood}/>
    //   </div>
    // </div>
}

export default App;
