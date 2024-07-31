import React, {useState} from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import add_icon from '../assets/add-icon.png';

const TodoForm = ({addTodo}) => {
  
  
  // const spanRef = useRef(null);
  // spanRef = React.createRef();
    const [value, setValue] = useState("") //empty string initially

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);

        setValue("") // after submitting the form, the value inside input form disappears
    }

    // const handleBlur = () => {
    //   spanRef.current.classList.add('cursor')
    // };
    // const handleFocus = () => {
    //   spanRef.current.classList.remove('cursor')
    // }
    // cursorRef = createRef();
    // const handleFocus = () => {
    //   this.cursorRef.current.classList.remove("cursor");
    // };
  
    // const handleBlur = () => {
    //   this.cursorRef.current.classList.add("cursor");
    // };
  //   $('todo-input').on('blur', function(){
  //     $(this).prev('span').addClass('cursor');
  //  }).on('focus', function(){
  //    $(this).prev('span').removeClass('cursor');
  //  });

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* <span className="cursor" ref={spanRef}></span> */}
        <input type='text' className='todo-input' placeholder='What are you up to today?' value={value} 
        onChange={(e) => setValue(e.target.value)} autoFocus/> 
        {/* <FontAwesomeIcon icon={faPlus} /> */}
        <button type="submit" className="todo-btn"><img src={add_icon} className="skill-logo" alt="Logo" /></button>
        {/* <img src={add_icon} className="skill-logo" alt="Logo" /> */}
        {/* <button type='submit' className='todo-btn'>+</button> */}
    </form>
  )
}

export default TodoForm
