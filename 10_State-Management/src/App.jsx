import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
	// Initialize state with an array of food items
	let [foodItems, setFoodItems] = useState(["Vegetables", "Fruits", "Salad"]);

	// Event handler for when a key is pressed in the input field
	const onKeyDown = (event) => {
		// Check if the pressed key is "Enter"
		if (event.key === "Enter") {
			// Get the value of the input field
			let newFoodItem = event.target.value;
			// Create a new array with the current food items and the new item
			let newItems = [...foodItems, newFoodItem];
			// Update the state with the new array of food items
			setFoodItems(newItems);
		}
	};

	return (
		<>
			{/* Container for the main content including heading, error message, input, and food items list */}
			<Container>
				<h1 className="foodHeading">Healthy Food</h1>
				<FoodInput handleKeyDown={onKeyDown} />
				<ErrorMsg items={foodItems} />
				<FoodItems items={foodItems} />
			</Container>

			<Container>
				<p>
					Above is the list of healthy foods that are good for your
					health and well being.
				</p>
			</Container>
		</>
	);
}

export default App;
