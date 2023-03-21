import React from 'react'
import TaskLine from './TaskLine'

const TaskList = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            text: "Task 1",
            completed: false
        },
        {
            id: 2,
            text: "Task 2",
            completed: true
        },
        {
            id: 3,
            text: "Task 3",
            completed: false
        }
    ])

    const handleCheckbox = (id) => {
        const updatedTaskList = taskList.map((task) => {
            if(task.id === id){
                task.completed = !task.completed
            }
            return task
        })

        setTaskList(updatedTaskList)
    }

    return (
        <ul>
            {taskList.map((task)=>{
                return <TaskLine task={task} handleCheckbox={handleCheckbox}/>
            })}
        </ul>
    )
}

export default TaskList