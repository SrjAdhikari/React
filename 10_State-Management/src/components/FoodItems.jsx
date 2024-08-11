import { useState } from "react";
import Item from "./Item";

// Define the FoodItems functional component
const FoodItems = (props) => {
	// Destructure the items array from props
	const { items } = props;

	// Initialize state to keep track of active items
	let [activeItems, setActiveItems] = useState([]);

	// Event handler for the "Buy" button click
	let onBuyButton = (item, event) => {
		// Create a new array with the current list of active items and the new item
		let newItems = [...activeItems, item];
		// Update the state with the new array of active items
		setActiveItems(newItems);
	};

	return (
		// Unordered list with Bootstrap styling for a list group
		<ul className="list-group">
			{/* Map through the items array to create an Item component for each item */}
			{items.map((item) => (
				<Item
					// Unique key prop for each item to help React identify which items have changed
					key={item}
					// Pass the current item as a prop to the Item component
					foodItem={item}
					// Determine if the current item is active and pass it as a prop
					isBuyClicked={activeItems.includes(item)}
					// Pass a function to handle the "Buy" button click, including the current item and event
					handleBuyButton={(event) => onBuyButton(item, event)}
				/>
			))}
		</ul>
	);
};

// Export the FoodItems component as the default export
export default FoodItems;
