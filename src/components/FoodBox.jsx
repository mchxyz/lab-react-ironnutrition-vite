const FoodBox = ({ foods, onDelete }) => {


  return (
    <>
      {foods.map((food) => (
        <div className="food-box">
          <h3>Name: {food.name}</h3>
          <img src={food.image} alt={food.name} />

          <h3>Calories: {food.calories}</h3>
          <h3>Servings: {food.servings}</h3>

          <h2>Total Cal: {food.calories * food.servings}</h2>

          <button onClick={() => onDelete(food.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default FoodBox;

// Iteration 4 | Delete List Items
// Your FoodBox component has a Delete button, and it is time to put it to use. In this iteration, your task is to implement the delete functionality to remove the item from the food list when the delete button is clicked.

// Hint: To remove a food item from the list and the foods array which is in the state of the App component, you have to pass a function from App to FoodBox component through props. This function should take the id of the food item to be removed, remove it from the foods array, and then update the state variable holding the foods array.
