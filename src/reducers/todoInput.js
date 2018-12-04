const initialState = {
  text: "",
  id: null
};

const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case "START_EDIT":
      return state.id === action.id
        ? state
        : { text: action.text, id: action.id };

    case "CHANGE_TODO":
      return { ...state, text: action.text };

    case "CLEAR_TODO_INPUT":
      return initialState;

    default:
      return state;
  }
};

export default addTodo;
