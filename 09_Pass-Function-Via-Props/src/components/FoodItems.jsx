import Item from "./Item";

// Define the FoodItems functional component
const FoodItems = (props) => {
	// Destructure the items array from props
	const { items } = props;

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
					// Pass a function as a prop to handle the "Buy" button click
					handleBuyButton={() => {
						// Log a message indicating that the item has been bought
						console.log(`${item} bought.`);
					}}
				/>
			))}
		</ul>
	);
};

// Export the FoodItems component as the default export
export default FoodItems;
