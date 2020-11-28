import React from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions/index';

const TodoCard = ({id, todo, completed, completeToDo}) => {
  return (
    <article>
      <h1 
        onClick={() => completeToDo(id)} 
        className={completed ? 'completed' : 'not-completed'}>
        {todo}
      </h1>
    </article>
  )
}


const mapDispatchToProps = dispatch => ({
  completeToDo: id => dispatch( completeToDo(id) )
})

export default connect(null, mapDispatchToProps)(TodoCard);