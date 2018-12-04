import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTodo, startEdit } from "../actions";

const Todo = ({ id, completed, text, idx, toggleTodo, startEdit }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    <span>{idx}.</span>
    <input
      type="checkbox"
      onChange={toggleTodo}
      checked={completed}
    />
    <span onClick={startEdit}>
        {text}
    </span>
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch, { id, text, completed }) => ({
    toggleTodo() {
        dispatch(toggleTodo(id));
    },
    startEdit() {
        !completed && dispatch(startEdit({ id , text }));
    },
});

export default connect(
    null,
    mapDispatchToProps
)(Todo);
