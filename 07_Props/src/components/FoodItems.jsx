import Item from "./Item";

// Define the FoodItems functional component
const FoodItems = (props) => {
    // Destructure the items array from props
    const { items } = props;

    return (
        <ul className="list-group">
            {/* Iterate over the items array and render an Item component for each item */}
            {items.map((item) => (
                // Use item as a unique key for each Item component
                // Pass item as a prop named foodItem to the Item component
                <Item key={item} foodItem={item} />
            ))}
        </ul>
    );
};

// Export the FoodItems component as the default export
export default FoodItems;