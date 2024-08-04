// Define a functional component named Item
const Item = (props) => {
    // Extract the 'foodItem' prop from props
    const { foodItem } = props;
    
    // Render a list item with the 'foodItem' value
    return (
        <li className="list-group-item">
            {foodItem}
        </li>
    );
};

export default Item;