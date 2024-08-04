// Define a functional component named App
function App() {

    // Initialize an array of programming languages
    let language = ['C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'C#'];

    //* 1. ************** If-else condition **************
    // if(language.length === 0) {
    //     return <h4>No programming languages available.</h4>
    // }
    // else {
    //     return (
    //         <>
    //             <h1>Map Method In React</h1>
    //             <br />
    //             <h3>Programming Language</h3>

    //             {/* Unordered list of programming languages */}
    //             <ul className="list-group">
    //                 {/* Use the map method to iterate over the 'language' array */}
    //                 {/* For each language, create a list item */}
    //                 {language.map((lang) => (
                        // 'key' is a unique identifier for each list item
    //                     <li key={lang} className="list-group-item">
    //                         {lang}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </>
    //     );
    // }

    //* 2. ************** Ternary Operator **************
    // return (
    //  <>
    //       <h1>Map Method In React</h1>
    //       <br />
    //       <h3>Programming Language</h3>

    //      {/* Conditional rendering based on whether the 'language' array has items */}
    //      {language.length > 0 ? (
                // Render this block if the array has items
    //          <ul className="list-group">
    //              {language.map((lang) => (
                        // Each list item needs a unique 'key' prop for React's reconciliation
                        // Display each language as a list item
    //                  <li key={lang} className="list-group-item">{lang}</li>
    //              ))}
    //          </ul>
    //      ) : (
                // Render this block if the array is empty
    //          <p>No programming languages available.</p>
    //      )}
    //  </>
    // );

    //* 3. ************** Logical Operator **************
    return (
        <>
            <h3>Programming Language</h3>
            <br />
    
            {/* Conditionally render a message if the array is empty */}
            {language.length === 0 && <h4>No programming languages available.</h4>}
    
            {/* Conditionally render the list only if the array has items */}
            {/* {language.length === 0 && <p>No programming languages available.</p>} */}
            {language.length > 0 && (
                <ul className="list-group">
                    {/* Use the map method to iterate over the 'language' array */}
                    {/* For each language, create a list item */}
                    {language.map((lang) => (
                        // 'key' is a unique identifier for each list item
                        <li key={lang} className="list-group-item">
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

// Export the App component as the default export
export default App;