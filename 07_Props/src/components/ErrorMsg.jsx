const ErrorMsg = (props) => {
    // Destructure the items prop from props
    const { items } = props;

    return (
        <>
            {/* Conditionally render the error message if the items array is empty */}
            {items.length === 0 && <h4>No food items available.</h4>}
        </>
    );
};

export default ErrorMsg;