import {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    
    
    function createTask (title,description){
    const task ={
        id: tasks.length +1,
        title: title,
        description: description
    }
    setTasks([...tasks, task])
    }

    function TaskDelete(idTask) {
    setTasks(tasks.filter(task=> task.id !== idTask))
    console.log(idTask)
    }
    useEffect(()=>{
        setTasks(data)
    },[])
    
    return (
        <>
            <TaskContext.Provider value={{
                tasks,
                TaskDelete,
                createTask
                

            }}>
                {props.children}
            </TaskContext.Provider>

        </>
    )
}

export default TaskContext