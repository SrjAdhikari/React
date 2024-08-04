import ErrorMsg from "./components/ErrorMsg";  			// Import the ErrorMsg component to display error messages
import FoodItems from "./components/FoodItems";  		// Import the FoodItems component to display a list of food items

function App() {
    // Initialize an array containing food items
    let foodItems = ["Bread", "Fruits", "Salad", "Vegetables", "Milk"];

    return (
        <>
            {/* Render the main heading for the application */}
            <h3>Healthy Food</h3>

            {/* 
                Render the ErrorMsg component to handle cases where no food items are available.
                - It will display a message if the `foodItems` array is empty.
                - The `items` prop is passed to ErrorMsg to determine if the array is empty.
            */}
            <ErrorMsg items={foodItems} />

            {/* 
                Render the FoodItems component to display the list of food items.
                - The `items` prop is passed to FoodItems, which then maps over the array to create a list.
                - FoodItems will render an `<ul>` element with `<li>` elements for each food item.
            */}
            <FoodItems items={foodItems} />
        </>
    );
}

export default App;