import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';

class App extends Component {

  showCompleteToDo = (id, todo) => {
    //map state to props at bottom of this file
    //FIND the todo that was clicked on by user (of all todos)
    //trigger the completeToDo action
    //add the class "completed" to that todo's JSX in TodoCard
  }

  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList showCompleteToDo={this.showCompleteToDo}/>
      </div>
    );
  }
}

export default App;
