import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
	// Initialize an array containing food items
	let foodItems = ["Bread", "Fruits", "Salad", "Vegetables", "Milk"];

	return (
		<>
			{/* Container for the main content including heading, error message, input, and food items list */}
			<Container>
				<h1 className="foodHeading">Healthy Food</h1>
				<ErrorMsg items={foodItems} /> // Display error message related
				to food items
				<FoodInput /> // Input field for adding new food items
				<FoodItems items={foodItems} /> // Component displaying the list
				of food items
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
