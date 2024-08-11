import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
	// Initialize an array containing food items
	let foodItems = ["Bread", "Fruits", "Salad", "Vegetables", "Milk"];

	// Function to handle changes in the input field
	const handleOnChange = (event) => {
		// Log the current value of the input field to the console
		console.log(event.target.value);
	};

	return (
		<>
			{/* Container for the main content including heading, error message, input, and food items list */}
			<Container>
				<h1 className="foodHeading">Healthy Food</h1>
				<ErrorMsg items={foodItems} />
				<FoodInput handleOnChange={handleOnChange} />
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
