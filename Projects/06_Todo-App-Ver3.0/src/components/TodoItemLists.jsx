// Import the TodoItem component
import TodoItem from "./TodoItem";

// Define the TodoItemLists component that displays a list of todo items
const TodoItemLists = ({ todoItems, onDeleteClick }) => {
	return (
		// Container for the list of todo items
		<div className="items-container">
			{/* Map through the todoItems array to render a TodoItem for each item */}
			{todoItems.map((item) => (
				<TodoItem
					// Pass the name and dueDate of the current todo item to the TodoItem component
					todoItem={item.name}
					dueDate={item.dueDate}
					// Pass the onDeleteClick function to handle deletion
					onDeleteClick={onDeleteClick}
					// Use the item name as the key prop for better React performance
					key={item.name}
				/>
			))}
		</div>
	);
};

export default TodoItemLists;
