// Importing CSS module for styling the FoodInput component
import styles from "./FoodInput.module.css";

// Define the FoodInput component
const FoodInput = ({ handleOnChange }) => {
	return (
		// Render an input element with placeholder text and styling
		<input
			type="text"
			placeholder="Enter food item here"
			className={styles.foodInput}
			onChange={handleOnChange} // Event handler for change events
		/>
	);
};

// Export the FoodInput component for use in other parts of the application
export default FoodInput;
