let nextTodoId = 1;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const editTodo = ({ id, text }) => ({
  type: "EDIT_TODO",
  text,
  id
});

export const deleteCompleted = () => ({
  type: "DELETE_COMPLETED"
});
