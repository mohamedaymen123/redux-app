import React from 'react'
import { useDispatch } from 'react-redux'

import { handleComplete, handleDelete } from '../redux/actions'
import EditTasj from './EditTasj'

const TaskCard = ({item}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{item.task}</h1>
        <button  onClick={()=>dispatch(handleDelete(item.id))} >Delete</button>
        <button  onClick={()=>dispatch(handleComplete(item.id))}  >    {item.isDone?'Undo':'Complete'}</button>
        <EditTasj  item={item}/>
        <hr/>
    </div>
  )
}

export default TaskCard