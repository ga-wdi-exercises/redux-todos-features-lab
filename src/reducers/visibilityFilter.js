// const initialState = { filter: 'SHOW_ALL' }
// const visibilityFilter = (state = initialState, action) => {
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
      // query: action.query
    default:
      return state
  }
}

export default visibilityFilter
