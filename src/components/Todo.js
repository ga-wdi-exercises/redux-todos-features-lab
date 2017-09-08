import React from 'react'
import PropTypes from 'prop-types'

// the following is an example of object destructuring, could have Todo = (props) and put props before the props used
const Todo = ({ onClick, onRemove, completed, text }) => (
  <li>
    <span onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
    </span>

    <button onClick={onRemove} >X</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
