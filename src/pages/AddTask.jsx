import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
//import {useSelector} from 'react-redux'

function AddTask() {

  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate()

  // Need to create new task and add to database
  const onSubmit = (e) => {
    e.preventDefault()
    const url = process.env.REACT_APP_API_URL + "todo_create/";
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "Content-Type"
      },
      body: JSON.stringify({
        title: task,
        date_due: date.toISOString().split('T')[0],
        description: description,
        user:1
      }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          return data
        })
      .then((data) => setTask(data))
      .finally(task ? navigate('/'): null)

    navigate('/')
  }

  return (
    <>
      <section className='heading'>
        <h1>Add New Task</h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='task'>Task Title</label>
            <input type='text'
              name='title' id='title'className='form-control' placeholder='Add task here' value={task} onChange={(e) => setTask(e.target.value)}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Task Description</label>
            <textarea name='description' id='description'
              className='form-control' placeholder='Add description here' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className='form-group'>
            <form >
              <label htmlFor="date">Task Deadline</label>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </form>
          </div>
          <div className='form-group' >
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddTask