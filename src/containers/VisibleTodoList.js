import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state, { filter }) => ({
    todos: getVisibleTodos(state.todos, filter)
});

export default connect(mapStateToProps)(TodoList);
