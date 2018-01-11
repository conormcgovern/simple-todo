import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, uncompleteTodo } from '../actions/index';

class CompletedTodos extends Component {

 constructor(props) {
   super(props);

   this.state = { show: '' };

   this.renderTodo = this.renderTodo.bind(this);
 }

 componentWillReceiveProps(props) {
   this.setState({ show: props.show });
 }

  renderTodo(todo) {
    return (
      <li key={todo.key} className="list-group-item completed-item">
        <input type="checkbox" onClick={(event) => {
          this.props.addTodo(todo.item);
          this.props.uncompleteTodo(todo);
        }
        }></input>{todo.item}
      </li>
    );
  }

  render() {
    console.log(this.state);
    if(this.state.show) {
      return (
        <ul className="completed-list list-group">
          {this.props.completed.map(this.renderTodo)}
        </ul>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return { completed: state.completed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, uncompleteTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTodos);
