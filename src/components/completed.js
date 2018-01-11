import React, { Component } from 'react';
import CompletedList from './completed_list';

export default class CompletedTodos extends Component {

 constructor(props) {
   super(props);

   this.toggleShowCompletedButton = this.toggleShowCompletedButton.bind(this);
   this.state = { showCompletedTodos: false};
 }

 toggleShowCompletedButton() {

   this.setState({ showCompletedTodos: !this.state.showCompletedTodos });
 }

  render() {
    let show = this.state.showCompletedTodos;
    console.log(show);
    return (
      <div>
        <label
          type="button"
          onClick = { this.toggleShowCompletedButton }
          className="show-completed-btn btn">SHOW COMPLETED TODOS
        </label>
        <CompletedList show={ show } />
      </div>
    );
  }

}
