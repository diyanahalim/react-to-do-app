import React, {useState, useEffect, useCallback} from 'react'
  

const EditTodoForm = ({task, editTodo, inputRef}) => {
    console.log("EditTodoForm rendered");
    
    // Define focusInput function with useCallback
    const focusInput = useCallback (() => {
      if(inputRef && inputRef.current){
          inputRef.current.focus();
      }
  },[inputRef]);

    useEffect(() => {
        focusInput(); 
        console.log("focusInput called within useEffect");
      }, [focusInput]); // Include focusInput in the dependency array
      
    const [value, setValue] = useState(task.task) 

    const handleSubmit = e => {
      e.preventDefault();
      editTodo(value, task.id);
    }

  return (
    <form className='Todo' onSubmit={handleSubmit}>
        <input type='text' className='edit-todo-input' placeholder="Change your plan" value={value} 
        onChange={(e) => setValue(e.target.value)} ref={inputRef}></input>
        {/* <p>{task.task}</p> */}
        <div>
        <button type='submit' className='edit-todo-btn'>Save</button>
        </div>
    </form>
  )
}

export default EditTodoForm
