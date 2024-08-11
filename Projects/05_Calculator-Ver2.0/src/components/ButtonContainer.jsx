// Importing CSS module for styling the ButtonContainer component
import styles from "./ButtonContainer.module.css";

// Define the ButtonContainer component
const ButtonContainer = ({ onButtonClick }) => {
	// Array containing names for each button
	const buttonNames = [
		"C",
		"1",
		"2",
		"+",
		"3",
		"4",
		"-",
		"5",
		"6",
		"*",
		"7",
		"8",
		"/",
		"=",
		"9",
		"0",
		".",
	];

	return (
		// Container for the buttons, styled using CSS module
		<div className={styles.buttonsContainer}>
			{/* Map through buttonNames array to create a button for each item */}
			{buttonNames.map((buttonItem) => (
				<button
					// Unique key prop for each button to help React identify which items have changed
					key={buttonItem}
					// Apply CSS module styling to each button
					className={styles.button}
					// Attach an onClick event handler that calls onButtonClick with the current button item
					onClick={() => onButtonClick(buttonItem)}
				>
					{/* Display the text of the button */}
					{buttonItem}
				</button>
			))}
		</div>
	);
};

// Export the ButtonContainer component for use in other parts of the application
export default ButtonContainer;
