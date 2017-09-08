import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterField from '../containers/FilterField'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <FilterField />
    <Footer />
  </div>
)

export default App
