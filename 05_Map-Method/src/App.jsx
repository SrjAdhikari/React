// Define a functional component named App
function App() {

    // Initialize an array of programming languages
    let language = ['C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'C#'];

    return (
        <>
            <h1>Map Method In React</h1>
            <br />
            <h3>Programming Language</h3>

            {/* Unordered list of programming languages */}
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
        </>
    );
}

// Export the App component as the default export
export default App;