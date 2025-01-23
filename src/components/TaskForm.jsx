import {useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskForm() {
    const [title, setTitle] = useState("");
    const { createTask }= useContext(TaskContext)

    const [description, setDescription]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        createTask(title,description)
        setDescription("")
        setTitle("")
    }

    return (
    <form className='py-4' onSubmit={handleSubmit} >
        <input className='bg-neutral-600 rounded-md p-1 text-green-200 mr-3' onChange={(e)=>{
            setTitle(e.target.value)
        }} type="text" placeholder="Escribe tu tarea" 
        value={title}
        autoFocus/>

        <input className='bg-neutral-600 rounded-md p-1 text-green-200' onChange={(e)=>{
            setDescription(e.target.value)
        }} type="text" placeholder='Escribe la descripción' 
        value={description}
        />
        <button className='bg-green-700 ml-4 p-1.5 rounded-md text-green-950 font-bold hover:bg-green-300 cursor-pointer'>guardar</button>
    </form>
    );
}
export default TaskForm;
