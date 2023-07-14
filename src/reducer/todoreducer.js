

const initialstate = {
    list:[]
}

const todoReducer=(state=initialstate,action)=>{
        switch(action.type){
            
            case 'FETCH_DATA_REQUEST':
                return { ...state };
              case 'FETCH_DATA_SUCCESS':
                const {uid,fetchdata} = action.payload;
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:uid,
                            data:fetchdata
                        }
                    ]

                }
              case 'FETCH_DATA_FAILURE':
                return { ...state };

            case "ADD_TODO" :
                const {id,data} = action.payload;
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:id,
                            data:data
                        }
                    ]

                }
                case "DELETE_TODO" :
                const newList = state.list.filter((elem)=>elem.id !== action.id)
                return {
                    ...state,
                    list:newList

                }


                case "REMOVE_TODO":
                    return {
                        ...state,
                        list:[]
                    }
              

            default: return state
        }
}

export default todoReducer;