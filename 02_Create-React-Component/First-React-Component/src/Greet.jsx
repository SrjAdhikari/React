// Define a functional component that generates a greeting message
function Greeting() {

    // Define local variables for first and last names
    let firstName = "Suraj";
    let lastName = "Adhikari";

    // Define a function to concatenate firstName and lastName into a full name
    let fullName = () => {
        return `${firstName} ${lastName}`; 
    }

    // Render a paragraph with a greeting message that includes the full name
    return <p>Hello, I am {fullName()}. This is a 'Greet' component</p>
}

// Export the Greeting component as the default export from this module
export default Greeting;