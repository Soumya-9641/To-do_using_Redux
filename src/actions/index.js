

import axios from 'axios';

// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch({ type: 'FETCH_DATA_REQUEST' });

//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?userId=1');
//       dispatch({ type: 'FETCH_DATA_SUCCESS', payload:{uid:response.id, fetchdata:response.title} });
//     } catch (error) {
//       dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//     }
//   };
// };
export const addTodo=(data)=>{
    return {
        type: "ADD_TODO",
        payload : {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo=(id)=>{
    return {
        type: "DELETE_TODO",
        id
    }
}
export const removeTodo=()=>{
    return {
        type: "REMOVE_TODO"
    }
}

