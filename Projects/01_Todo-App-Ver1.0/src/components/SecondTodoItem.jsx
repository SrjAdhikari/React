function SecondTodoItem() {
	let todoItem = "Learn Web Development";
	let dueDate = "04/08/2024";

	return (
		<div class="container">
			<div class="row sub-row">
				<div class="col-6">{todoItem}</div>
				<div class="col-4">{dueDate}</div>
				<div class="col-2">
					<button type="button" class="btn btn-danger sub-button">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default SecondTodoItem;
