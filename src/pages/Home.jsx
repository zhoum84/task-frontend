import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import Tasks from "./Tasks"

function Home(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "todos/" + props.user;
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        console.log("data from home", data)
        return data
      })
      .then((data) => setTasks(data))
  }, [])

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