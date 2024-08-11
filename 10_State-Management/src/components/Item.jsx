// Importing CSS module for styling the Item component
import styles from "./Item.module.css";

// Define the Item component that accepts a foodItem prop
const Item = ({ foodItem, handleBuyButton }) => {
	return (
		// List item element styled using CSS module and Bootstrap classes
		<li className={`${styles["food-item"]} list-group-item`}>
			{/* Span element for displaying the food item name */}
			<span className={styles["food-span"]}>{foodItem}</span>
			{/* Button element to trigger the buy action */}
			<button
				className={`${styles.button} btn btn-info`} // Combine CSS module styling with Bootstrap button styling
				onClick={handleBuyButton} // Attach the click event handler
			>
				Buy
			</button>
		</li>
	);
};

// Export the Item component for use in other parts of the application
export default Item;
