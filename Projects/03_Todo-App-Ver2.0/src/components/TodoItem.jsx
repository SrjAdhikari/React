function TodoItem({todoItem, dueDate}) {
	// let todoItem = "Learn DSA";
	// let dueDate = "03/08/2024";

	return (
		<div className="container">
			<div className="row sub-row">
				<div className="col-6">{todoItem}</div>
				<div className="col-4">{dueDate}</div>
				<div className="col-2">
					<button type="button" className="btn btn-danger sub-button">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;