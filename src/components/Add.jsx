import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleAdd } from '../redux/actions';

const Add = () => {
    const [newTaskaction, setNewTaskaction] = useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newItem={
            id:Math.random(),task:newTaskaction,isDone:false
        }
        dispatch(handleAdd(newItem))
        setNewTaskaction("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" value={newTaskaction} onChange={e=>setNewTaskaction(e.target.value)} />
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default Add