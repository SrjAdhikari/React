import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

// Define the App component
function App() {
	// State to store the current calculated value or expression
	const [calculatedValue, setCalculatedValue] = useState("");

	// Event handler for button clicks
	const onButtonClick = (buttonText) => {
		// Clear the calculated value if the "C" button is clicked
		if (buttonText === "C") {
			setCalculatedValue("");
		}
		// Evaluate the expression if the "=" button is clicked
		else if (buttonText === "=") {
			// Use eval to compute the result of the expression (note: eval can be dangerous, consider alternatives for security)
			const result = eval(calculatedValue);
			setCalculatedValue(result);
		}
		// Append the clicked button's text to the current calculated value
		else {
			const newCalculatedValue = calculatedValue + buttonText;
			setCalculatedValue(newCalculatedValue);
		}
	};

	return (
		<div className={styles.calculator}>
			{/* Pass the current calculated value to the Display component */}
			<Display displayValue={calculatedValue} />
			{/* Pass the onButtonClick handler to the ButtonContainer component */}
			<ButtonContainer onButtonClick={onButtonClick} />
		</div>
	);
}

// Export the App component for use in other parts of the application
export default App;
