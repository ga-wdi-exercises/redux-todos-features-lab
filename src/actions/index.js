let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter, query) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter: filter,
  query: query
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
