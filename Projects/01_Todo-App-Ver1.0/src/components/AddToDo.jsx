function AddTodo() {
	return (
		<div class="container">
			<div class="row sub-row">
				<div class="col-6">
					<input type="text" placeholder="Enter Todo Here" />
				</div>
				<div class="col-4">
					<input type="date" />
				</div>
				<div class="col-1">
					<button type="button" class="btn btn-success sub-button">
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddTodo;
