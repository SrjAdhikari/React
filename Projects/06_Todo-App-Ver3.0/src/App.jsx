import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItemLists from "./components/TodoItemLists";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

// Define the App component
function App() {
	// State to keep track of the list of todo items
	const [todoItems, setTodoItems] = useState([]);

	// Event handler to add a new todo item
	const handleAddNewItem = (itemName, itemDueDate) => {
		// Create a new array with the current todo items and the new item
		const newTodoItems = [
			...todoItems,
			{ name: itemName, dueDate: itemDueDate },
		];
		// Update the state with the new array of todo items
		setTodoItems(newTodoItems);
	};

	// Event handler to delete a todo item by its name
	const handleDeleteButton = (todoItemName) => {
		// Filter out the item with the specified name from the todo items list
		const newTodoItems = todoItems.filter(
			(item) => item.name !== todoItemName
		);
		// Update the state with the remaining to-do items
		setTodoItems(newTodoItems);
	};

	return (
		// Center the content and apply styling for the todo container
		<center className="todo-container">
			{/* Component to display the application name or title */}
			<AppName />
			{/* Component to add new todo items, passing the handler function as a prop */}
			<AddToDo addnewItem={handleAddNewItem} />
			{/* Conditionally render a welcome message if there are no todo items */}
			{todoItems.length === 0 && <WelcomeMsg />}
			{/* Component to display the list of todo items and handle item deletions */}
			<TodoItemLists
				todoItems={todoItems}
				onDeleteClick={handleDeleteButton}
			/>
		</center>
	);
}

export default App;
