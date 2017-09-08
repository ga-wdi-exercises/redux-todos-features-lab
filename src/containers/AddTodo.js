import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = (props) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
<<<<<<< HEAD
      <button type='submit'>
=======
        <button type='submit'>
>>>>>>> fbfde0cadbfe119f5e983b5006237476871e54d4
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
