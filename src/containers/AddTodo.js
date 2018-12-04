import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo, editTodo, changeTodo, clearTodo } from "../actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const text = e.target.value;
    this.props.changeTodo(text);
  }

  onSubmit(e) {
    e.preventDefault();
    let { id, text } = this.props.todoInput;
    if (!text) return;
    text = text.trim();

    if (!id) this.props.addTodo(text);
    else this.props.editTodo({ id, text });

    this.props.clearTodo();
  }

  render() {
    const { id, text } = this.props.todoInput;
    const todoAction = id ? 'Edit' : 'Add';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={text} onChange={this.onChange} />
          <button type="submit">
              {todoAction} Todo
          </button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
    todoInput: PropTypes.shape({
        id: PropTypes.any,
        text: PropTypes.string.isRequired,
    }).isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired,
    clearTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    todoInput: state.todoInput
});

export default connect(
  mapStateToProps,
  { addTodo, editTodo, changeTodo, clearTodo }
)(AddTodo);
