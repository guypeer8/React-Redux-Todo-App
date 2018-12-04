export const startEdit = ({ id, text }) => ({
  type: "START_EDIT",
  text,
  id
});

export const changeTodo = text => ({
  type: "CHANGE_TODO",
  text
});

export const clearTodo = () => ({
  type: "CLEAR_TODO_INPUT"
});
