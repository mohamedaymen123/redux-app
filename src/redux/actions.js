import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes"


export const handleDelete=(ID)=>{
    return {
        type:DELETE,
        payload:ID,
    }
}

export const handleComplete=(THEID)=>{
    return {
        type:COMPLETE,
        payload:THEID
    }
}

export const handleAdd=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
    }
}

export const handleEdit=(editedTask)=>{
    return {
        type:EDIT,
        payload:editedTask
    }
}