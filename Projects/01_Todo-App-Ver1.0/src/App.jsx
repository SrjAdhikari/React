import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import FirstTodoItem from "./components/FirstTodoItem";
import SecondTodoItem from "./components/SecondTodoItem";
import "./App.css";

function App() {
	return (
		<center className="todo-container">
			<AppName />
			<AddToDo />
			<div className="items-container">
				<FirstTodoItem />
				<SecondTodoItem />
			</div>
		</center>
	);
}

export default App;
