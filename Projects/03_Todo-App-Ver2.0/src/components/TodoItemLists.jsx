import TodoItem from "./TodoItem";

const TodoItemLists = ({ todoItems }) => {
    return (
        <div className="items-container">
            {todoItems.map(item => <TodoItem todoItem={item.name} dueDate={item.dueDate} />)}
		</div>
    );
};

export default TodoItemLists;