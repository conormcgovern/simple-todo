import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo } from '../actions/index';

class TodoList extends Component {

 constructor(props) {
   super(props);

   this.renderTodo = this.renderTodo.bind(this);
 }

  renderTodo(todo) {
    return (
      <li key={todo.key} className="list-group-item">
        <input type="checkbox" onClick={(event) => this.props.deleteTodo(todo)}></input>{todo.item}
      </li>
    );
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map(this.renderTodo)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
