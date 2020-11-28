import React from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions/index';

const TodoCard = ({id, todo, completed, showCompleteToDo}) => {
  return (
    <article>
      <h1 onClick={() => showCompleteToDo(id, todo)}>{todo}</h1>
    </article>
  )
}


const mapDispatchToProps = dispatch => ({
  completeToDo: (id, todo) => dispatch( completeToDo(id, todo) )
})

export default connect(null, mapDispatchToProps)(TodoCard);