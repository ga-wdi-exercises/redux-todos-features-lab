import React from 'react'
import PropTypes from 'prop-types'

<<<<<<< HEAD
const Todo = ({ onClick, completed, text }) => (
  <li>
    <span>
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}

    {text}
  </span>
    <button >X</button>
=======
const Todo = (props) => (
  <li>
    <span
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none'
      }}
    >
      {props.text}
    </span>
    <button onClick={props.onRemove}>X</button>
>>>>>>> fbfde0cadbfe119f5e983b5006237476871e54d4
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
