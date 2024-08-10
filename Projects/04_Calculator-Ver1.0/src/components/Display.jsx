// Importing CSS module for styling the component
import styles from "./Display.module.css";

// Define the Display component
const Display = () => {
	// Render an input element of type text with a CSS class for styling
	return <input type="text" name="" className={styles.display} />;
};

// Export the Display component for use in other parts of the application
export default Display;
