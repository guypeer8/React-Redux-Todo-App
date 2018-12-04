import React from "react";
import FilterLink from "../containers/FilterLink";
import PropTypes from "prop-types";
import { deleteCompleted } from "../actions";
import { connect } from "react-redux";

const Footer = ({ active, completed, deleteCompleted }) => (
  <div>
    <div>
      <span>Show: </span>
        {['all', 'active', 'completed'].map(filter =>
            <FilterLink key={filter} filter={filter}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterLink>
        )}
    </div>
    <div>
      <span>Actions: </span>
      <button
          disabled={completed === 0}
          onClick={deleteCompleted}
      >
        Delete Completed
      </button>
    </div>
    <div>
      <div>Active Todos: {active}</div>
      <div>Completed Todos: {completed}</div>
    </div>
  </div>
);

Footer.propTypes = {
    active: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired,
    deleteCompleted: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    active: state.todos.filter(({ completed }) => !completed).length,
    completed: state.todos.filter(({ completed }) => completed).length
  }),
  { deleteCompleted }
)(Footer);
