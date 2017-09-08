<<<<<<< HEAD
const initialState = {filter: 'SHOW_ALL'}
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return{
      filter: action.filter,
      query: action.query
    }
=======
const initialState = { filter: 'SHOW_ALL' }
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        filter: action.filter,
        query: action.query
      }
>>>>>>> fbfde0cadbfe119f5e983b5006237476871e54d4
    default:
      return state
  }
}

export default visibilityFilter
