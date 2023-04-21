import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import Tasks from "./Tasks"
import { viewTodo } from '../features/task/taskSlice'
import { useDispatch, useSelector } from 'react-redux'
import TodoService from '../features/task/taskService'

function Home() {
  const tasks = useSelector(state => state.todos.todos)
  
  const username = JSON.parse(localStorage.getItem("user"));
  console.log(username)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(viewTodo(username[0].id))
  })

  console.log("task: ",tasks)

  return (
    <>
      <section className="heading">
        <h1>All Tasks</h1>
      </section>

        <Link to={{
          pathname:'/add-task',
          
            }} className='btn btn-reverse btn-block'>
        
            <FaQuestionCircle /> Add New Task
        </Link>

      <Tasks tasks={tasks} />
    </>
  )
}

export default Home