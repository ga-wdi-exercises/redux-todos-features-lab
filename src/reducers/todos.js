const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    // case 'SHOW_SEARCH'
    //   return todos.filter(t => t.text.includes())
    default:
      return state
  }
}

export default todos
