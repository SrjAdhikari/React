import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

// Define the AddTodo component that allows users to add new todo items
function AddTodo({ addnewItem }) {
	// State to manage the name and due date of the todo item
	const [todoName, setTodoName] = useState("");
	const [dueDate, setDueDate] = useState("");

	// Event handler for changes in the todo name input field
	const handleNameChange = (event) => {
		setTodoName(event.target.value);
	};

	// Event handler for changes in the due date input field
	const handleDateChange = (event) => {
		setDueDate(event.target.value);
	};

	// Event handler for the "Add" button click
	const handleAddButtonClicked = () => {
		// Call the addnewItem function passed as a prop with the current todo name and due date
		addnewItem(todoName, dueDate);
		// Clear the input fields after adding the todo item
		setTodoName("");
		setDueDate("");
	};

	return (
		// Container for the add todo functionality
		<div className="container">
			<div className="row sub-row">
				{/* Input field for entering the todo name */}
				<div className="col-6">
					<input
						type="text"
						placeholder="Enter Todo Here"
						value={todoName}
						onChange={handleNameChange}
					/>
				</div>
				{/* Input field for selecting the due date */}
				<div className="col-4">
					<input
						type="date"
						value={dueDate}
						onChange={handleDateChange}
					/>
				</div>
				{/* Button to add the new todo item */}
				<div className="col-1">
					<button
						type="button"
						className="btn btn-success sub-button" // Bootstrap styling for a success (green) button
						onClick={handleAddButtonClicked} // Event handler for button click
					>
						<IoMdAddCircle />
						{/* Replace 'Add' button text with icon */}
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddTodo;
