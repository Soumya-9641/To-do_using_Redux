import React ,{useState} from 'react'
import "./todo.css"
import {useSelector, useDispatch} from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "../actions/index"
import {AiFillDelete} from "react-icons/ai";
const Todo = () => {
    const [data, setData] = useState('')
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducer.list);
  return (
    <>
        <div className='container'>
                <div className='container_main'>
                    <h2>To-do List using redux</h2>
                    <h6>Write your daily to-do work ✍️</h6>
                </div>
                <div className='container_main2'>
                    <input className='container_input' placeholder='Write here' type="text" id='text' value={data} onChange={(e)=>setData(e.target.value)} />
                    <span onClick={()=>dispatch(addTodo(data),setData(''))} className='container_add'>+</span>
                </div>
                <div className='container_show1'>

                {
                    list.map((elem) => {
                        return(
                        <div className='container_show' key={elem.id}>
                        <h3 className='container_h3'>{elem.data}</h3>
                   <span onClick={()=>dispatch(deleteTodo(elem.id))} className='container_icon'> <AiFillDelete/></span>
                   </div>
                        )
                    })
                }

                    
                </div>
                <div>
                  <p onClick={()=>dispatch(removeTodo())} className='container_submit'>Remove All</p>
                </div>
        </div>  
    </>
  )
}

export default Todo