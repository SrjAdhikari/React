// Importing CSS module for styling the App component
import styles from "./App.module.css";
// Importing the Display component
import Display from "./components/Display";
// Importing the ButtonContainer component
import ButtonContainer from "./components/ButtonContainer";

// Define the App component
function App() {
	return (
		// Container for the calculator, styled using CSS module
		<div className={styles.calculator}>
			{/* Render the Display component */}
			<Display />
			{/* Render the ButtonContainer component */}
			<ButtonContainer />
		</div>
	);
}

// Export the App component for use in other parts of the application
export default App;
