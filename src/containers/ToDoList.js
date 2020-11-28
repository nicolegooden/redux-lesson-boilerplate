import React from 'react';
import { connect } from 'react-redux';
import TodoCard from '../components/TodoCard'
import { showAll, showActive, showCompleted } from '../actions/index'

const ToDoList = ({todos, showAll, showActive, showCompleted}) => {
  const allTodos = todos.map(todo => {
    return (
      <TodoCard 
        id={todo.id}
        todo={todo.todo}
        completed={todo.completed}
      />
    )
  })
  //how can I change what is being mapped with the onClick?
  return (
    <section>
      <button onClick={() => showAll()}>Show All</button>
      <button onClick={() => showActive()}>Show Active</button>
      <button onClick={() => showCompleted()}>Show Completed</button>
      {allTodos}
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch( showAll() ),
  showActive: () => dispatch( showActive() ),
  showCompleted: () => dispatch( showCompleted() )
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

