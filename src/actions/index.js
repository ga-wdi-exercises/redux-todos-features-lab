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

<<<<<<< HEAD


=======
>>>>>>> fbfde0cadbfe119f5e983b5006237476871e54d4
export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})
<<<<<<< HEAD


console.log(removeTodo(1))
=======
>>>>>>> fbfde0cadbfe119f5e983b5006237476871e54d4
