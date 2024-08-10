// Importing CSS module for styling the ButtonContainer component
import styles from "./ButtonContainer.module.css";

// Define the ButtonContainer component
const ButtonContainer = () => {
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
				// Button element with styling and text from buttonNames array
				<button key={buttonItem} className={styles.button}>
					{buttonItem}
				</button>
			))}
		</div>
	);
};

// Export the ButtonContainer component for use in other parts of the application
export default ButtonContainer;
