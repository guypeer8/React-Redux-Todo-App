const createTodo = ({ id, text }) => ({ id, text, completed: false });

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, createTodo(action)];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "EDIT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case "DELETE_COMPLETED":
      return state.filter(({ completed }) => !completed);

    default:
      return state;
  }
};

export default todos;
