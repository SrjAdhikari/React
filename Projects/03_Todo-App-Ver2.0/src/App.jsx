import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItemLists from "./components/TodoItemLists";
import "./App.css";

function App() {
	const todoItems = [
		{
			name: "Learn Recursion",
			dueDate: "10/08/2024"
		},
		{
			name: "Learn React",
			dueDate: "11/08/2024"
		},
		{
			name: "Make Project",
			dueDate: "12/08/2024"
		},
	];

	return (
		<center className="todo-container">
			<AppName />
			<AddToDo />
			<TodoItemLists todoItems={todoItems} />
		</center>
	);
}

export default App;