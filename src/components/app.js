import React, { Component } from 'react';
import TodoInput from './todo_input';
import TodoList from './todo_list';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-inverse bg-inverse">
          <h1>To-do</h1>
        </nav>
        <div className="col-md-6 col-md-offset-3">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
