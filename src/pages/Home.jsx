import {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaQuestionCircle} from 'react-icons/fa'
import Tasks from "./Tasks"

function Home({user}) {

  // Need to get this from backend. Might need to move this to App.js
  const [tasks, setTasks] = useState([
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
    },
  ]
  )

  const addTask = async (newtask) => {
    // const res = await fetch('http://localhost:5000/tasks', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(task),
    // })

    // const data = await res.json()

    // setTasks([...tasks, data])

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...newtask }
    setTasks([...tasks, newTask])
  }

  
  return (
    
    <>
        <section className="heading">
            <h1>All Tasks</h1>
        </section>

        <Link to={{
          pathname:'/add-task',
          data:{
            addTask: {addTask}
          }
            }} className='btn btn-reverse btn-block'>
        
            <FaQuestionCircle /> Add New Task
        </Link>

        <Tasks tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default Home