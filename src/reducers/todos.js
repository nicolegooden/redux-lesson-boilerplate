export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
    case 'COMPLETE_TODO':
      return [...state, {id: action.id, todo: action.todo, completed: true}];
    default:
      return state;
  }
}