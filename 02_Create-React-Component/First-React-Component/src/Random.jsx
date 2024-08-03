// Define a functional component that generates and displays a random number
function CreateRandomNum() {
    
    // Generate a random integer between 1 and 100
    const randomNum = Math.floor(Math.random() * 100) + 1;

    // Render a paragraph displaying the generated random number
    return <p>Random number is : {randomNum}</p>;
}

// Export the CreateRandomNum component as the default export from this module
export default CreateRandomNum;