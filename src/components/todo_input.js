import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });

  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="todo-input">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            type="text"
            placeholder="Add a to-do..."
            value = {this.state.term}
            className="form-control input-lg"
            onChange={this.onInputChange}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary btn-lg">Add</button>
            </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoInput);
