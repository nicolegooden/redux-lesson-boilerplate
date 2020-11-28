import React from 'react';
import { connect } from 'react-redux';
import TodoCard from '../components/TodoCard'

const ToDoList = ({todos, showCompleteToDo}) => {
  const allTodos = todos.map(todo => {
    return (
      <TodoCard 
        id={todo.id}
        todo={todo.todo}
        completed={todo.completed}
        showCompleteToDo={showCompleteToDo}
      />
    )
  })
  return (
    <section>{allTodos}</section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);