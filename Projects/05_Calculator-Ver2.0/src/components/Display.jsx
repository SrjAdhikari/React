// Importing CSS module for styling the component
import styles from "./Display.module.css";

// Define the Display component
const Display = ({ displayValue }) => {
	return (
		<input
			type="text"
			name=""
			className={styles.display}
			value={displayValue}
			readOnly
		/>
	);
};

// Export the Display component for use in other parts of the application
export default Display;
