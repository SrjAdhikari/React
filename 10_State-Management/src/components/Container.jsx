// Importing CSS module for styling the Container component
import styles from "./Container.module.css";

// Define the Container component that accepts children as props
const Container = ({ children }) => {
	return (
		// Div element styled using CSS module, containing the child elements
		<div className={styles.container}>{children}</div>
	);
};

// Export the Container component for use in other parts of the application
export default Container;
