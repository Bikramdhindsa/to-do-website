import { useState } from 'react'
import './css/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';
let count = 0 ;

const ToDo = () => {
    const [todo, setTodo] = useState([]);
    const inputref = useRef(null);

    const add =()=>{
        setTodo([...todo,{no: count++, text: inputref.current.value, display:''}])
        inputref.current.value = "";

    }
    useEffect (()=>{
        console.log(todo);
    },[todo])
  return (
    <div className='todo'>
        <div className='todo-header'>To-Do List</div>
        <div className='todo-add'>
            <input type='text' placeholder='Add your task' className='todo-input' ref={inputref}></input>
            <div onClick={()=>{add()}}  className="todo-add-btn">ADD</div>
        </div>
        <div   className="todo-list">
            {todo.map((item,index)=>{
                return<TodoItems key={index} no={item.no} display={item.display} text={item.text} todos={todo} fn={setTodo}/>
            })}
        </div>
    </div>
  )
}

export default ToDo