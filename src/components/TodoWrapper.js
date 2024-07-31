import React, {useState, useRef} from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import EditTodoForm from './EditTodoForm';
// import ReactCSSTransitionGroup from 'react-transition-group'; ES6
uuidv4(); // call uuidv4, initialise it 

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null);
    // var ReactCSSTransitionGroup = require('react-transition-group'); ES5 with npm

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, complete: false, isEditing: false}]) // we need to make a copy of the current todos which are the current states
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    // setTimeout( function() { deleteTodo(); }, 1000);

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // setTimeout(deleteTodo, 1000);


    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const handleEditIconClick = id => {
        editTodo(id);

    }

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done<span className="cursor"></span></h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} inputRef={inputRef}/>
            ) : (
            <TodoList task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} handleEditIconClick={handleEditIconClick} />
            )     
        ))}
    </div>
  )
}

export default TodoWrapper
