import { useState } from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import foodsJson from './foods.json';

const FoodList = () => {

  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (toDelete) => {
    const filteredFood = foods.filter(food => food.id !== toDelete);
    setFoods(filteredFood)
  }

  const addFood = (newFoodItem) => {
    setFoods(prevFoods=> [...prevFoods, newFoodItem])
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addFood}/>
      <h1>Food List</h1>

      <div className="app-container">
        <FoodBox foods={foods} onDelete={deleteFood}/>
      </div>
      
    </div>
  )
    // return (
    //     <div>
    //         <h1>Food List</h1>
    //         <div className='app-container'>
    //         {foods.map(food => (
    //             <FoodBox key={food.id} food={food} onDelete={onDelete} />
    //         ))}
    //         </div>
    //     </div>
    // )
}

export default FoodList;