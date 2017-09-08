let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
  // query
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})

console.log(removeTodo(1))
