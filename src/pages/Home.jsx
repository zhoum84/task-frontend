import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import Tasks from "./Tasks"

function Home() {

  const mockTasks = [
    {
      _id: 1,
      title: 'Walk the dog',
      description: "walk for a few hours",
      status: "Incomplete",
      deadline: "4/19"
    },
    {
      _id: 2,
      title: 'Cook lunch',
      description: "Make sure it is edible",
      status: "In-Progress",
      deadline: "4/20"
    },
    {
      _id: 2,
      title: 'Do the laundry',
      description: "The laundry machine is broken",
      status: "Complete",
      deadline: "4/18"
    },]

  // Need to get this from backend. Might need to move this to App.js
  const [tasks, setTasks] = useState(mockTasks)
  
  return (
    <>
      <section className="heading">
        <h1>All Tasks</h1>
      </section>

      <Link to='/add-task' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Add New Task
      </Link>

      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default Home