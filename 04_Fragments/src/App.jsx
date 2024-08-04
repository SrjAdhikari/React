// import React from "react";

// Define a functional component named App
function App() {
    return (
        // Use React Fragments to group multiple elements without adding extra nodes to the DOM
        // You can use either <> or <React.Fragment> to denote a fragment
        <>
            <h1>Learning Fragments In React</h1>
            <br />
            <h3>Healthy Food : </h3>
            <ul className="list-group">
                <li className="list-group-item">Fruits</li>
                <li className="list-group-item">Salad</li>
                <li className="list-group-item">Milk</li>
                <li className="list-group-item">Curd</li>
                <li className="list-group-item">Green Vegetables</li>
            </ul>
        </> 
        // End of the fragment
        // You can also use </React.Fragment> instead of </>
    );
}

// Export the App component as the default export
export default App;