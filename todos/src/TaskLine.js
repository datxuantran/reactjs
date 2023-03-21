import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const TaskLine = ({task, handleCheckbox}) =>{
    return (
        <li key={task.id}>
            <input type='checkbox' checked={task.completed} onClick={()=>handleCheckbox(task.id)}/>
            <emp>{task.text}</emp>
            <FaTrashAlt />
        </li>
    )
}

export default TaskLine