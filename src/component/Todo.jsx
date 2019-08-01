import React from 'react';
import PropTypes from 'prop-types'


const Todo = ({ text, completed, onClick }) => (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
)

Todo.prototype = {
    text: PropTypes.string.isRequired,
    complied: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Todo;