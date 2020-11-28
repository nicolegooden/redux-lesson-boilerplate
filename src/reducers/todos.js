export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    case 'SHOW_ALL':
      return state;
      //do I need this case here since it is 
      //the same as default?
    case 'SHOW_ACTIVE':
      return state.map(todo => {
        return !todo.completed;
      });
    case 'SHOW_COMPLETED':
      return state.map(todo => {
        return todo.completed;
      })
    default:
      return state;
  }
}