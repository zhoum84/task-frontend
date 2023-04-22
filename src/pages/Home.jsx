import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import Tasks from "./Tasks"
import { viewTodo } from '../features/task/taskSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const tasks = useSelector(state => state.todos.todos)
  
  const username = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(viewTodo(username.length? username[0].id: username.id))
  // eslint-disable-next-line
  },[dispatch])

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