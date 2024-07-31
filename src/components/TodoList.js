import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({task, toggleComplete, deleteTodo, handleEditIconClick}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ''}`}>{task.task}</p>
        <div className='todo-action'>
        <p onClick={() => handleEditIconClick(task.id)}>Edit</p>
        <p onClick={() => deleteTodo(task.id)}>Delete</p>
        </div>
    </div>
  )
}

export default TodoList
