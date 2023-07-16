import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";




const init={
    todos:[
        {
            id:Math.random(),task:"Wake up",isDone:true
        },
        {
            id:Math.random(),task:"Go Out",isDone:false
        }
    ]
}

export const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            
           return {
            ...state,todos:state.todos.filter(el=>el.id!==payload)
           }
           case COMPLETE:
            return {
                ...state,todos:state.todos.map(el=>el.id=payload?{...el,isDone:!el.isDone}:el)
            }
            case ADD:
                return {
                    ...state,todos:[payload,...state.todos]
                }
            case EDIT:
                return {
                    ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)
                }
        default:
            return state
    }
}