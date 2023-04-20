import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import Tasks from "./Tasks"

function Home(props) {

  // will need to be props.userId later
  const userId = "1"

  const [tasks, setTasks] = useState([])

  useState(() => {
    const url = process.env.REACT_APP_API_URL + "todos/" + userId;
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return data
      })
      .then((data) => setTasks(data))
  }, [])

  // Need to get this from backend. Might need to move this to App.js

  return (
    <>
      <section className="heading">
        <h1>All Tasks</h1>
      </section>

      <Link to='/add-task' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Add New Task
      </Link>

      <Tasks tasks={tasks} />
    </>
  )
}

export default Home