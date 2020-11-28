import React from 'react';

const TodoCard = ({id, todo, completed}) => {
  return (
    <article>
      <h1>{todo}</h1>
      <h2>{completed || 'not yet completed'}</h2>
    </article>
  )
}

export default TodoCard;