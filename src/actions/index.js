export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const completeToDo = (id, todo) => ({
  type: 'COMPLETE_TODO',
  id,
  todo
});