import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {useState,useEffect} from 'react'

function App() {



  

  return (
    <div className=' bg-zinc-900 h-screen'>
      <div className='container mx-auto'>
        <TaskForm/>
        <TaskList/>
      </div>
      
    </div>
  )
}

export default App