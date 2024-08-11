// Importing CSS module for styling the FoodInput component
import styles from "./FoodInput.module.css";

// Define the FoodInput component
const FoodInput = ({ handleKeyDown }) => {
	return (
		<input
			type="text"
			placeholder="Enter food item here"
			className={styles.foodInput}
			onKeyDown={handleKeyDown}
		/>
	);
};

// Export the FoodInput component for use in other parts of the application
export default FoodInput;
