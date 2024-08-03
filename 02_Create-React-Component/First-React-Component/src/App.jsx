import ClickButton from './ClickButton';    // Import the ClickButton component
import Greeting from './Greet';             // Import the Greeting component
import CreateRandomNum from './Random';     // Import the CreateRandomNum component

// Define the main App component
function App() {
  return (
    <div>
      <ClickButton />                       // Render the ClickButton component
      <Greeting />                          // Render the Greeting component
      <CreateRandomNum />                   // Render the CreateRandomNum component
      <CreateRandomNum />                   // Render the CreateRandomNum component again
      <CreateRandomNum />                   // Render the CreateRandomNum component again */
    </div>
  );
}

// Export the App component as the default export from this module
export default App;