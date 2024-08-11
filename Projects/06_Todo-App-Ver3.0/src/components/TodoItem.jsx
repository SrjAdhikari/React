import { MdDelete } from "react-icons/md";

// Define the TodoItem component that displays individual todo items
function TodoItem({ todoItem, dueDate, onDeleteClick }) {
	return (
		// Container for each todo item
		<div className="container">
			<div className="row sub-row">
				{/* Column displaying the name of the todo item */}
				<div className="col-6">{todoItem}</div>
				{/* Column displaying the due date of the todo item */}
				<div className="col-4">{dueDate}</div>
				{/* Column with a button to delete the todo item */}
				<div className="col-2">
					<button
						type="button" // Button element for user interaction
						className="btn btn-danger sub-button" // Bootstrap styling for a dangerous (red) button
						onClick={() => onDeleteClick(todoItem)} // Event handler to call onDeleteClick with the current todo item
					>
						<MdDelete />
						{/* Replace 'Delete' button text with icon */}
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
