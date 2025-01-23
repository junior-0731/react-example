import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {
    const {TaskDelete}= useContext(TaskContext)
    return (
    <div className='bg-gray-800 text-white p-4 rounded-md text-center'>
        <h1 className='font-bold text-blue-500 text-xl capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-500 px-2 py-1 rounded-md mt-3 hover:bg-red-300 cursor-pointer ' onClick={()=>{
            TaskDelete(task.id)
        }}>delete</button>
    </div>
    )
}

export default TaskCard