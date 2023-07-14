import React ,{useState,useEffect} from 'react'
import "./todo.css"

import {useSelector, useDispatch} from "react-redux";
import {addTodo,deleteTodo,removeTodo,fetchData} from "../actions/index"
import {AiFillDelete} from "react-icons/ai";
//import { connect } from 'react-redux';
const Todo = () => {
 const [todo, setTodo] = useState([])
 const [adddata, setData] = useState('')
 const list = useSelector((state)=>state.todoReducer.list);
 const dispatch = useDispatch();
 // const { list } = useSelector((state) => state);
// const { list } = useSelector((state) => state.todoReducer.list);
 useEffect(() => {
  fetchData();
 }, []);


//   const fetchData = () => {
//   return async (dispatch) => {
//     dispatch({ type: 'FETCH_DATA_REQUEST' });

//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?userId=1');
//       dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
//     } catch (error) {
//       dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//     }
//   };
// };

 const fetchData = async () => {
  try {
    const userIds = Array.from({ length: 10 }, (_, index) => index + 1);
    const promises = userIds.map((userId) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/?id=${userId}`)
        .then((res) => res.json())
    );
    const data = await Promise.all(promises);
    setTodo(data);
    //console.log(todo)
  } catch (error) {
    console.log(error);
  }
  
    
 };
 const handleDelete=(id)=>{
  // const updatedTodoList = todo.filter((todo) => todo.id !== id);
  // setTodo(updatedTodoList);
  console.log(id)
  const updatedTodoList = todo.map((todos) => todos.filter((todo) => todo.id !== id));
  setTodo(updatedTodoList);
 }
   
   
  return (
    <>
        <div className='container'>
                <div className='container_main'>
                    <h2>To-do List using redux</h2>
                    <h6>Write your daily to-do work ✍️</h6>
                </div>
                <div className='container_main2'>
                    <input className='container_input' placeholder='Write here' type="text" id='text' value={adddata} onChange={(e)=>setData(e.target.value)} />
                    <span onClick={()=>dispatch(addTodo(adddata),setData(''))} className='container_add'>+</span>
                </div>
                <div className='container_show1'>
                {/* {
                  todo.filter((item, i) => i < 10).map((elem) => {
                        return(
                        <div className='container_show' key={elem.id}>
                        <h3 className='container_h3'>{elem.title}</h3>
                   <span onClick={()=>handleDelete(elem.id)} className='container_icon'> <AiFillDelete/></span>
                   </div>
                        )
                    })
                } */}
                                    {todo.map((todos, index) => (
                      <div key={index}>
                        {todos.map((todo) => {
                        return(
                        <div className='container_show' key={todo.id}>
                        <h3 className='container_h3'>{todo.title}</h3>
                   <span onClick={()=>handleDelete(todo.id)} className='container_icon'> <AiFillDelete/></span>
                   </div>
                        )
                        })}
                      </div>
                    ))}
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
                        {/* {list.map((item) => (
                <div key={item.id}>{item.data}</div>
              ))} */}

                    
                </div>
                {/* <div>
                  <p onClick={()=>dispatch(removeTodo())} className='container_submit'>Remove All</p>
                </div> */}
        </div>  
    </>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     data: state.data,
//     loading: state.loading,
//     error: state.error,
//   };
// };

// const mapDispatchToProps = {
//   fetchData,
// };
export default Todo;