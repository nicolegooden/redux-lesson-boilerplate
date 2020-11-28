import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';
import { showAll, showActive, showCompleted } from '../actions/index'
import { connect } from 'react-redux';

class App extends Component {
  //do I need to destructure props for 
  //showAll, showActive, and showComplete here?
  
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <button onClick={() => showAll()}>Show All</button>
        <button onClick={() => showActive()}>Show Active</button>
        <button onClick={() => showCompleted()}>Show Completed</button>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch( showAll() ),
  showActive: () => dispatch( showActive() ),
  showCompleted: () => dispatch( showCompleted() )
})

export default connect(null, mapDispatchToProps)(App);
